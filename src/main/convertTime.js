export const convertTime = (time, timeOfDay) => {
  timeOfDay = timeOfDay.toUpperCase();

  if (timeOfDay === 'AM') {
    if (time === 12) {
      return 24;
    }

    if (time <= 4) {
      return time + 24;
    }

    return time;
  }

  if (timeOfDay === 'PM' && time !== 12) {
    return time + 12;
  }

  return time;
};

export const convertJobRates = rates => {
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
