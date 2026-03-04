import { Component, HostListener, signal, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected isScrolled = signal(false);
  protected isMobileMenuOpen = signal(false);
  private translate = inject(TranslateService);
  protected currentLang = signal('en');

  protected readonly navLinks = [
    { labelKey: 'NAV.HOME', href: '#hero' },
    { labelKey: 'NAV.ABOUT', href: '#about' },
    { labelKey: 'NAV.SKILLS', href: '#skills' },
    { labelKey: 'NAV.SOLUTIONS', href: '#solutions' },
    { labelKey: 'NAV.PROJECTS', href: '#projects' },
    { labelKey: 'NAV.CONTACT', href: '#contact' },
  ];

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((val) => !val);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  toggleLanguage() {
    const newLang = this.currentLang() === 'en' ? 'es' : 'en';
    this.translate.use(newLang);
    this.currentLang.set(newLang);
  }
}
