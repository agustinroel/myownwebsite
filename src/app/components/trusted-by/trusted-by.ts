import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-trusted-by',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe, ScrollRevealDirective],
  templateUrl: './trusted-by.html',
  styleUrl: './trusted-by.css',
})
export class TrustedBy {
  private readonly themeService = inject(ThemeService);

  protected get clients() {
    return [
      {
        name: 'Banco Santander',
        logo: 'https://static.cdnlogo.com/logos/b/30/banco-santander.svg',
        className: 'h-6 md:h-7', // Santander is naturally tall, make it smaller
      },
      {
        name: 'MAPFRE',
        logo: 'assets/logos/mapfre.png',
        className: 'h-8 md:h-10',
      },
      {
        name: 'Generalitat de Catalunya',
        logo:
          this.themeService.theme() === 'light'
            ? 'assets/logos/catalunya-color.png'
            : 'assets/logos/catalunya.png',
        className: 'h-9 md:h-11',
      },
      {
        name: 'Mercamadrid',
        logo: 'assets/logos/mercamadrid.png',
        className: 'h-9 md:h-11',
      },
      {
        name: 'Hestia Alliance',
        logo: 'assets/logos/hestia.svg',
        className: 'h-8 md:h-10',
      },
      {
        name: 'COFA',
        logo: 'assets/logos/cofa.svg',
        className: 'h-9 md:h-11',
      },
    ];
  }

  protected onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.add('hidden');
    const fallback = img.nextElementSibling;
    if (fallback) {
      fallback.classList.remove('hidden');
    }
  }
}
