import { Component } from '@angular/core';
import { DescriptionComponent } from "./description/description.component";
import { DifferentiatorsComponent } from "./differentiators/differentiators.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [DescriptionComponent, DifferentiatorsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
