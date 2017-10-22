import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { TweenMax, Power2 } from 'gsap';

@Directive({
  selector: '[appSwitchPages]'
})
export class SwitchPagesDirective {
  // 当前 滚轴的Y轴位置
  scrollTop = 0;
  // 当前 page下标
  pageIndex = 0;
  // 滚动中 ?
  running = false;
  // page下标变更通知
  @Output() pageIndexChange = new EventEmitter();

  /**
   * 滚动到 指定页
   * @param {number} index 目标页下标
   */
  @Input()
  set currentIndex(index: number) {
    this.scrollTo(index);
  }

  constructor(private el: ElementRef) {
  }

  /**
   * 滚动事件
   * @param {Event} $event
   */
  @HostListener('scroll', ['$event'])
  onScroll($event: Event) {
    if (this.running) {
      return;
    }
    if (this.el.nativeElement.scrollTop - this.scrollTop > 25) {
      this.scrollTer();
    } else if (this.scrollTop - this.el.nativeElement.scrollTop > 25) {
      this.scrollTer(false);
    }
  }

  /**
   * 滚动调节器
   * @param {boolean} direction 方向 ? true 下 : false 上
   * @param {number} size 翻页的量级
   */
  public scrollTer(direction: boolean = true, size: number = 1) {
    this.running = true;
    this.scrollProcess(direction, size).then(() => {
      this.pageIndex = direction ? (this.pageIndex + size) : (this.pageIndex - size);
      this.pageIndexChange.emit(this.pageIndex);
      this.scrollTop = this.el.nativeElement.scrollTop;
      console.log('index', this.pageIndex, 'scrollTop', this.scrollTop);
      this.running = false;
    });
  }

  /**
   * 翻页程序
   * @param {boolean} direction
   * @param {number} size
   * @returns {Promise<any>}
   */
  scrollProcess(direction: boolean = true, size: number = 1) {
    return new Promise((resolve, reject) => {
      const scrollSize = direction ?
        this.scrollTop + size * this.el.nativeElement.clientHeight :
        this.scrollTop - size * this.el.nativeElement.clientHeight;
      TweenMax.to(this.el.nativeElement, 1, {
        scrollTop: scrollSize,
        ease: Power2.easeInOut,
        onComplete() {
          resolve();
        }
      });
    });
  }

  /**
   * 指示器滚动
   * @param {number} index
   */
  public scrollTo(index: number) {
    (index - this.pageIndex) > 0 ? this.scrollTer(true, index - this.pageIndex) : this.scrollTer(false, this.pageIndex - index);
  }
}
