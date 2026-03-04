import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Solution {
  translationKey: string;
  tags: string[];
  icon: string;
  gradient: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [NgClass, TranslateModule, ScrollRevealDirective],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
  protected readonly solutions: Solution[] = [
    {
      translationKey: 'ARCHITECTURE',
      tags: ['Angular', 'Nx Monorepo', 'Clean Architecture'],
      icon: '🏗️',
      gradient: 'from-violet-500/20 to-purple-600/20',
    },
    {
      translationKey: 'PERFORMANCE',
      tags: ['Lazy Loading', 'OnPush', 'RxJS'],
      icon: '🚀',
      gradient: 'from-cyan-500/20 to-blue-600/20',
    },
    {
      translationKey: 'STATE',
      tags: ['NgRx', 'Signals', 'RxJS', 'Akita'],
      icon: '⚡',
      gradient: 'from-amber-500/20 to-orange-600/20',
    },
    {
      translationKey: 'LEADERSHIP',
      tags: ['Code Review', 'ESLint', 'Prettier', 'Mentoring'],
      icon: '🤝',
      gradient: 'from-emerald-500/20 to-teal-600/20',
    },
    {
      translationKey: 'UI',
      tags: ['Tailwind CSS', 'Angular Material', 'A11y', 'SCSS'],
      icon: '🎨',
      gradient: 'from-pink-500/20 to-rose-600/20',
    },
    {
      translationKey: 'DEVOPS',
      tags: ['Docker', 'CI/CD', 'Nx', 'GitFlow'],
      icon: '🔧',
      gradient: 'from-sky-500/20 to-indigo-600/20',
    },
  ];
}
