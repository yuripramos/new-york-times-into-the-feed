export function formatHumidity(number) {
  const percentage = number * 100;
  return `${percentage.toFixed(2)} %`
}
