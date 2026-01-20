import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <div class="app-container">
      <h1>Angular Vitest Counter Example</h1>

      <app-counter></app-counter>
      <hr />
      <!-- Directly manipulate service -->
      <div class="shared-counter">
        <h2>Shared Counter</h2>
        <p>Current value: {{ counter.count() }}</p>
        <button (click)="counter.increment()">Increment</button>
        <button (click)="counter.decrement()">Decrement</button>
        <button (click)="counter.reset()">Reset</button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        text-align: center;

        .shared-counter {
          button {
            margin: 0 0.5rem;
          }
        }
      }
    `,
  ],
  providers: [], // optional: service is already root-provided
})
export class AppComponent {
  constructor(public counter: CounterService) {}
}
