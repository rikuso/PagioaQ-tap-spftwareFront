import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home-page/home-page.component').then(m => m.HomePageComponent) },
  { path: 'inicio', loadComponent: () => import('./home-page/home-page.component').then(m => m.HomePageComponent) },
  { path: 'servicios', loadComponent: () => import('./servicios-qtap/servicios-qtap.component').then(m => m.ServiciosQtapComponent) },
  { path: 'nosotros', loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent) },
  { path: 'blog', loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent) },
  { path: 'contacto', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' } // Manejo de rutas no encontradas
];
//LAZY LOADING MEJOR Y OPTIMIZA LA NAVEGACION