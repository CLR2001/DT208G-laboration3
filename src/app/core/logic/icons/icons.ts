import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  templateUrl: './icons.html'
})
export class Icon {
  @Input() name!: string;
}
