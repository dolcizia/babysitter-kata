import convertTime from '../main/convertTime';

describe('convertTime', () => {
  it('should add 12 hours to any time after 12PM', () => {
    expect(convertTime(6, 'PM')).toBe(18);
    expect(convertTime(12, 'PM')).toBe(12);
    expect(convertTime(12, 'AM')).toBe(24);
  });
});
