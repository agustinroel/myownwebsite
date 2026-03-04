import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { TrustedBy } from './components/trusted-by/trusted-by';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Solutions } from './components/solutions/solutions';
import { Projects } from './components/projects/projects';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, TrustedBy, About, Skills, Solutions, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
