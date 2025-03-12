import { ChangeDetectorRef, Component,OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagen-texto',
  standalone: true,
  imports: [],
  templateUrl: './imagen-texto.component.html',
  styleUrl: './imagen-texto.component.css'
})
export class ImagenTextoComponent implements OnInit {
  post:any []= [{ slug: '' }];
  
  constructor(private apiService: ApiService,  private cdr: ChangeDetectorRef,private router: Router) {}

  ngOnInit() {
     this.apiService.getDataBlog().subscribe({
       next: (data) => {
          this.post = Array.isArray(data) ? data : [];
          this.cdr.detectChanges(); // 👀 Forzar actualización de la vista
       },
       error: (err) => console.error('Error al obtener datos:', err)
     });
   }
   convertToSlug(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }
  goToService(pageTitle: string) {
    const route = '/blog'; 
    this.router.navigate([route]);
   
  }
   
}
