import { familyARates, familyBRates, familyCRates } from '../families.data';

export const calculateHours = range => {
  const { start, end } = range;

  return end - start;
};

export const calculateHoursWithRates = (job, rates) => {
  const jobStart = job.start;
  const jobEnd = job.end;
  const firstRate = rates.firstRate;
  const secondRate = rates.secondRate;
  const thirdRate = rates.thirdRate;
  let firstChunk;
  let secondChunk;
  let thirdChunk;

  if (jobStart < firstRate.rateEnd) {
    if (jobEnd < firstRate.rateEnd) {
      firstChunk = (jobEnd - jobStart) * firstRate.hourlyRate;
    } else {
      firstChunk = (firstRate.rateEnd - jobStart) * firstRate.hourlyRate;
    }
  } else {
    firstChunk = 0;
  }

  if (jobStart < secondRate.rateEnd) {
    if (jobEnd < secondRate.rateEnd) {
      secondChunk = (secondRate.rateEnd - jobEnd) * secondRate.hourlyRate;
    } else {
      secondChunk =
        (secondRate.rateEnd - firstRate.rateEnd) * secondRate.hourlyRate;
    }
  }

  if (thirdRate && jobEnd > secondRate.rateEnd) {
    thirdChunk = (thirdRate.rateEnd - jobEnd) * thirdRate.hourlyRate;
  } else {
    thirdChunk = 0;
  }

  return firstChunk + secondChunk + thirdChunk;
};
