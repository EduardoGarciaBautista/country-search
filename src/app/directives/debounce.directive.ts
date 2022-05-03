import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  Subscription
} from 'rxjs';

@Directive({
  selector: '[appDebounce]'
})
export class DebounceDirective implements OnDestroy {

  @Input() debounce = 300;

  private searchSubscription: Subscription;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private el: ElementRef) {
    const event = fromEvent(el.nativeElement, 'keydown');
    this.searchSubscription = event.pipe(
      debounceTime(this.debounce),
      distinctUntilChanged()
    ).subscribe((r: any) => {
      if (r.srcElement) {
        this.valueChange.emit(r.srcElement.value);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

}
