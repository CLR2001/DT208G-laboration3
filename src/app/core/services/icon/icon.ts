import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg class="icon">
      <use [attr.href]="'/icons.svg#icon-' + name"></use>
    </svg>
  `
})
export class Icon {
  @Input() name!: string;
}
