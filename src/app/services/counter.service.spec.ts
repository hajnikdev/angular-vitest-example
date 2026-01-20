import { describe, it, expect, beforeEach } from 'vitest';
import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    // create a fresh instance before each test
    service = new CounterService();
  });

  it('should start with 0', () => {
    expect(service.getValue()).toBe(0);
    // optional: also test the signal directly
    expect(service.count()).toBe(0);
  });

  it('should increment value', () => {
    service.increment();
    expect(service.getValue()).toBe(1);
    expect(service.count()).toBe(1);
  });

  it('should decrement value', () => {
    service.decrement();
    expect(service.getValue()).toBe(-1);
    expect(service.count()).toBe(-1);
  });

  it('should reset value', () => {
    service.increment();
    service.increment();
    service.reset();
    expect(service.getValue()).toBe(0);
    expect(service.count()).toBe(0);
  });

  it('should maintain signal read-only integrity', () => {
    // This ensures readonly signal cannot be directly modified
    expect(() => {
      // @ts-expect-error
      service.count.set(10);
    }).toThrow();
  });
});
