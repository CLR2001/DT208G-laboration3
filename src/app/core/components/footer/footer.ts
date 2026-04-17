import { Component, ViewEncapsulation } from '@angular/core';
import { Theme } from "../../logic/theme-button/theme-button";

@Component({
  selector: 'app-footer',
  imports: [Theme],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class Footer {}
