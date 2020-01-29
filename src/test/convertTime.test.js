import { convertTime, convertJobRates } from '../main/convertTime';

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
    const job = [
      {
        start: {
          time: 5,
          timeOfDay: 'PM'
        },
        end: {
          time: 11,
          timeOfDay: 'PM'
        }
      },
      {
        start: {
          time: 11,
          timeOfDay: 'PM'
        },
        end: {
          time: 2,
          timeOfDay: 'AM'
        }
      },
      {
        start: {
          time: 2,
          timeOfDay: 'AM'
        },
        end: {
          time: 4,
          timeOfDay: 'AM'
        }
      }
    ];

    const result = [
      { end: 23, start: 17 },
      { end: 26, start: 23 },
      { end: 28, start: 26 }
    ];

    expect(convertJobRates(job)).toStrictEqual(result);
  });
});
