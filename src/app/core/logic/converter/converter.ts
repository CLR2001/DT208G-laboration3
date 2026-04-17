import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icon } from '../icons/icons';

@Component({
  selector: 'app-converter',
  imports: [FormsModule, Icon],
  templateUrl: './converter.html',
  styleUrl: './converter.scss',
  encapsulation: ViewEncapsulation.Emulated
})

export class Converter {
  from: string;
  to: string;
  @Input() id!: string;
  @Input() unit1!: string;
  @Input() unit2!: string;
  @Input() conversion!: string;
  originalSwap: boolean = true;
  constructor() {
    this.to = ''
    this.from = ''
  }

  private readonly conversions = {
    distance: {
      imperialToMetric: (value: number) => value / 3.2084,
      metricToImperial: (value: number) => value * 3.2084,
      decimals: 4
    },
    temperature: {
      imperialToMetric: (value: number) => (value - 32) / 1.8,
      metricToImperial: (value: number) => (value * 1.8) + 32,
      decimals: 1
    }
  }

  onInput(direction: 'from' | 'to'): void {
    const valueToConvert = direction === 'from' ? this.from : this.to;

    if (valueToConvert === '' || !valueToConvert) {
      this.reset();
      return;
    }
    
    const key = this.conversion as keyof typeof this.conversions;
    const settings = this.conversions[key];
    
    const useImperialToMetric = (direction === 'from' && this.originalSwap) || (direction === 'to' && !this.originalSwap);
    const property = useImperialToMetric ? 'imperialToMetric' : 'metricToImperial';
    const formulaToUse = settings[property];
    
    const result = formulaToUse(Number(valueToConvert));

    if (direction === 'from') {
      this.to = result.toFixed(settings.decimals);
    } else {
      this.from = result.toFixed(settings.decimals);
    }
  }

  reset() {
    this.from = '';
    this.to = '';
  }

  swapUnits(): void {
    const temp1 = this.unit1;
    this.unit1 = this.unit2;
    this.unit2 = temp1;
    
    const temp2 = this.from;
    this.from = this.to;
    this.to = temp2;

    this.originalSwap = !this.originalSwap
  }
}