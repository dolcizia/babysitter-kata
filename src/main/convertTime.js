export const convertTime = (time, timeOfDay) => {
  timeOfDay = timeOfDay.toUpperCase();

  if (time === 12) {
    return timeOfDay === 'AM' ? 24 : 12;
  }

  if (timeOfDay === 'AM') {
    return time <= 4 ? time + 24 : time;
  }

  return time + 12;
};

export const convertJobRates = (rates) => {
  const convertedRates = [];

  for (let i = 0; i < rates.length; i++) {
    let newTime = convertTime(
      rates[i].rateEnd.time,
      rates[i].rateEnd.timeOfDay
    );
    let hourlyRate = rates[i].hourlyRate;

    convertedRates.push({ hourlyRate: hourlyRate, rateEnd: newTime });
  }

  return convertedRates;
};
