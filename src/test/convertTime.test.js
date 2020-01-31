import { convertTime, convertJobRates } from '../main/convertTime';
import { familyARates, familyBRates, familyCRates } from '../families.data';

describe('convertTime', () => {
  it('should add 12 hours to any time after 12PM', () => {
    expect(convertTime(6, 'PM')).toBe(18);
    expect(convertTime(12, 'PM')).toBe(12);
    expect(convertTime(12, 'AM')).toBe(24);
  });

  it('should add 24 hours to any time after midnight', () => {
    expect(convertTime(1, 'AM')).toBe(25);
    expect(convertTime(4, 'AM')).toBe(28);
  });

  it('should convert time regardless of case', () => {
    expect(convertTime(1, 'Am')).toBe(25);
    expect(convertTime(1, 'am')).toBe(25);
    expect(convertTime(1, 'pM')).toBe(13);
  });
});

describe('convertJobRates', () => {
  it('should convert an array of rate objects into 24 hour time', () => {
    const resultA = [
      { hourlyRate: 15, rateEnd: 23 },
      { hourlyRate: 20, rateEnd: 28 }
    ];

    expect(convertJobRates(familyARates)).toStrictEqual(resultA);

    const resultB = [
      { hourlyRate: 12, rateEnd: 22 },
      { hourlyRate: 8, rateEnd: 24 },
      { hourlyRate: 16, rateEnd: 28 }
    ];

    expect(convertJobRates(familyBRates)).toStrictEqual(resultB);

    const resultC = [
      { hourlyRate: 21, rateEnd: 21 },
      { hourlyRate: 15, rateEnd: 28 }
    ];

    expect(convertJobRates(familyCRates)).toStrictEqual(resultC);
  });
});
