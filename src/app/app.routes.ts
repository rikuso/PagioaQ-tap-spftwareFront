import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiciosQtapComponent } from './servicios-qtap/servicios-qtap.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },  // Cambio importante aquí
  { path: 'inicio', component: HomePageComponent },
  { path: 'servicios', component: ServiciosQtapComponent },
  { path: 'nosotros', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactComponent},
  { path: '**', redirectTo: '' } // Manejo de rutas no encontradas
  // Otras rutas...
];