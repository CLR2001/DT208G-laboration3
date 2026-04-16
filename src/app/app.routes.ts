import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Conversion } from './pages/conversion/conversion';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'conversion', component: Conversion },
  { path: 'about', component: About }
];
