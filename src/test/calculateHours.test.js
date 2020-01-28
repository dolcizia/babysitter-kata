import calculateHours from '../main/calculateHours';

describe('calculateHours', () => {
  it('should subtract the start time from the end time', () => {
    const job = {
      start: {
        time: 5,
        timeOfDay: 'PM'
      },
      end: {
        time: 10,
        timeOfDay: 'PM'
      }
    };

    expect(calculateHours(job)).toBe(5);
  });
});
