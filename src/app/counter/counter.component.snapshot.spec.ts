import { render } from '@testing-library/angular';
import { CounterComponent } from './counter.component';
import { CounterService } from '../services/counter.service';
import { describe, it, expect } from 'vitest';

describe('CounterComponent snapshot', () => {
  it('matches the initial render', async () => {
    const { container } = await render(CounterComponent, {
      providers: [CounterService],
    });

    expect(container).toMatchSnapshot();
  });

  it('matches after increment', async () => {
    const { container, getByText } = await render(CounterComponent, {
      providers: [CounterService],
    });

    getByText('+').click(); // click the increment button

    expect(container).toMatchSnapshot();
  });
});
