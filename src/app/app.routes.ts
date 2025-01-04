import { Routes } from '@angular/router';
import {MainComponent} from './pages/main/main.component';

export const routes: Routes = [
  { path: 'home', component: MainComponent, children: [

    ]},
  { path: '**', redirectTo: 'home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
