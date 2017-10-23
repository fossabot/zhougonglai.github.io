import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, OnInit } from '@angular/core';
import { TweenMax, Power2, Expo } from 'gsap';


const VERTICAL = 'vertical', HORIZONTAL = 'horizontal';

@Directive({
  selector: '[appSwitchPages]',
  exportAs: 'appSwitchPages'
})
export class SwitchPagesDirective implements OnInit {
  // 当前 滚轴的Y轴位置
  private scrollTop = 0;
  // 当前 page下标
  private pageIndex = 0;
  // 滚动中 ?
  private running = false;
  // page下标变更通知
  @Output() private pageIndexChange = new EventEmitter();

  @Input() private appSwitchPages: string;

  /**
   * 下一页
   */
  public nextPage() {
    this.scrollTo(this.pageIndex + 1);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    switch (this.appSwitchPages) {
      case VERTICAL:
        this.renderer.addClass(this.el.nativeElement, VERTICAL);
        break;
      case HORIZONTAL:
        this.renderer.addClass(this.el.nativeElement, HORIZONTAL);
        break;
      default:
        this.renderer.addClass(this.el.nativeElement, VERTICAL);
    }
  }

  /**
   * 滚动事件 {阀值}
   * @param {Event} $event
   */
  @HostListener('scroll', ['$event'])
  private onScroll($event: Event) {
    if (this.running) {
      return;
    }
    // console.log(this.el.nativeElement.scrollTop);
    // {阀值} 是个 经验值 可以是 9 ~ 15之间的值
    if (this.el.nativeElement.scrollTop - this.scrollTop > 10) {
      this.scrollTer();
    } else if (this.scrollTop - this.el.nativeElement.scrollTop > 10) {
      this.scrollTer(false);
    }
  }

  /**
   * 滚动调节器
   * @param {boolean} direction 方向 ? true 下 : false 上
   * @param {number} size 翻页的量级
   */
  protected scrollTer(direction: boolean = true, size: number = 1) {
    this.running = true;
    // console.log('scroll start');
    this.scrollProcess(direction, size).then(() => {
    //   console.log('scroll done');
      this.pageIndex = direction ? (this.pageIndex + size) : (this.pageIndex - size);
      this.pageIndexChange.emit(this.pageIndex);
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
  protected scrollProcess(direction: boolean = true, size: number = 1) {
    return new Promise((resolve, reject) => {
      const scrollSize = direction ?
        this.scrollTop + size * this.el.nativeElement.clientHeight :
        this.scrollTop - size * this.el.nativeElement.clientHeight;
      TweenMax.to(this.el.nativeElement, 0.65, {
        scrollTop: scrollSize,
        ease: Expo.easeOut,
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
