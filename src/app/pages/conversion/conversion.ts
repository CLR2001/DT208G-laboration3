import { Component, ViewEncapsulation } from '@angular/core';
import { Converter } from "../../core/logic/converter/converter";

@Component({
  selector: 'app-conversion',
  imports: [Converter],
  templateUrl: './conversion.html',
  styleUrl: './conversion.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class Conversion {}
