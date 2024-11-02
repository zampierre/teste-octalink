import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent {
  isMenuOpen = false; // Estado do menus
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu
  }
}
