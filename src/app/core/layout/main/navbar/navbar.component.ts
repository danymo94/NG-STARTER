import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'navbar-component',
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavBarComponent {
  layoutService = inject(LayoutService);
  constructor() {}

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
}
