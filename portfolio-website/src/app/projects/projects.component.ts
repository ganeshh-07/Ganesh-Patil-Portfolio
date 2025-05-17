import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../particles/particles.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'StackTheTask',
      description: 'A full-stack task manager with task CRUD, secure authentication, and role-based access, built with Angular, Node.js, and MongoDB. Users can efficiently track, update, and manage their daily tasks with ease.',
      image: 'assets/stacktask.png',
      demoLink: 'https://stack-the-task.vercel.app',
      skills: [
        { logo: 'assets/skills/angular.svg', name: 'Angular' },
        { logo: 'assets/skills/typescript.svg', name: 'TypeScript' },
        { logo: 'assets/skills/nodejs.svg', name: 'Node.js' },
        { logo: 'assets/skills/mongodb.svg', name: 'MongoDB' }
      ]
    },
    {
      title: 'HireHub',
      description: 'A MERN stack application for job seekers and recruiters with role-based access, resume parsing, and smart job matching features. It includes secure authentication and an intuitive dashboard for managing applications.',
      image: 'assets/job-portal.png',
      demoLink: 'https://job-portal-coral-tau.vercel.app',
      skills: [
        { logo: 'assets/skills/react.svg', name: 'React' },
        { logo: 'assets/skills/javascript.svg', name: 'JavaScript' },
        { logo: 'assets/skills/nodejs.svg', name: 'Node.js' },
        { logo: 'assets/skills/mongodb.svg', name: 'MongoDB' }
      ]
    },
    {
      title: 'WeatherBuddy',
      description: 'A responsive React application that shows real-time weather updates and interactive maps using the OpenWeather API. It supports location-based search and provides weather insights with an intuitive UI. Leaflet.js is used for map integration.',
      image: 'assets/weather-forcast.png',
      demoLink: 'https://whether-forecast-alpha.vercel.app',
      skills: [
        { logo: 'assets/skills/react.svg', name: 'React' },
        { logo: 'assets/skills/javascript.svg', name: 'JavaScript' },
        { logo: 'assets/skills/nodejs.svg', name: 'Node.js' },
        { logo: 'assets/skills/leafletjs.png', name: 'Leaflet.js' }
      ]
    },
    
  ];
}