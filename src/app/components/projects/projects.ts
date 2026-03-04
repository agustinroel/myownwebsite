import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
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
  imports: [TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects: Project[] = [
    {
      translationKey: 'BANDMATE',
      tags: ['Angular', 'Supabase', 'Tailwind CSS', 'RxJS'],
      icon: '🎸',
      gradient: 'from-violet-500 to-purple-600',
      liveUrl: 'https://bandmate-pro.vercel.app',
      repoUrl: 'https://github.com/agustinroel/bandmate',
      typeKey: 'PERSONAL',
    },
    {
      translationKey: 'NAOLOGIC',
      tags: ['Angular', 'TypeScript', 'Clean Architecture', 'Standalone Components'],
      icon: '📅',
      gradient: 'from-cyan-500 to-blue-600',
      repoUrl: 'https://github.com/agustinroel/naologic-timeline',
      typeKey: 'TECHNICAL',
    },
  ];
}
