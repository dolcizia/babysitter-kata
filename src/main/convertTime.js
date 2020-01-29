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

export const convertJobRates = job => {
  const convertedRates = [];

  for (let i = 0; i < job.length; i++) {
    let convertStart = convertTime(job[i].start.time, job[i].start.timeOfDay);
    let convertEnd = convertTime(job[i].end.time, job[i].end.timeOfDay);

    convertedRates.push({ start: convertStart, end: convertEnd });
  }

  return convertedRates;
};
