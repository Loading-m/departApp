export function h0(timestamp = Date.now()) {
  const target = new Date(timestamp);
  target.setDate(target.getDate());
  target.setHours(0);
  target.setMinutes(0);
  target.setSeconds(0);
  target.setMilliseconds(0);
  return target.getTime();
}
