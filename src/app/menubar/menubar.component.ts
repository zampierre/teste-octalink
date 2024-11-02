import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateAndClose(path: string) {
    this.router.navigate([path]); // Navega para o caminho especificado
    this.isMenuOpen = false; // Fecha o menu
  }
}
