import { SideBarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { Component } from '@angular/core';

@Component({
  selector: 'main-component',
  imports: [SideBarComponent, ContentComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
