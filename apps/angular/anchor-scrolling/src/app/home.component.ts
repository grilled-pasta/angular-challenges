import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavButtonComponent } from './nav-button.component';

@Component({
  selector: 'app-home',
  template: `
    <nav-button [routerLink]="['/foo']" class="fixed left-1/2 top-3">
      Foo Page
    </nav-button>
    <div id="top" class="h-screen bg-gray-500">
      Empty
      <nav-button [routerLink]="[]" fragment="bottom">Scroll Bottom</nav-button>
    </div>
    <div id="bottom" class="h-screen bg-blue-300">
      I want to scroll each
      <nav-button anchor="top">Scroll Top</nav-button>
    </div>
  `,
  standalone: true,
  imports: [NavButtonComponent, RouterModule],
})
export class HomeComponent {}
