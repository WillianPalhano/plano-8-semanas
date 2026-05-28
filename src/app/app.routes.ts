import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'exemplo-signals',
        loadComponent: () => import('./exemplo-signals/exemplo-signals').then(m => m.ExemploSignals)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
