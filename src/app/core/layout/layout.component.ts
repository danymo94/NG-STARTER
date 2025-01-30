import { MainComponent } from './main/main.component';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';
import { NavBarComponent } from './navbar/navbar.component';

@Component({
  selector: 'layout-component',
  imports: [MainComponent, NavBarComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.sidebarOpen$.subscribe((isOpen) => {
      this.onSidebarStateChange(isOpen);
    });
  }

  onSidebarStateChange(isOpen: boolean) {
    const sidebar = document.getElementById('sidebar-wrapper');
    const content = document.getElementById('content-wrapper');

    if (isOpen) {
      sidebar?.classList.remove('-left-full');
      sidebar?.classList.add('left-0');
      content?.classList.remove('right-0', 'lg:w-full');
      content?.classList.add('lg:right-0', 'lg:w-5/6', '-right-full');
      console.log('Sidebar is open');
    } else {
      sidebar?.classList.remove('left-0');
      sidebar?.classList.add('-left-full');
      content?.classList.remove('-right-full', 'lg:w-5/6');
      content?.classList.add('right-0', 'lg:w-full');
      console.log('Sidebar is closed');
    }
  }
}
