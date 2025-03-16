import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SchemaServiceService {

  constructor(
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object // Detecta si está en el navegador
  ) { }

  /**
   * Agrega el esquema de la organización Q-Tap Software
   */
  addOrganizationSchema() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Q-Tap Software',
      'url': 'https://qtapsoftware.com',
      'logo': 'https://qtapsoftware.com/logo/logo-negro.png',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+57-311-623-1415',
        'contactType': 'customer service'
      },
      'sameAs': [
        'https://www.facebook.com/profile.php?id=61573588761824',
        'https://www.instagram.com/qtapsoftware/'
      ]
    };

    this.addScript(schema, 'organization-schema');
  }

  /**
   * Agrega un esquema de producto dinámico
   */
  addProductSchema(product: any) {
    if (!product) return; // Evita errores si no hay producto

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': product.name,
      'description': product.description,
      'image': product.imageUrl,
      'offers': {
        '@type': 'Offer',
        'price': product.price,
        'priceCurrency': 'COP'
      }
    };

    this.addScript(schema, `product-schema-${product.name.replace(/\s+/g, '-')}`);
  }

  /**
   * Agrega una etiqueta <script> con el Schema.org correspondiente
   */
  private addScript(schema: any, id: string) {
    // Solo ejecutar en el navegador para evitar errores en SSR
    if (!isPlatformBrowser(this.platformId)) return;

    const existingScript = document.getElementById(id);
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
