import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hero-services',
  standalone: true,
  imports: [],
  templateUrl: './hero-services.component.html',
  styleUrl: './hero-services.component.css'
})
export class HeroServicesComponent implements OnInit {
  services: any[] = [];
  selectedService: any ; // Se inicializa en null para evitar errores
  titles: string = "Servicios";
  serviceName: string = '';
  constructor(private apiService: ApiService,private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.apiService.getData().subscribe({
      next: (data) => {
        this.services = Array.isArray(data) ? data : [];

        // Buscar el servicio que coincida con this.titles
        this.selectedService = this.services.find(service => service.title === this.titles) || null;

        if (this.selectedService) {
          console.log('Servicio encontrado:', this.selectedService);
        } else {
          console.warn('No se encontró un servicio con el título:', this.titles);
        }
      },
      error: (err) => {
        console.error('Error obteniendo datos:', err);
      }
    });
  }
}