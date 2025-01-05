import { Routes } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {AboutMeComponent} from './components/about-me/about-me.component';

export const routes: Routes = [
  { path: 'home', component: MainComponent, children: [
      { path: 'about', component: AboutMeComponent },
      { path: '**', redirectTo: 'about' },
      { path: '', redirectTo: 'about', pathMatch: 'full' },
    ]},
  { path: '**', redirectTo: 'home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
