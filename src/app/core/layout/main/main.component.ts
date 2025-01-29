import { SideBarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-component',
  imports: [SideBarComponent, ContentComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
