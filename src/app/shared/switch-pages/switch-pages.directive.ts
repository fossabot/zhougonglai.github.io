import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  OnInit
} from '@angular/core';
import {TweenMax, Power2, Expo} from 'gsap';

const VERTICAL = 'vertical', HORIZONTAL = 'horizontal';

@Directive({selector: '[appSwitchPages]', exportAs: 'appSwitchPages'})
export class SwitchPagesDirective implements OnInit {
  // 当前 滚轴的Y轴位置
  private scrollTop;

  private scrollLeft;

  private startX: number;
  private startY: number;
  private endX: number;
  private endY: number;

  down = false;
  pointStart: MouseEvent;
  pointEnd: MouseEvent;
  // 当前 page下标
  private pageIndex = 0;
  // 滚动中 ?
  private running = false;
  // page下标变更通知
  @Output()private pageIndexChange = new EventEmitter();

  @Input()private appSwitchPages: string;

  /**
   * 下一页
   */
  public nextPage() {
    this.scrollTo(this.pageIndex + 1);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    switch (this.appSwitchPages) {
      case VERTICAL:
        this.renderer.addClass(this.el.nativeElement, VERTICAL);
        break;
      case HORIZONTAL:
        this.renderer.addClass(this.el.nativeElement, HORIZONTAL);
        break;
      default:
        this.appSwitchPages = VERTICAL;
        this.renderer.addClass(this.el.nativeElement, VERTICAL);
    }
  }
  // 方向手势
  directionPointer (): string {
    if (Math.abs(this.pointEnd.screenX - this.pointStart.screenX) > 55 ||
        Math.abs(this.pointEnd.screenY - this.pointStart.screenY) > 55) {
      if (Math.abs(this.pointEnd.screenX - this.pointStart.screenX) > Math.abs(this.pointEnd.screenY - this.pointStart.screenY)) {
        if (this.pointEnd.screenX - this.pointStart.screenX > this.pointStart.screenX - this.pointEnd.screenX) {
          return 'right';
        } else {
          return 'left';
        }
      } else {
        if (this.pointEnd.screenY - this.pointStart.screenY > this.pointStart.screenY - this.pointEnd.screenY) {
          return 'down';
        } else {
          return 'up';
        }
      }
    }
  }

  reaction(direction: string) {
    switch (direction) {
      case 'right':
        if (this.appSwitchPages === HORIZONTAL) {
          // console.log('drag right');
        }
        break;
      case 'left':
        if (this.appSwitchPages === HORIZONTAL) {
          // console.log('drag left');
        }
        break;
      case 'down':
        if (this.appSwitchPages === VERTICAL.toString()) {
          this.scrollTer(false);
        }
        break;
      case 'up':
        if (this.appSwitchPages === VERTICAL.toString()) {
          this.nextPage();
        }
        break;
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
    // console.log(this.el.nativeElement.scrollTop); {阀值} 是个 经验值 可以是 9 ~ 15之间的值
    if (this.el.nativeElement.scrollTop - this.scrollTop > 10) {
      this.scrollTer();
    } else if (this.scrollTop - this.el.nativeElement.scrollTop > 10) {
      this.scrollTer(false);
    } else {
      // TODO: 函数防抖(Debounce) this.scrollTer(true, this.pageIndex);
    }
  }

  @HostListener('mousedown', ['$event'])
  private onMouseDown($event: MouseEvent) {
    this.down = true;
    this.renderer.addClass(this.el.nativeElement, 'drag');
    switch (this.appSwitchPages) {
      case HORIZONTAL:
        this.pointStart = $event;
        this.startX = $event.pageX - this.el.nativeElement.offsetLeft;
        this.startY = $event.pageY - this.el.nativeElement.offsetTop;
        this.scrollLeft = this.el.nativeElement.scrollLeft;
        // console.log(`layer (${$event.layerX}, ${$event.layerY}) , start :(${this.startX} , ${this.startY}) , ${this.scrollLeft}`);
        break;
      case VERTICAL:
        this.pointStart = $event;
        break;
    }
  }

  @HostListener('mouseleave', ['$event'])
  private onMouseleave($event: MouseEvent) {
    this.down = false;
    this.renderer.removeClass(this.el.nativeElement, 'drag');
  }

  @HostListener('mouseup', ['$event'])
  private onMouseUp($event: MouseEvent) {
    this.down = false;
    this.renderer.removeClass(this.el.nativeElement, 'drag');
    switch (this.appSwitchPages) {
      case HORIZONTAL:
        this.pointEnd = $event;
        this.reaction(this.directionPointer());
        break;
      case VERTICAL:
        this.pointEnd = $event;
        this.reaction(this.directionPointer());
    }
  }

  @HostListener('mousemove', ['$event'])
  private onMouseMove($event: MouseEvent) {
    $event.preventDefault();
    switch (this.appSwitchPages) {
      case HORIZONTAL:
      if (this.down) {
        const x = $event.pageX - this.el.nativeElement.offsetLeft;
        const wark = x - this.startX;
        this.el.nativeElement.scrollLeft = this.scrollLeft - wark;
      }
        break;
    }
  }

  /**
   * 滚动调节器
   * @param {boolean} direction 方向 ? true 下 : false 上
   * @param {number} size 翻页的量级
   */
  protected scrollTer(direction: boolean = true, size: number = 1) {
    this.running = true;
    this
      .scrollProcess(direction, size)
      .then(() => {
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
      const scrollSize = direction
        ? this.scrollTop + size * this.el.nativeElement.clientHeight
        : this.scrollTop - size * this.el.nativeElement.clientHeight;
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
    (index - this.pageIndex) > 0
      ? this.scrollTer(true, index - this.pageIndex)
      : this.scrollTer(false, this.pageIndex - index);
  }
}
