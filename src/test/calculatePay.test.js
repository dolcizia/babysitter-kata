import calculatePay from '../main/calculatePay';

describe('calculatePay', () => {
  it('should calculate payment based on start and end times', () => {
    const job = {
      start: 17,
      end: 22,
      payRate: 10
    };

    expect(calculatePay(job)).toBe(50);
  });
});
