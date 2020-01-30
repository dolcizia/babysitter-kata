import {
  calculateHours,
  calculateHoursWithRates
} from '../main/calculateHours';
import { familyARates, familyBRates, familyCRates } from '../families.data';

describe('calculateHours', () => {
  it('should subtract the start time from the end time', () => {
    const job = {
      start: 17,
      end: 22
    };

    expect(calculateHours(job)).toBe(5);
  });
});

describe('calculateHoursWithRates', () => {
  it('should import rates from family data and calculate the hours in each rate', () => {
    const job = {
      start: 17,
      end: 26
    };

    expect(calculateHoursWithRates(job, familyARates)).toBe(130);
  });
});
