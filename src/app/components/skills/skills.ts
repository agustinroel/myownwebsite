import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  name: string;
  level: number;
  icon: string;
  categoryKey: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly categoryKeys = ['CORE', 'STATE', 'UI', 'TESTING', 'DEVOPS'];

  protected readonly skills: Skill[] = [
    // CORE
    {
      name: 'Angular (v2+ / Standalone / Signals)',
      level: 95,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      categoryKey: 'CORE',
    },
    {
      name: 'TypeScript',
      level: 95,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      categoryKey: 'CORE',
    },
    {
      name: 'RxJS',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg',
      categoryKey: 'CORE',
    },
    {
      name: 'SSR (Angular Universal)',
      level: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      categoryKey: 'CORE',
    },

    // STATE
    {
      name: 'NgRx',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg',
      categoryKey: 'STATE',
    },
    { name: 'Signals', level: 85, icon: '⚡', categoryKey: 'STATE' },
    { name: 'BehaviorSubject / Services', level: 95, icon: '🔗', categoryKey: 'STATE' },

    // UI
    {
      name: 'Tailwind CSS',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      categoryKey: 'UI',
    },
    {
      name: 'Bootstrap',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      categoryKey: 'UI',
    },
    { name: 'Angular Material', level: 85, icon: '🎨', categoryKey: 'UI' },
    {
      name: 'SCSS / BEM',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
      categoryKey: 'UI',
    },
    { name: 'Responsive / A11y', level: 85, icon: '♿', categoryKey: 'UI' },

    // TESTING
    {
      name: 'Jasmine / Karma',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original.svg',
      categoryKey: 'TESTING',
    },
    {
      name: 'Jest',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
      categoryKey: 'TESTING',
    },
    {
      name: 'Vitest',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
      categoryKey: 'TESTING',
    },

    // DEVOPS
    {
      name: 'Nx Monorepos',
      level: 85,
      icon: 'https://cdn.simpleicons.org/nx/white',
      categoryKey: 'DEVOPS',
    },
    {
      name: 'Docker',
      level: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      categoryKey: 'DEVOPS',
    },
    { name: 'CI/CD Pipelines', level: 80, icon: '🔧', categoryKey: 'DEVOPS' },
    {
      name: 'Git / GitFlow',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      categoryKey: 'DEVOPS',
    },
  ];

  getSkillsByCategory(categoryKey: string): Skill[] {
    return this.skills.filter((s) => s.categoryKey === categoryKey);
  }
}
