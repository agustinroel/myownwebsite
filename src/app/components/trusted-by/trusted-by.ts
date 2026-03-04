import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-trusted-by',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe, ScrollRevealDirective],
  templateUrl: './trusted-by.html',
  styleUrl: './trusted-by.css',
})
export class TrustedBy {
  protected readonly clients = [
    {
      name: 'Banco Santander',
      logo: 'https://static.cdnlogo.com/logos/b/30/banco-santander.svg',
    },
    {
      name: 'MAPFRE',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Mapfre_logo.svg',
    },
    {
      name: 'Generalitat de Catalunya',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Logotipo_de_la_Generalitat_de_Catalunya.svg',
    },
    {
      name: 'Mercamadrid',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Logotipo_de_Mercamadrid.svg',
    },
    {
      name: 'Hestia Alliance',
      logo: 'https://logo.clearbit.com/hestiaalliance.org',
    },
    {
      name: 'COFA',
      logo: 'https://logo.clearbit.com/cofa.es',
    },
  ];

  protected onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.add('hidden');
    const fallback = img.nextElementSibling;
    if (fallback) {
      fallback.classList.remove('hidden');
    }
  }
}
