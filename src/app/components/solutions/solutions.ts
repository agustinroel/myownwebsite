import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface Solution {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  gradient: string;
  achievement?: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [NgClass],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {
  protected readonly solutions: Solution[] = [
    {
      title: 'Arquitectura Frontend Escalable',
      description:
        'Diseño de aplicaciones modulares con Clean Architecture y Feature-based folders. Microfrontends y librerías compartidas que permiten a los equipos crecer sin fricciones.',
      tags: ['Angular', 'Nx Monorepo', 'Clean Architecture'],
      icon: '🏗️',
      gradient: 'from-violet-500/20 to-purple-600/20',
      achievement: 'Equipos escalando sin fricciones con microfrontends',
    },
    {
      title: 'Optimización de Rendimiento',
      description:
        'Estrategias avanzadas de Lazy Loading, Change Detection OnPush y uso eficiente de RxJS para flujos asíncronos sin fugas de memoria ni bloqueos.',
      tags: ['Lazy Loading', 'OnPush', 'RxJS'],
      icon: '🚀',
      gradient: 'from-cyan-500/20 to-blue-600/20',
      achievement: 'Reducción del 40% en tiempos de carga con asset optimization',
    },
    {
      title: 'Gestión de Estado Reactivo',
      description:
        'Implementación inteligente de patrones de estado: desde la simplicidad de BehaviorSubject hasta la robustez de NgRx y la nueva era de Signals.',
      tags: ['NgRx', 'Signals', 'RxJS', 'Akita'],
      icon: '⚡',
      gradient: 'from-amber-500/20 to-orange-600/20',
      achievement: 'Flujos de datos predecibles y mantenibles a escala',
    },
    {
      title: 'Liderazgo Técnico & Mentoría',
      description:
        'Code Reviews constructivos, definición de estándares de calidad con ESLint/Prettier, y guía activa a perfiles junior hacia las mejores prácticas del ecosistema.',
      tags: ['Code Review', 'ESLint', 'Prettier', 'Mentoring'],
      icon: '🤝',
      gradient: 'from-emerald-500/20 to-teal-600/20',
      achievement: 'Equipos entregando código de mayor calidad y más rápido',
    },
    {
      title: 'Interfaces de Usuario Premium',
      description:
        'Desarrollo de UIs modernas, accesibles (A11y) y responsive que priorizan la experiencia del usuario final con Angular Material, Tailwind CSS y SCSS (BEM).',
      tags: ['Tailwind CSS', 'Angular Material', 'A11y', 'SCSS'],
      icon: '🎨',
      gradient: 'from-pink-500/20 to-rose-600/20',
      achievement: 'Aplicaciones inclusivas y profesionales desde la base',
    },
    {
      title: 'DevOps & CI/CD',
      description:
        'Configuración de pipelines de integración y entrega continua con Docker, Nx y GitFlow para asegurar despliegues seguros y automatizados.',
      tags: ['Docker', 'CI/CD', 'Nx', 'GitFlow'],
      icon: '🔧',
      gradient: 'from-sky-500/20 to-indigo-600/20',
      achievement: 'Despliegues automatizados y sin interrupciones',
    },
  ];
}
