import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-trusted-by',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe],
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
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mercamadrid.svg',
    },
    {
      name: 'Ayuntamiento de Salou',
      logo: 'https://www.salou.cat/@@site-logo/logo_Ajuntament_Salou-HC.svg',
    },
    {
      name: 'Hestia',
      logo: 'https://static.cdnlogo.com/logos/h/34/hestia.svg', // Assuming a high-quality logo or placeholder
    },
    {
      name: 'Colegio de Farmacéuticos de Alicante',
      logo: 'https://www.cofalicante.com/images/logo_cofa.png', // Fallback to png if svg not found, or I'll create an SVG placeholder
    },
  ];
}
