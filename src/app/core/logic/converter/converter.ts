import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class Converter {
  from: string;
  to: string;
  @Input() id!: string;
  @Input() conversion!: string;
  @Input() unit1!: string;
  @Input() unit2!: string;
  originalSwap: boolean = true;
  constructor() {
    this.to = ''
    this.from = ''
  }

  feetToMeters(feet: number): number {
    return feet / 3.28084;
  }

  metersToFeet(meters: number): number {
    return meters * 3.28084;
  }

  fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) / 1.8;
  }

  celsiusToFahrenheit(celsius: number): number {
    return (celsius * 1.8) + 32;
  }

  swapUnits(): void {
    const temp1 = this.unit1;
    this.unit1 = this.unit2;
    this.unit2 = temp1;
    this.originalSwap = !this.originalSwap;
    
    const temp2 = this.from;
    this.from = this.to;
    this.to = temp2;
  }

  onInputChange(event: any): void {
    if (this.originalSwap) {
      switch (this.conversion) {
        case 'distance':
          this.to = this.feetToMeters(Number(this.from)).toFixed(4).toString();
          
          break;
        case ('temperature'):
          this.to = this.fahrenheitToCelsius(Number(this.from)).toFixed(1).toString();
          break;
        default: 
          console.log('Not a valid conversion unit.');
      }
    } else {
      switch (this.conversion) {
        case 'distance':
          this.to = this.feetToMeters(Number(this.from)).toFixed(4).toString();
          break;
        case ('temperature'):
          this.to = this.celsiusToFahrenheit(Number(this.from)).toFixed(1).toString();
          break;
        default: 
          console.log('Not a valid conversion unit.');
      }
    }
    if (this.from === '') {
      this.to = '';
    }
  }
}
