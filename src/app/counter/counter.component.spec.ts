import { describe, it, expect, beforeEach } from 'vitest';
import { CounterComponent } from './counter.component';
import { CounterService } from '../services/counter.service';

describe('CounterComponent (unit test)', () => {
  let component: CounterComponent;
  let mockService: CounterService;

  beforeEach(() => {
    // Mock service with only the methods used
    mockService = {
      count: () => 0,
      increment: () => {},
      decrement: () => {},
      reset: () => {},
    } as unknown as CounterService;

    component = new CounterComponent(mockService);
  });

  it('should have the service injected', () => {
    expect(component.counter).toBe(mockService);
  });

  it('should call increment on service', () => {
    const spy = vi.spyOn(mockService, 'increment');
    component.counter.increment();
    expect(spy).toHaveBeenCalled();
  });

  it('should call decrement on service', () => {
    const spy = vi.spyOn(mockService, 'decrement');
    component.counter.decrement();
    expect(spy).toHaveBeenCalled();
  });

  it('should call reset on service', () => {
    const spy = vi.spyOn(mockService, 'reset');
    component.counter.reset();
    expect(spy).toHaveBeenCalled();
  });
});
