import { Routes, PreloadAllModules } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { animation } from '@angular/animations';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), data: { animation: 'HomePage' } },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent), data: { animation: 'AboutPage' } },
  { path: 'projects', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent), data: { animation: 'ProjectsPage' } },
   { path: 'skills', loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent),data:{animation :'SkillsPage'} },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent), data: { animation: 'ContactPage' } },
  { path: '**', redirectTo: '' },
];