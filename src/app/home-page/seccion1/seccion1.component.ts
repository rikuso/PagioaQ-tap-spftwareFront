import { Component } from '@angular/core';
import { TransformamosIdeasComponent } from "./transformamos-ideas/transformamos-ideas.component";
import { ImageSectionComponent } from './image-section/image-section.component';


@Component({
  selector: 'app-seccion1',
  standalone: true,
  imports: [TransformamosIdeasComponent, ImageSectionComponent],
  templateUrl: './seccion1.component.html',
  styleUrl: './seccion1.component.css'
})
export class Seccion1Component {

}
