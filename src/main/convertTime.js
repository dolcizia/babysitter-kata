const convertTime = (time, timeOfDay) => {
  if (timeOfDay === 'AM') {
    if (time === 12) {
      return 24;
    }

    return time;
  }

  if (timeOfDay === 'PM' && time !== 12) {
    return time + 12;
  }

  return time;
};

export default convertTime;