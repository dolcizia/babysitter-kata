import { calculateHoursWithRates } from '../main/calculateHours';
import { familyARates, familyBRates, familyCRates } from '../families.data';

describe('calculateHoursWithRates', () => {
  it('should import rates from family data and calculate the hours in each rate', () => {
    const job = {
      start: 18,
      end: 25
    };

    expect(calculateHoursWithRates(job, familyARates)).toBe(115);
    expect(calculateHoursWithRates(job, familyBRates)).toBe(80);
    expect(calculateHoursWithRates(job, familyCRates)).toBe(123);

    const job2 = {
      start: 19,
      end: 27
    };

    expect(calculateHoursWithRates(job2, familyARates)).toBe(140);
    expect(calculateHoursWithRates(job2, familyBRates)).toBe(100);
    expect(calculateHoursWithRates(job2, familyCRates)).toBe(132);

    const job3 = {
      start: 17,
      end: 20
    };

    expect(calculateHoursWithRates(job3, familyARates)).toBe(45);
    expect(calculateHoursWithRates(job3, familyBRates)).toBe(36);
    expect(calculateHoursWithRates(job3, familyCRates)).toBe(63);

    const job4 = {
      start: 17,
      end: 28
    };

    expect(calculateHoursWithRates(job4, familyARates)).toBe(190);
    expect(calculateHoursWithRates(job4, familyBRates)).toBe(140);
    expect(calculateHoursWithRates(job4, familyCRates)).toBe(189);
  });
});
