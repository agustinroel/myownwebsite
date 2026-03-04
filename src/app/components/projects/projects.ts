import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  gradient: string;
  liveUrl?: string;
  repoUrl?: string;
  type: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects: Project[] = [
    {
      title: 'Bandmate',
      description:
        'Plataforma para músicos que permite gestionar canciones, acordes y arreglos de forma colaborativa. Incluye un modo de práctica con auto-scroll, gestión de setlists y comunidad.',
      tags: ['Angular', 'Supabase', 'Tailwind CSS', 'RxJS'],
      icon: '🎸',
      gradient: 'from-violet-500 to-purple-600',
      liveUrl: 'https://bandmate-pro.vercel.app',
      repoUrl: 'https://github.com/agustinroel/bandmate',
      type: 'Proyecto Personal',
    },
    {
      title: 'Naologic Timeline',
      description:
        'Prueba técnica desarrollada para Naologic: vista de timeline interactiva de dos paneles con drag & drop, detección de solapamientos y gestión de órdenes de trabajo.',
      tags: ['Angular', 'TypeScript', 'Clean Architecture', 'Standalone Components'],
      icon: '📅',
      gradient: 'from-cyan-500 to-blue-600',
      repoUrl: 'https://github.com/agustinroel/naologic-timeline',
      type: 'Prueba Técnica',
    },
  ];
}
