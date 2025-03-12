import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FotterComponent } from './fotter/fotter.component';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterModule,
    HeaderComponent,
    FotterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object,private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Dar tiempo para que se cargue todo
      setTimeout(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
        // Opcional: Actualizar AOS después de inicializar
        AOS.refresh();
      }, 500);
    }
  }
}