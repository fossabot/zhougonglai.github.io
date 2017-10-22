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
    if (this.el.nativeElement.scrollTop > this.scrollTop) {
      this.scrollTer();
    } else {
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
      console.log(`第${this.pageIndex}页`);
      this.scrollTop = this.el.nativeElement.scrollTop;
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
      TweenMax.to(this.el.nativeElement, 1, {
        scrollTop: `${direction ? '+' : '-'}=${size * this.el.nativeElement.children[0].clientHeight}px`,
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
