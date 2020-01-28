import calculatePay from '../main/calculatePay';

describe('calculatePay', () => {
  it('should multiply the number of hours by the pay rate', () => {
    const job = {
      numHours: 5,
      payRate: 10
    };

    expect(calculatePay(job)).toBe(50);
  });
});
