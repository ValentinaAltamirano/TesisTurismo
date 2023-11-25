import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    ) { }
    
  private apiUrl = 'http://localhost:8000/api/';

  isAuthenticated: any = false;

  obtenerRolEmpresario(): Observable<any> {
    return this.http.get(`${this.apiUrl}/roles/?nombre=empresario`);
  }

  crearRolEmpresario(): Observable<any> {
    const rolEmpresario = {
      nombre: 'empresario',
      // Otros campos del modelo Rol
    };

    return this.http.post(`${this.apiUrl}/roles/`, rolEmpresario);
  }

  crearEmpresario(nuevoEmpresario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/empresarios/`, nuevoEmpresario);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
