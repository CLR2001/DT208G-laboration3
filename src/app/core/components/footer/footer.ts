import { Component } from '@angular/core';
import { Theme } from "../../services/theme/theme";

@Component({
  selector: 'app-footer',
  imports: [Theme],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
