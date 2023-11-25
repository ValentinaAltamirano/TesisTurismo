import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Collapse, Dropdown, initTE } from 'tw-elements';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  ngOnInit(): void {
    // Burger menus
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
      for (let i = 0; i < burger.length; i++) {
        burger[i].addEventListener('click', () => {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
      for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }

    if (backdrop.length) {
      for (let i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener('click', () => {
          for (let j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
          }
        });
      }
    }
    
      initTE({ Collapse, Dropdown });
  }

  isAuthenticated: boolean = false;

  constructor(public authService: AuthService, 
    private router: Router) {
      this.isAuthenticated = authService.isAuthenticatedUser();
    }

    
  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  logout(): void {
    // Lógica para cerrar sesión, por ejemplo, eliminando tokens o eliminando la sesión.
    this.isAuthenticated = false;
    this.authService.isAuthenticated = false;
    window.location.reload();
  }
  
}
