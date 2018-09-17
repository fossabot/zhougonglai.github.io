import { register } from 'register-service-worker'

// if ('serviceWorker' in navigator && 'PushManager' in window) {
//   register(`${process.env.BASE_URL}sw.js`,{
//     ready(swReg){
//       const swRegistration = swReg
//       const applicationServerPublicKey = 'BHeP722UmVXRacAnjgG5ckX8drAgo8lUJiJ06tHX4VG5enwj6IiGoIih7WoxRZeNL4hWmw4Lwp5ITXIGxCnHY68';
//       const applicationServerKey = window.urlB64ToUint8Array(applicationServerPublicKey);
//       swRegistration.pushManager.subscribe({
//         userVisibleOnly: true, applicationServerKey
//       })
//       .then((subscription) => {
//         console.log('User is subscribed.', subscription);
//       })
//       .catch((err) => {
//         console.log('Failed to subscribe the user: ', err);
//       });
//     },
//     error(err){
//       console.log('error', err)
//     }
//   })
// }

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready (registration) {
      console.log(registration,
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
      // const swRegistration = registration;
    },
    cached (registration) {
      console.log(registration,'Content has been cached for offline use.')
    },
    updated (registration) {
      console.log(registration,'New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
