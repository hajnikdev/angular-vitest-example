import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="counter">
      <button type="button" (click)="counter.decrement()">-</button>
      <span class="value">{{ counter.count() }}</span>
      <button type="button" (click)="counter.increment()">+</button>
    </div>
    <button type="button" (click)="counter.reset()">Reset</button>
  `,
  styles: [
    `
      :host {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;

        .counter {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;

          button {
            width: 40px;
            height: 40px;
            font-size: 18px;
            cursor: pointer;
          }
        }

        .value {
          min-width: 24px;
          text-align: center;
        }
      }
    `,
  ],
})
export class CounterComponent {
  constructor(public counter: CounterService) {}
}
