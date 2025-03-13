import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
<<<<<<< HEAD

  private apiUrl = 'http://backend-qtap.vercel.app/api';
=======
  


  private apiUrl = 'https://backend-qtap.vercel.app/api';
>>>>>>> e44b108cb910fe8c587be009e5b5a690607d7343
  
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> { 
    return this.http.get<any[]>(`${this.apiUrl}/pages`);
  }
  getDataBlog(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/blog`);
  }

  getServicios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/services`);
  }
/*este debo verificar  si lo hago funcionar*/ 
  getBlogPost(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blog`);
  }
/* post Formualrio*/
enviarFormularioContacto(datosContacto: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/contact`, datosContacto);
}

}
