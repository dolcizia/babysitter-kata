import { calculateHoursWithRates } from '../main/calculateHours';
import { familyARates, familyBRates, familyCRates } from '../families.data';

describe('calculateHoursWithRates', () => {
  it('should return the number of hours and total pay', () => {
    const job = {
      start: { time: 6, timeOfDay: 'PM' },
      end: { time: 1, timeOfDay: 'AM' }
    };

    expect(calculateHoursWithRates(job, familyARates)).toBe('$115 for 7 hours');
    expect(calculateHoursWithRates(job, familyBRates)).toBe('$80 for 7 hours');
    expect(calculateHoursWithRates(job, familyCRates)).toBe('$123 for 7 hours');

    const job2 = {
      start: { time: 7, timeOfDay: 'PM' },
      end: { time: 3, timeOfDay: 'AM' }
    };

    expect(calculateHoursWithRates(job2, familyARates)).toBe(
      '$140 for 8 hours'
    );
    expect(calculateHoursWithRates(job2, familyBRates)).toBe(
      '$100 for 8 hours'
    );
    expect(calculateHoursWithRates(job2, familyCRates)).toBe(
      '$132 for 8 hours'
    );

    const job3 = {
      start: { time: 5, timeOfDay: 'PM' },
      end: { time: 8, timeOfDay: 'PM' }
    };

    expect(calculateHoursWithRates(job3, familyARates)).toBe('$45 for 3 hours');
    expect(calculateHoursWithRates(job3, familyBRates)).toBe('$36 for 3 hours');
    expect(calculateHoursWithRates(job3, familyCRates)).toBe('$63 for 3 hours');

    const job4 = {
      start: { time: 5, timeOfDay: 'PM' },
      end: { time: 4, timeOfDay: 'AM' }
    };

    expect(calculateHoursWithRates(job4, familyARates)).toBe(
      '$190 for 11 hours'
    );
    expect(calculateHoursWithRates(job4, familyBRates)).toBe(
      '$140 for 11 hours'
    );
    expect(calculateHoursWithRates(job4, familyCRates)).toBe(
      '$189 for 11 hours'
    );
  });

  it('should check to make sure the job start and end times are between 5PM and 4AM', () => {
    const job = {
      start: { time: 4, timeOfDay: 'PM' },
      end: { time: 10, timeOfDay: 'PM' }
    };

    const job2 = {
      start: { time: 6, timeOfDay: 'PM' },
      end: { time: 5, timeOfDay: 'AM' }
    };

    const job3 = {
      start: { time: 7, timeOfDay: 'PM' },
      end: { time: 6, timeOfDay: 'AM' }
    };

    expect(calculateHoursWithRates(job, familyARates)).toMatch(
      "I'm sorry I can only work between 5PM and 4AM"
    );
    expect(calculateHoursWithRates(job2, familyBRates)).toMatch(
      "I'm sorry I can only work between 5PM and 4AM"
    );
    expect(calculateHoursWithRates(job3, familyBRates)).toMatch(
      "I'm sorry I can only work between 5PM and 4AM"
    );
  });

  it('should prevent end time from being before start time', () => {
    const job = {
      start: { time: 10, timeOfDay: 'PM' },
      end: { time: 7, timeOfDay: 'PM' }
    };

    expect(calculateHoursWithRates(job, familyARates)).toMatch(
      'Oops, end time is after start time!'
    );
  });
});
