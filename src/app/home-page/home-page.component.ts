import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { LogoComponent } from "../logo/logo.component";
import { Seccion1Component } from "../seccion1/seccion1.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, LogoComponent, Seccion1Component],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
