import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly navLinks = [
    { name: 'NAV.HOME', href: '#hero' },
    { name: 'NAV.ABOUT', href: '#about' },
    { name: 'NAV.SKILLS', href: '#skills' },
    { name: 'NAV.PROJECTS', href: '#projects' },
    { name: 'NAV.CONTACT', href: '#contact' },
  ];

  protected readonly socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/agustinroel',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/agustinroel',
    },
  ];
}
