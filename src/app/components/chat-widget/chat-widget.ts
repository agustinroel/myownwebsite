import { Component, ElementRef, ViewChild, inject, signal, EffectRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.html',
  styleUrl: './chat-widget.css',
})
export class ChatWidget {
  public isOpen = signal<boolean>(false);
  public userInput = signal<string>('');

  public geminiService = inject(GeminiService);

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  constructor() {
    // Scroll to bottom whenever messages update
    effect(() => {
      const msgs = this.geminiService.messages();
      setTimeout(() => this.scrollToBottom(), 50);
    });
  }

  toggleChat() {
    this.isOpen.update((val) => !val);
  }

  async sendMessage() {
    const text = this.userInput().trim();
    if (!text) return;

    this.userInput.set('');
    await this.geminiService.sendMessage(text);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollToBottom(): void {
    try {
      if (this.scrollContainer) {
        this.scrollContainer.nativeElement.scrollTop =
          this.scrollContainer.nativeElement.scrollHeight;
      }
    } catch (err) {}
  }
}
