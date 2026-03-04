import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly categories = [
    'Framework & Core',
    'State Management',
    'UI & Styling',
    'Testing',
    'Herramientas & DevOps',
  ];

  protected readonly skills: Skill[] = [
    // Framework & Core
    {
      name: 'Angular (v2+ / Standalone / Signals)',
      level: 95,
      icon: '🅰️',
      category: 'Framework & Core',
    },
    { name: 'TypeScript', level: 95, icon: '🔷', category: 'Framework & Core' },
    { name: 'RxJS', level: 90, icon: '🔄', category: 'Framework & Core' },
    { name: 'SSR (Angular Universal)', level: 75, icon: '🌐', category: 'Framework & Core' },

    // State Management
    { name: 'NgRx', level: 90, icon: '📦', category: 'State Management' },
    { name: 'Signals', level: 85, icon: '⚡', category: 'State Management' },
    { name: 'Akita', level: 75, icon: '🗂️', category: 'State Management' },
    { name: 'BehaviorSubject / Services', level: 95, icon: '🔗', category: 'State Management' },

    // UI & Styling
    { name: 'Tailwind CSS', level: 90, icon: '💨', category: 'UI & Styling' },
    { name: 'Angular Material', level: 85, icon: '🎨', category: 'UI & Styling' },
    { name: 'SCSS / BEM', level: 90, icon: '✂️', category: 'UI & Styling' },
    { name: 'Responsive / A11y', level: 85, icon: '♿', category: 'UI & Styling' },

    // Testing
    { name: 'Jasmine / Karma', level: 80, icon: '🧪', category: 'Testing' },
    { name: 'Jest', level: 80, icon: '🃏', category: 'Testing' },
    { name: 'Cypress (E2E)', level: 75, icon: '🌲', category: 'Testing' },

    // DevOps & Tools
    { name: 'Nx Monorepos', level: 85, icon: '🏢', category: 'Herramientas & DevOps' },
    { name: 'Docker', level: 75, icon: '🐳', category: 'Herramientas & DevOps' },
    { name: 'CI/CD Pipelines', level: 80, icon: '🔧', category: 'Herramientas & DevOps' },
    { name: 'Git / GitFlow', level: 90, icon: '📋', category: 'Herramientas & DevOps' },
  ];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((s) => s.category === category);
  }
}
