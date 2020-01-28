const calculatePay = job => {
  const { numHours, payRate } = job;

  return numHours * payRate;
};

export default calculatePay;
