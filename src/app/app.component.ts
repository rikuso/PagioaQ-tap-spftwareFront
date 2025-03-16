import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FotterComponent } from './fotter/fotter.component';
import { isPlatformBrowser } from '@angular/common';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { MetaTagServiceService } from './services/meta-tag-service.service';
import { SchemaServiceService } from './services/schema-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    FotterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private metaTagService: MetaTagServiceService,
    private schemaService: SchemaServiceService
  ) {}
  
  ngOnInit(): void {
    // Inicializar el servicio de meta tags
    this.metaTagService.initRouteMetaTags();
    // Solo ejecutar en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.schemaService.addOrganizationSchema();
    }
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