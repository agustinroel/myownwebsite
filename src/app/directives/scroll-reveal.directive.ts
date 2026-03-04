import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealClass = 'reveal-visible';
  @Input() threshold = 0.1;
  @Input() delay = 0;

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.el.nativeElement.classList.add(this.revealClass);
            }, this.delay);
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: this.threshold },
    );

    this.el.nativeElement.classList.add('reveal-hidden');
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
