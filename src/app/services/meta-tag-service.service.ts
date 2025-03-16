import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ApiService } from './api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetaTagServiceService {

  constructor(
    private apiService: ApiService,
    private meta: Meta,
    private title: Title,
    private router: Router
  ) { }

  // Método para configurar meta tags usados de la BD
  updateMetaTagsFromPage(page: any): void {
    if (!page) return;

    // Usar los campos específicos de tu tabla pages
    this.title.setTitle(page.meta_title || 'Tu Empresa');

    // Meta tags estándar
    if (page.meta_description) {
      this.meta.updateTag({ name: 'description', content: page.meta_description });
    }

    if (page.meta_keywords) {
      this.meta.updateTag({ name: 'keywords', content: page.meta_keywords });
    }

    if (page.meta_robots) {
      this.meta.updateTag({ name: 'robots', content: page.meta_robots });
    }

    // Open Graph (para compartir en redes sociales)
    this.meta.updateTag({ property: 'og:title', content: page.meta_title || page.title || 'Q-tap Software' });
    this.meta.updateTag({ property: 'og:description', content: page.meta_description || 'Potencia tu negocio con desarrollo web, marketing digital, impresiones 3D NFC. Expertos en tecnología para empresas.' });
    this.meta.updateTag({ property: 'og:url', content: `https://qtapsoftware.com/${page.slug || ''}` });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Q-tap Software' });
  }

  // Método para cargar meta tags según la URL actual
  loadMetaTagsForCurrentPath(path: string = ''): void {
    // Eliminar la barra inicial si existe
    if (path.startsWith('/')) {
      path = path.substring(1);
    }
    // Si la ruta está vacía, buscar la página de inicio
    const slug = path || 'inicio';

    // Obtener la página correspondiente de la API
    this.apiService.getPageBySlug(slug).subscribe(
      page => {
        if (page) {
          this.updateMetaTagsFromPage(page);
        } else {
          // Si no se encuentra la página, usar valores por defecto
          this.setDefaultMetaTags();
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error al cargar metadatos de la página:', error);
        if (error.status === 404) {
          console.error('Página no encontrada');
        }
        this.setDefaultMetaTags();
      }
    );
  }

  // Método para configurar meta tags por defecto
  setDefaultMetaTags(): void {
    this.title.setTitle('Q-tap Software');
    this.meta.updateTag({ name: 'description', content: 'Potencia tu negocio con desarrollo web, marketing digital, impresiones 3D y NFC. Expertos en tecnología para empresas.' });
    this.meta.updateTag({ name: 'keywords', content: 'software, desarrollo, aplicaciones, consultoria' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Q-tap Software' });
    this.meta.updateTag({ property: 'og:description', content: 'Potencia tu negocio con desarrollo web, marketing digital, impresiones 3D y NFC. Expertos en tecnología para empresas.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://qtapsoftware.com/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }

  // Método para inicializar el servicio y escuchar cambios de ruta
  initRouteMetaTags(): void {
    // Configuración inicial
    this.loadMetaTagsForCurrentPath(this.router.url);

    // Escuchar cambios de ruta
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.loadMetaTagsForCurrentPath(event.urlAfterRedirects);
    });
  }
}