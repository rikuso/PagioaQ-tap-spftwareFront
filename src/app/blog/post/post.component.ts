import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[] = [];
  featuredPosts: any[] = [];
  categories: string[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBlogPost().subscribe({
      next: (data) => {
        this.posts = Array.isArray(data) ? data : [];

        // Calcular el número total de páginas
        this.totalPages = this.posts.length;

        // Extraer categorías únicas de los posts
        this.extractCategories();

        // Seleccionar algunos posts destacados (por ejemplo, los 3 primeros)
        this.featuredPosts = this.posts.slice(0, 3);
      },
      error: (err) => console.error('Error al obtener datos:', err)
    });
  }

  extractCategories(): void {
    // Extraer categorías únicas de los posts
    const allTags: string[] = [];
    this.posts.forEach(post => {
      if (post.tags) {
        const tagsArray = Array.isArray(post.tags) ? post.tags : [post.tags];
        allTags.push(...tagsArray);
      }
    });
    // Eliminar duplicados
    this.categories = [...new Set(allTags)];
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  get currentPost() {
    return this.posts[this.currentPage - 1];
  }
}