import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-image-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './image-section.component.html',
  styleUrl: './image-section.component.css'
})
export class ImageSectionComponent implements OnInit {
  services: { image_url: string }[] = []; // Tipado más estricto
  constructor(private apiServices : ApiService) {}
  ngOnInit() {
    this.apiServices.getServicios().subscribe({
      next: (data) => {
        this.services = Array.isArray(data) ? data : [];
        if (this.services.length < 4) {
          console.warn('No hay suficientes servicios. Se requieren al menos 4 elementos.');
        }
        this.services.forEach((service, index) => {
          if (!service?.image_url) {
            console.warn(`El servicio en el índice ${index} no tiene image_url`);
          }
        });
      },
      error: (err) => console.error('Error al obtener datos:', err),
    });
  }
}