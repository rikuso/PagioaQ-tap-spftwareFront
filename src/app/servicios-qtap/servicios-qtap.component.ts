import { Component } from '@angular/core';
import { HeroServicesComponent } from "./hero-services/hero-services.component";
import { SeccionServicesComponent } from "./seccion-services/seccion-services.component";

@Component({
  selector: 'app-servicios-qtap',
  standalone: true,
  imports: [HeroServicesComponent, SeccionServicesComponent],
  templateUrl: './servicios-qtap.component.html',
  styleUrl: './servicios-qtap.component.css'
})
export class ServiciosQtapComponent {

}
