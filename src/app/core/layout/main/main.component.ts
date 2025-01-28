import { ContentComponent } from './content/content.component';
import { NavBarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-component',
  imports: [NavBarComponent, ContentComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
