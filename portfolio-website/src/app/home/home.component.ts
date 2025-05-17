import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';
import { ParticlesComponent } from '../particles/particles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  showPopup = false;

  ngAfterViewInit() {
    try {
      const typedElement = document.querySelector('#typed-text');
      if (!typedElement) {
        console.error('Typed.js: #typed-text element not found in DOM');
        return;
      }
      new Typed('#typed-text', {
        strings: ['Experienced Full Stack Developer', 'MEARN Enthusiast', 'Creative Coder'],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1000,
        loop: true,
      });
      console.log('Typed.js initialized successfully');
    } catch (error) {
      console.error('Typed.js initialization failed:', error);
    }
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.showPopup && !target.closest('.popup-content') && !target.closest('.get-in-touch-btn')) {
      this.closePopup();
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (window.innerWidth <= 640) return;
    const card = document.querySelector('.holographic-card') as HTMLElement;
    if (!card || !this.showPopup) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const rotateX = (mouseY / rect.height) * -15;
    const rotateY = (mouseX / rect.width) * 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    const card = document.querySelector('.holographic-card') as HTMLElement;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  }
}