import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
 
    constructor(private authService: AuthService, 
      private router: Router
      ) {}
  
    username: string = '';
    password: string = '';
    mensajeError: string = '';
    
    showPassword: boolean = false;

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }

    login() {
      // Llama al servicio de autenticación para verificar las credenciales
      
    }
  
    borrarCampos() {
      
      this.username = '';
      this.password = '';
    }
  
    cancelar() {
      
      this.router.navigate(['']);
    }
  }
  
