import { SideBarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from './layout.service';

@Component({
  selector: 'layout-component',
  imports: [MainComponent, SideBarComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.sidebarOpen$.subscribe(isOpen => {
      this.onSidebarStateChange(isOpen);
    });
  }

  onSidebarStateChange(isOpen: boolean) {
    const sidebar = document.getElementById('sidebar-wrapper');
    const main = document.getElementById('main-wrapper');

    if (isOpen) {
      sidebar?.classList.remove('left-full');
      sidebar?.classList.add('left-0');
      main?.classList.remove('right-0');
      main?.classList.add('right-full');
      console.log('Sidebar is open');
    } else {
      sidebar?.classList.remove('left-0');
      sidebar?.classList.add('left-full');
      main?.classList.remove('right-full');
      main?.classList.add('right-0');
      console.log('Sidebar is closed');
    }
  }
}
