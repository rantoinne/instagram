export const timeDiff = (date1, date2) => {
  if (!(date1 instanceof Date && date2 instanceof Date))
    throw new RangeError('Invalid date arguments');
  const timeIntervals = [31536000, 2628000, 604800, 86400, 3600, 60, 1];
  const intervalNames = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];
  const diff = Math.abs(date2.getTime()-date1.getTime())/1000;
  const index = timeIntervals.findIndex(i=>(diff/i) >= 1);
  const n = Math.floor(diff/timeIntervals[index]);
  const interval = intervalNames[index];
  return [n, interval];
}

export const localize = (value, str) => {
  if (value !== 1)
    str += 's';
  return `${value} ${str} ago`
}