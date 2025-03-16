import { Component, AfterViewInit, OnInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InfoTextComponent } from './info-text/info-text.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ContactFormComponent, InfoTextComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private el: ElementRef
  ) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Inicializar AOS aquí también
      setTimeout(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }, 100);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Obtener referencia al video
      const videoElement = this.el.nativeElement.querySelector('video');
      
      if (videoElement) {
        // Cargar el video
        videoElement.load();
        
        // Función para intentar reproducir el video
        const playVideo = () => {
          videoElement.play().catch((error: any) => {
            console.warn("Error al reproducir el video automáticamente:", error);
            
            // Si falla, intentar de nuevo al interactuar con la página
            document.body.addEventListener('touchstart', () => {
              videoElement.play().catch((err: any) => console.warn("No se pudo reproducir el video después de interacción:", err));
            }, { once: true });
          });
        };
        
        // Intentar reproducir después de un pequeño retraso
        setTimeout(playVideo, 300);
      }
      
      // Refrescar AOS
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  }  

}