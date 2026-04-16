import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg [attr.class]="'icon ' + name">
      <use [attr.xlink:href]="'/icons.svg#' + name"></use>
    </svg>
  `,
  styles: `.icon { width: 24px; height: 24px; fill: currentColor; }`
})
export class Icon {
  @Input() name!: string;
}
