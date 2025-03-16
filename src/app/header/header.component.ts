import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports :[RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  pages: any[] = [];
 
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private apiServices : ApiService,private router: Router) {}
  ngOnInit() {
    this.apiServices.getData().subscribe({
      next: (data) => {
        this.pages = Array.isArray(data) ? data : [];
      },
      error: (err) => console.error('Error al obtener datos:', err)
    });
  }

  convertToSlug(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }

  goToService(pageTitle: string) {
    const route = '/' + this.convertToSlug(pageTitle);  
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const navbarBurger = document.querySelector('.navbar-burger');
      const navbarMenu = document.getElementById('navbarBasicExample');
      const menuItems = document.querySelectorAll('.navbar-menu .custom-navbar-item');
  
      if (navbarBurger && navbarMenu) {
        navbarBurger.addEventListener('click', () => {
          navbarBurger.classList.toggle('is-active');
          navbarMenu.classList.toggle('is-active');
        });
  
        // Cerrar el menú cuando se hace clic en un enlace
        menuItems.forEach(item => {
          item.addEventListener('click', () => {
            navbarBurger.classList.remove('is-active');
            navbarMenu.classList.remove('is-active');
          });
        });
      } else {
        console.error('Navbar burger or menu not found');
      }
    }
  }
}
