const USD_TO_ZAR = 18.5;

const roundToNearestFive = (value: number) => {
  const remainder = value % 5;
  if (remainder === 0) return value;
  return remainder < 2.5 ? value - remainder : value + (5 - remainder);
};

export const convertUsdToZar = (amountInUsd: number): number => {
  const converted = amountInUsd * USD_TO_ZAR;
  return roundToNearestFive(Math.round(converted));
};

export const formatZar = (amountInUsd: number): string => {
  const randValue = convertUsdToZar(amountInUsd);
  return `R${randValue.toLocaleString("en-ZA")}`;
};
