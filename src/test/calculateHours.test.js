import { calculateHours } from '../main/calculateHours';

describe('calculateHours', () => {
  it('should subtract the start time from the end time', () => {
    const job = {
      start: 17,
      end: 22
    };

    expect(calculateHours(job)).toBe(5);
  });
});
