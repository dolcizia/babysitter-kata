import convertTime from './convertTime';

const calculateHours = range => {
  const { start, end } = range;

  const startTime = convertTime(start.time, start.timeOfDay);
  const endTime = convertTime(end.time, end.timeOfDay);

  return endTime - startTime;
};

export default calculateHours;
