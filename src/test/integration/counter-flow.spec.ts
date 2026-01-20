import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { CounterComponent } from '../../app/counter/counter.component';
import { CounterService } from '../../app/services/counter.service';

describe('CounterComponent shared service', () => {
  it('updates all counters when one is clicked', async () => {
    await render(
      `
      <app-counter></app-counter>
      <app-counter></app-counter>
    `,
      {
        imports: [CounterComponent],
        providers: [CounterService], // shared root service
      },
    );

    const buttons = screen.getAllByText('+');
    const values = screen.getAllByText('0');

    await userEvent.click(buttons[0]); // increment first counter

    expect(values[0].textContent).toBe('1');
    expect(values[1].textContent).toBe('1'); // second counter also updated
  });
});
