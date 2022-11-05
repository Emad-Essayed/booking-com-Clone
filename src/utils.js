export function nightsStay(endDate, startDate) {
  return Math.ceil(Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24));
}
