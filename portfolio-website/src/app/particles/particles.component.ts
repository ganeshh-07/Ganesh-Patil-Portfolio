import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss'],
})
export class ParticlesComponent implements AfterViewInit {
  ngAfterViewInit() {
    try {
      const particlesElement = document.querySelector('#particles-js');
      if (!particlesElement) {
        console.error('Particles.js: #particles-js element not found in DOM');
        return;
      }
      if (typeof particlesJS === 'undefined') {
        console.error('Particles.js: Global particlesJS object not found. Ensure particles.js is loaded via script tag.');
        return;
      }
      particlesJS.load('particles-js', 'assets/particles.json', () => {
        console.log('Particles.js loaded successfully in ParticlesComponent');
      });
    } catch (error) {
      console.error('Particles.js initialization failed:', error);
    }
  }
}