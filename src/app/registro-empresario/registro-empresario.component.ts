import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registro-empresario',
  templateUrl: './registro-empresario.component.html',
  styleUrls: ['./registro-empresario.component.css']
})
export class RegistroEmpresarioComponent {
  
    nombre: string = '';
    apellido: string = '';
    email: string = '';
    tel: string = '';
    razonSocial: string = '';
    descripcion: string = '';

    pass: string = '';pass2 = '';
    emailValido = true;
    contraseñasIguales = true;

    constructor(private auth: AuthService) {}

    verificarEmail() {
      this.emailValido = this.email.includes('@');
    }

    verificarContraseñas() {
      this.contraseñasIguales = this.pass === this.pass2;
    }
    
    crearEmpresario() {
      this.auth.obtenerRolEmpresario().subscribe(
        (roles: any[]) => {
          let rolEmpresario;
  
          if (roles.length > 0) {
            rolEmpresario = roles[0];
          } else {
            // Si no existe, crea un nuevo rol empresario
            this.auth.crearRolEmpresario().subscribe(
              (response) => {
                rolEmpresario = response;
              },
              (error) => {
                console.error('Error al crear el rol empresario:', error);
              }
            );
          }
  
          // Ahora, puedes usar el rolEmpresario para crear el Empresario
          const nuevoEmpresario = {
            usuario: {
              rol: rolEmpresario,
              nombre: this.nombre,
              apellido: this.apellido,
              email: this.email,
              tel: this.tel,
              // Otros campos del modelo Usuario
            },
            razonSocial: this.razonSocial,
            descripcion: this.descripcion
            // Otros campos del modelo Empresario
          };

          
  
          if (this.emailValido && this.contraseñasIguales) {
          this.auth.crearEmpresario(nuevoEmpresario).subscribe(
            (response) => {
              console.log('Empresario creado con éxito:', response);
            },
            (error) => {
              console.error('Error al crear el empresario:', error);
            }
          );
          } else {
            console.error('Por favor, verifica que el email sea válido y que las contraseñas coincidan.');
          }

        },
        (error) => {
          console.error('Error al obtener el rol empresario:', error);
        }
      );
    }

  
}
