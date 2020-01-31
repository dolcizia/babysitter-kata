import { convertJobRates, convertTime } from './convertTime';

export const calculateHoursWithRates = ({ start, end }, rates) => {
  // Convert job hours to 24 hour time
  const jobStart = convertTime(start.time, start.timeOfDay);
  const jobEnd = convertTime(end.time, end.timeOfDay);

  // Check if job is within working hours
  if (jobStart < 17 || jobEnd < 17) {
    return "I'm sorry I can only work between 5PM and 4AM";
  }

  // Make sure job end time is after job start time
  if (jobStart >= 17 && jobStart > jobEnd) {
    return 'Oops, end time is after start time!';
  }

  // Convert rates to 24 hour time
  rates = convertJobRates(rates);
  const firstRate = rates[0];
  const secondRate = rates[1];
  let thirdRate;

  // If there is a third rate, assign it to a variable
  if (rates.length === 3) {
    thirdRate = rates[2];
  }

  let firstChunk = 0;
  let secondChunk = 0;
  let thirdChunk = 0;

  // Job begins during the firstRate period
  if (jobStart < firstRate.rateEnd) {
    // Job also ends during the firstRate period
    if (jobEnd < firstRate.rateEnd) {
      firstChunk = (jobEnd - jobStart) * firstRate.hourlyRate;

      return firstChunk;
    } else {
      // Job goes past the firstRate end into the secondRate
      firstChunk = (firstRate.rateEnd - jobStart) * firstRate.hourlyRate;
    }
  }

  // Job starts during, or goes into, secondRate period
  if (jobStart < secondRate.rateEnd) {
    // Job also ends during the secondRate period
    if (jobEnd < secondRate.rateEnd) {
      secondChunk = (jobEnd - firstRate.rateEnd) * secondRate.hourlyRate;

      return firstChunk + secondChunk;
    } else {
      // Job goes past the secondRate end into the thirdRate
      secondChunk =
        (secondRate.rateEnd - firstRate.rateEnd) * secondRate.hourlyRate;
    }
  }

  // If there is a thirdRate and the Job goes past the secondRate period
  if (thirdRate && jobEnd > secondRate.rateEnd) {
    thirdChunk = (jobEnd - secondRate.rateEnd) * thirdRate.hourlyRate;
  }

  return firstChunk + secondChunk + thirdChunk;
};
