import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly stats = [
    { value: '8+', label: 'Años de experiencia' },
    { value: 'Angular', label: 'Expertise principal' },
    { value: 'SOLID', label: 'Principios de diseño' },
    { value: '∞', label: 'Ganas de aprender' },
  ];

  protected readonly differentiators = [
    {
      icon: '🏗️',
      title: 'Arquitectura Escalable',
      description:
        'Clean Architecture, microfrontends y librerías compartidas para equipos que crecen sin fricciones.',
    },
    {
      icon: '⚡',
      title: 'Estado Reactivo',
      description:
        'Dominio de Signals, NgRx y RxJS. Sé cuándo la simplicidad basta y cuándo hace falta robustez.',
    },
    {
      icon: '🚀',
      title: 'Rendimiento',
      description:
        'Lazy Loading avanzado, Change Detection OnPush y flujos RxJS sin fugas de memoria.',
    },
    {
      icon: '🤝',
      title: 'Liderazgo & Mentoría',
      description:
        'Code Reviews constructivos, estándares con ESLint/Prettier y guía a perfiles junior.',
    },
  ];
}
