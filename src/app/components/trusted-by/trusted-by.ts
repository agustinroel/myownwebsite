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
      logo: 'assets/logos/mapfre.svg',
    },
    {
      name: 'Generalitat de Catalunya',
      logo: 'assets/logos/generalitat.svg',
    },
    {
      name: 'Mercamadrid',
      logo: 'assets/logos/mercamadrid.svg',
    },
    {
      name: 'Ayuntamiento de Salou',
      logo: 'assets/logos/salou.svg',
    },
    {
      name: 'Hestia',
      logo: 'https://static.cdnlogo.com/logos/h/34/hestia.svg',
    },
    {
      name: 'Colegio de Farmacéuticos de Alicante',
      logo: 'assets/logos/cofa.png',
    },
  ];
}
