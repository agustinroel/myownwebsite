import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  protected readonly displayText = signal('');
  protected readonly showCursor = signal(true);

  private readonly roles = [
    'Senior Frontend Developer',
    'Arquitecto Angular',
    'Ingeniero de Software',
    'Mentor & Tech Lead',
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimeout: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
  }

  private type() {
    const currentRole = this.roles[this.roleIndex];

    if (!this.isDeleting) {
      this.displayText.set(currentRole.substring(0, this.charIndex + 1));
      this.charIndex++;
      if (this.charIndex === currentRole.length) {
        this.isDeleting = true;
        this.typingTimeout = setTimeout(() => this.type(), 2000);
        return;
      }
    } else {
      this.displayText.set(currentRole.substring(0, this.charIndex - 1));
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    const speed = this.isDeleting ? 40 : 80;
    this.typingTimeout = setTimeout(() => this.type(), speed);
  }
}
