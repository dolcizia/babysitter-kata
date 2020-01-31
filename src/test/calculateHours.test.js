import { calculateHoursWithRates } from '../main/calculateHours';
import { familyARates, familyBRates, familyCRates } from '../families.data';

describe('calculateHoursWithRates', () => {
  it('should import rates from family data and calculate the hours in each rate', () => {
    const job = {
      start: { time: 6, timeOfDay: 'PM' },
      end: { time: 1, timeOfDay: 'AM' }
    };

    expect(calculateHoursWithRates(job, familyARates)).toBe(115);
    expect(calculateHoursWithRates(job, familyBRates)).toBe(80);
    expect(calculateHoursWithRates(job, familyCRates)).toBe(123);

    const job2 = {
      start: { time: 7, timeOfDay: 'PM' },
      end: { time: 3, timeOfDay: 'AM' }
    };

    expect(calculateHoursWithRates(job2, familyARates)).toBe(140);
    expect(calculateHoursWithRates(job2, familyBRates)).toBe(100);
    expect(calculateHoursWithRates(job2, familyCRates)).toBe(132);

    const job3 = {
      start: { time: 5, timeOfDay: 'PM' },
      end: { time: 8, timeOfDay: 'PM' }
    };

    expect(calculateHoursWithRates(job3, familyARates)).toBe(45);
    expect(calculateHoursWithRates(job3, familyBRates)).toBe(36);
    expect(calculateHoursWithRates(job3, familyCRates)).toBe(63);

    const job4 = {
      start: { time: 5, timeOfDay: 'PM' },
      end: { time: 4, timeOfDay: 'AM' }
    };

    expect(calculateHoursWithRates(job4, familyARates)).toBe(190);
    expect(calculateHoursWithRates(job4, familyBRates)).toBe(140);
    expect(calculateHoursWithRates(job4, familyCRates)).toBe(189);
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

    expect(calculateHoursWithRates(job, familyARates)).toMatch(
      "I'm sorry I can only work between 5PM and 4AM"
    );
    expect(calculateHoursWithRates(job2, familyBRates)).toMatch(
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
