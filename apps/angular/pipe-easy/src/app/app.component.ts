import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ComputePipe } from './compute.pipe';

@Component({
  standalone: true,
  imports: [NgFor, ComputePipe],
  selector: 'app-root',
  template: `
    @for (person of persons; track person; let index = $index) {
      {{ person | compute: index }}
    }
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];
}
