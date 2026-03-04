import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Project {
  id: string;
  translationKey: string;
  tags: string[];
  icon: string;
  gradient: string;
  liveUrl?: string;
  repoUrl?: string;
  typeKey: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected expandedProjectId = signal<string | null>(null);

  protected readonly projects: Project[] = [
    {
      id: 'bandmate',
      translationKey: 'BANDMATE',
      tags: ['Angular', 'Supabase', 'Tailwind CSS', 'RxJS'],
      icon: '🎸',
      gradient: 'from-violet-500 to-purple-600',
      liveUrl: 'https://bandmate-pro.vercel.app',
      repoUrl: 'https://github.com/agustinroel/bandmate',
      typeKey: 'PERSONAL',
    },
    {
      id: 'naologic',
      translationKey: 'NAOLOGIC',
      tags: ['Angular', 'TypeScript', 'Clean Architecture', 'Standalone Components'],
      icon: '📅',
      gradient: 'from-cyan-500 to-blue-600',
      repoUrl: 'https://github.com/agustinroel/naologic-timeline',
      typeKey: 'TECHNICAL',
    },
  ];

  protected toggleProjectDetails(id: string) {
    this.expandedProjectId.update((prev) => (prev === id ? null : id));
  }
}
