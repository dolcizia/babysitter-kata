const calculatePay = ({ start, end, payRate }) => {
  const numHours = end - start;

  return numHours * payRate;
};

export default calculatePay;
