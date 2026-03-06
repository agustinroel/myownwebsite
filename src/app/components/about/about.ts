import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly stats = [
    { value: '6+', translationKey: 'EXP' },
    { value: '500+', translationKey: 'MENTORING' },
    { value: '30+', translationKey: 'APPS' },
  ];

  protected readonly differentiators = [
    {
      icon: '🏗️',
      translationKey: 'ARCHITECTURE',
    },
    {
      icon: '⚡',
      translationKey: 'STATE',
    },
    {
      icon: '🚀',
      translationKey: 'PERFORMANCE',
    },
    {
      icon: '🤝',
      translationKey: 'LEADERSHIP',
    },
  ];
}
