import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParticlesComponent } from 'app/particles/particles.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  summary = "I'm Ganesh Patil, a passionate Junior Software Developer based in Pune, MH. I specialize in building responsive web applications using modern technologies like Angular, Node.js, and MongoDB. Currently pursuing a Master's in Computer Science, I’m dedicated to creating seamless user experiences and solving complex problems. In my free time, I explore new tech trends and contribute to open-source projects.";

  education = [
  {
    degree: 'Master of Computer Science',
    institution: 'Savitribai Phule Pune University',
    location: 'Pune, MH',
    period: '2023 - 2025',
    description: [
      'Pursuing post-graduate degree with honors.',
      'Focused on web development and database systems.',
      'Completed coursework in advanced software engineering.'
    ],
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Savitribai Phule Pune University',
    location: 'Pune, MH',
    period: '2020 - 2023',
    description: [
      'Graduated with a strong foundation in computer science principles.',
      'Gained practical experience in software development and database design.',
      'Completed projects involving full-stack web development.'
    ],
  },
];


 workExperience = [
  {
    position: 'Junior Software Developer',
    company: 'ITS CyberTech India Pvt. Ltd.',
    location: 'Pune, MH',
    period: 'Aug 2023 - Present',
    description: [
      'Developed responsive web applications using Angular and Node.js.',
      'Collaborated with cross-functional teams to deliver scalable solutions.',
      'Integrated third-party APIs and optimized application performance.',
    ],
  },
];

}