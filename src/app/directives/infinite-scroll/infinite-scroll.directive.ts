import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
  standalone: true
})
export class InfiniteScrollDirective {
  @Input() scrollThreshold = 100;
  @Output() scrolled = new EventEmitter<void>();
  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    const atBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + this.scrollThreshold;

    if (atBottom) {
      this.scrolled.emit();
    }
  }

}
