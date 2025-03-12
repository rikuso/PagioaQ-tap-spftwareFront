import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-seccion-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-services.component.html',
  styleUrl: './seccion-services.component.css'
})
export class SeccionServicesComponent implements OnInit {
  services: any[] = [];
  servicioSeleccionado: any = null; // Almacena el servicio seleccionado

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getServicios().subscribe({
      next: (data) => {
        this.services = Array.isArray(data) ? data : [];
        // Seleccionar automáticamente el primer servicio al cargar los datos
        if (this.services.length > 0) {
          this.seleccionarServicio(this.services[0]);
        }
      },
      error: (err) => console.error('Error al obtener datos:', err)
    });
  }

  seleccionarServicio(servicio: any) {
    this.servicioSeleccionado = servicio;
  }
}