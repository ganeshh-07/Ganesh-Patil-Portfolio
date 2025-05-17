import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../particles/particles.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    { name: 'JavaScript', logo: 'assets/skills/javascript.svg' },
    { name: 'TypeScript', logo: 'assets/skills/typescript.svg' },
    { name: 'Angular', logo: 'assets/skills/angular.svg' },
    { name: 'React', logo: 'assets/skills/react.svg' },
    { name: 'Node.js', logo: 'assets/skills/nodejs.svg' },
    { name: 'Express', logo: 'assets/skills/expressjs.svg' },
    { name: 'MongoDB', logo: 'assets/skills/mongodb.svg' },
    { name: 'Python', logo: 'assets/skills/python.svg' },
    { name: 'HTML', logo: 'assets/skills/html.svg' },
    { name: 'CSS', logo: 'assets/skills/css.svg' },
    { name: 'Tailwind CSS', logo: 'assets/skills/tailwindcss.svg' },
    { name: 'Git', logo: 'assets/skills/github.svg' },
    { name: 'Bootstrap', logo: 'assets/skills/bootstrap.svg' },
    { name: 'Java', logo: 'assets/skills/java.svg' },
    { name: 'JSON', logo: 'assets/skills/json.svg' },
    { name: 'MySQL', logo: 'assets/skills/mysql.svg' },
    { name: 'Postman', logo: 'assets/skills/postman.svg' },
    { name: 'Sequelize', logo: 'assets/skills/sequelize.svg' },
    { name: 'Vercel', logo: 'assets/skills/vercel.svg' },
    { name: 'And More', logo: 'assets/skills/moretogo.svg' },
  ];

  // displayedSkills = this.skills.slice(0, 20);

  // constructor() {
  //   console.log('Displayed skills:', this.displayedSkills);
  // }
}