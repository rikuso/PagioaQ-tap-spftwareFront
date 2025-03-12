import { Component} from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-fotter',
  standalone: true,
  imports: [],
  templateUrl: './fotter.component.html',
  styleUrl: './fotter.component.css'
})
export class FotterComponent {
  pages: any[] = [];
  convertToSlug(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }
  constructor( private apiServices : ApiService) {}
  ngOnInit() {
    this.apiServices.getData().subscribe({
      next: (data) => {
        this.pages = Array.isArray(data) ? data : []; 
      },
      error: (err) => console.error('Error al obtener datos:', err)
    });
  }
}
