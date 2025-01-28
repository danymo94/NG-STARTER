import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'sidebar-component',
  imports: [],
  templateUrl: './sidebar.component.html',
})
export class SideBarComponent {
  layoutService = inject(LayoutService);

  constructor() {}

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
}
