import 'whatwg-fetch'
import * as qiniu from 'qiniu-js'
import {exception} from 'vue-analytics'

/**
 *  @author john
 *  @description 工具
 */

 /**
  * @desc get请求序列化
  */
export const queryString = query => 
  (typeof query === 'object')
    ? ('?' + Object.keys(query).map(param => `${param}=${encodeURIComponent(query[param])}`).join('&'))
    : ''

export const searchParams = query => 
  (typeof query === 'object')
    ? `?${new URLSearchParams(query).toString()}`
    : ''

const abortableFetch = ('signal' in new Request('')) ? window.fetch : fetch

/**
 * 阻断请求
 * @example
 * setTimeout(() => controller.abort(), 5000);
 */
const controller = new AbortController()

export const $fetch = {
  abort: () => controller.abort(),
  post:(url, token, data) => 
    abortableFetch(`${url}?token=${token}`, {
        method: 'POST', mode: 'cors',
        body: JSON.stringify(data),
        signal: controller.signal,
        credentials: process.env.NODE_ENV === 'release' ? 'include': 'same-origin'
    }).then(res => res.json())
    .catch((ex) =>{
      exception(ex);
      if(ex.name === 'AbortError') {
        console.log('request aborted')
      }
    }),
  get:(url, params) =>
    abortableFetch(`${url}${queryString(params)}`, {
        mode: 'cors', signal: controller.signal,
        credentials: process.env.NODE_ENV === 'release' ? 'include': 'same-origin'
    }).then(res => res.json())
    .catch((ex) =>{
      exception(ex)
      if (ex.name === 'AbortError') {
        console.log('request aborted')
      }
    })
}

addEventListener('fetch', event => {
  console.log('Fetch, but pass the signal through')
  const url = new URL(event.request.url);

  if (event.request.method == 'GET' && url.pathname == '/about/') {
    // Modify the URL
    url.searchParams.set('from-service-worker', 'true');
    // Fetch, but pass the signal through
    event.respondWith(
      fetch(url, { signal: event.request.signal })
    );
  }
});

/**
 * 性能监控
 */
/** 
export const observer = new PerformanceObserver(list => {
  list.getEntries().forEach(({entryType, name, duration, startTime}) => {
    if(process.env.NODE_ENV === 'production'){
      time(entryType, name, duration, startTime)
    }else{
      console.log(entryType, name, duration, startTime)
    }
  });
});
*/

// -- 七牛上传 -- //
export const observable = (file, key, token, putExtra, config) => qiniu.upload(file, key, token, putExtra, config)

/**
 * 返回终端当前 状态
 */
export const getOrientationType = () => {
    switch (window.orientation) {
        case 0:
            // 竖屏
            return "portrait-primary";
        case -90:
            // 右转90度 横屏
            return "landscape-secondary";
        case 90:
            // 左转90度 横屏
            return "landscape-primary";
        case 180:
            // 180度 竖屏
            return "portrait-secondary";
    }
}

/**
 * @desc 微信播放音乐
 */
export const autoPlayAudio = (audio, callback) => {
    const isWeiXin = /micromessenger/.test(window.navigator.userAgent.toLowerCase()) ? true : false;
    if (isWeiXin && /(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent)) {
        window.WeixinJSBridge.invoke("getNetworkType", {}, function () {
            // 在这里拿到 e.err_msg, 这里面就包含了所有的网络类型
            audio.play();
        });
    }else{
        audio.play();
    }
    audio.onended = callback || function () {};
}

/**
 * @desc 平台区分
 */
export const platform = () => {
    if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        return 'ios'
    } else if(/(Android)/i.test(navigator.userAgent)){
        return 'android'
    }
}

/**
 * @desc  节流
 * @param {func} 需要节流化的函数
 * @param {time} 节流的时间
 */
export const throttle = (fn, wait) => {
    let inThrottle, lastFn, lastTime;
    return function() {
      const context = this,
        args = arguments;
      if (!inThrottle) {
        fn.apply(context, args);
        lastTime = Date.now();
        inThrottle = true;
      } else {
        clearTimeout(lastFn);
        lastFn = setTimeout(function() {
          if (Date.now() - lastTime >= wait) {
            fn.apply(context, args);
            lastTime = Date.now();
          }
        }, wait - (Date.now() - lastTime));
      }
    };
  };

/** 
 * @desc 去抖
 * @param {func} 需要去抖函数
 * @param {time} 去抖时间
 */
export const debounce = (fn, ms = 0) => {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

/**
 * @desc 按顺序请求promise数组,形似Promise.all
 * @param {Array<Promise>}
 * @example 
 * const delay = d => new Promise(r => setTimeout(r, d));
 * runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
 * // Executes each promise sequentially, taking a total of 3 seconds to complete
 */
export const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());

/**
 * @desc  线性promise
 * @param {<Array<func>>}
 * @return {Promise<func>}
 * @example 
 * const sum = pipeAsyncFunctions(
 *   x => x + 1,
 *   x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
 *   x => x + 3,
 *   async x => (await x) + 4
 * );
 * (async () => {
 *   console.log(await sum(5)); // 15 (after one second)
 * })();
 */
export const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));


/**
 * @desc promise化
 * @param {func}
 * @return {Promise<func>}
 * @example 
 * const delay = promisify((d, cb) => setTimeout(cb, d));
 * delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s
 */
export const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

/** 
 * @desc composition组合函数
 * @param {func}
 * @return {func}
 * @example 
 * const add5 = x => x + 5;
 * const multiply = (x, y) => x * y;
 * const multiplyAndAdd5 = compose(multiply, add5);
 * compose(5, 2); // 15
 */
export const compose = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

/**
 * @desc 独立线程,
 * @param {func}
 * @return {Promise}
 */
export const runAsync = fn => {
    const worker = new Worker(
      URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
        type: 'application/javascript; charset=utf-8'
      })
    );
    return new Promise((res, rej) => {
      worker.onmessage = ({ data }) => {
        res(data), worker.terminate();
      };
      worker.onerror = err => {
        rej(err), worker.terminate();
      };
    });
  };

  /**
   * @desc 滚轴位置
   * @param {Element}
   * @return {<{x:number,y:number}>}
   */
export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  });

  /**
   * @desc hash
   * @param {String}
   * @return {Promise<String>}
   */
// export const hashBrowser = val =>
//   crypto.subtle.digest('SHA-256', new TextEncoder('utf-8').encode(val)).then(h => {
//     let hexes = [],
//       view = new DataView(h);
//     for (let i = 0; i < view.byteLength; i += 4)
//       hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
//     return hexes.join('');
//   });

  /**
   * @desc uuid
   */
export const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );