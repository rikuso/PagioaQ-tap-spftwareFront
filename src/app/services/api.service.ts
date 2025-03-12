import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://backend-qtap.vercel.app/api';
  
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
