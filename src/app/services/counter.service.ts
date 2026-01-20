import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private _count = signal(0);

  // Expose the count as a read-only signal
  readonly count = this._count.asReadonly();

  // Increment the counter
  increment(): void {
    this._count.update((v) => v + 1);
  }

  // Decrement the counter
  decrement(): void {
    this._count.update((v) => v - 1);
  }

  // Reset the counter
  reset(): void {
    this._count.set(0);
  }

  // Get current value (optional helper)
  getValue(): number {
    return this._count();
  }
}
