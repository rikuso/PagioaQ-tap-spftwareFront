import { Component } from '@angular/core';
import { ImagenTextoComponent } from "../imagen-texto/imagen-texto.component";
import { SeccionImagenesComponent } from "../seccion-imagenes/seccion-imagenes.component";

@Component({
  selector: 'app-transformamos-ideas',
  standalone: true,
  imports: [ImagenTextoComponent, SeccionImagenesComponent],
  templateUrl: './transformamos-ideas.component.html',
  styleUrl: './transformamos-ideas.component.css'
})
export class TransformamosIdeasComponent {

}
