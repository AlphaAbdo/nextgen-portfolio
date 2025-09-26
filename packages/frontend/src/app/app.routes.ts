import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/main.component').then(m => m.HomeMainComponent)
  },
  {
    path: 'fish-engine',
    loadComponent: () => import('./components/fish-engine/main.component').then(m => m.FishEngineMainComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
