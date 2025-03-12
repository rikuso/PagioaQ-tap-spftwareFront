import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-image-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './image-section.component.html',
  styleUrl: './image-section.component.css'
})
export class ImageSectionComponent implements OnInit {
  services: any[] = [];
  constructor(private apiServices : ApiService) {}
  ngOnInit() {
    this.apiServices.getServicios().subscribe({
      next: (data) => {
        this.services = Array.isArray(data) ? data : [];
        console.log('Datos obtenidos:', this.services); // Depuración
      },
      error: (err) => console.error('Error al obtener datos:', err)
    });
  }

}
