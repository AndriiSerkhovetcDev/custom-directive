import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightSearch]',
  standalone: true
})
export class HighlightSearchDirective implements OnChanges {
  @Input() searchQuery!: string;
  constructor(private el: ElementRef) { }

  ngOnChanges() {
    console.log(this.searchQuery)
    if (this.searchQuery && this.searchQuery.length > 0) {
      const text = this.el.nativeElement.innerText;
      const regex = new RegExp(`(${this.escapeRegExp(this.searchQuery)})`, 'gi');
      this.el.nativeElement.innerHTML = text.replace(regex, '<mark>$1</mark>');
    }
  }
  private escapeRegExp(query: string): string {
    return query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }


}
