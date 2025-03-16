import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-info-text',
  standalone: true,
  imports: [],
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.css']
})
export class InfoTextComponent implements OnInit {
  pages: any[] = [];
  safeContent: SafeHtml = ''; // Variable para contenido seguro

  constructor(private apiService: ApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.apiService.getData().subscribe({
      next: (data) => {
        this.pages = Array.isArray(data) ? data : [];
        if (this.pages.length > 0) {
          // Sanitiza el contenido antes de usarlo en el template
          this.safeContent = this.sanitizer.bypassSecurityTrustHtml( `<div class="styled-content">${data[0].content}</div>`);
        }
      },
      error: (err) => console.error('Error al obtener datos:', err)
    });
  }
}
