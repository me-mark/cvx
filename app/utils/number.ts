import { CURRENCY } from "./constants";

export const digits = number => {
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export const currencyFormatter = value => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const roundNumber = number => {
  return Math.round(number);
}
export const roundDeg = deg => {
  let num = Math.abs(deg % 360);
  if (num < 45) {
    num = 0;
  } else if (num < 135) {
    num = 90;
  } else if (num < 225) {
    num = 180;
  } else if (num < 315) {
    num = 270;
  } else if (num < 360) {
    num = 0;
  }
  return deg > 0 ? num : -num;
}

export function msToTime(duration) {
  let minutes: string | number = Math.ceil((duration / (1000 * 60)) % 60);
  let hours: string | number = Math.round((duration / (1000 * 60 * 60)) % 24);

  hours = (hours > 0) ? `${hours} hours` : "";
  minutes = (minutes > 0) ? `${minutes} minutes` : "";

  return [hours, minutes].filter(e => e !== "").join(", ");
}

export const formatCurrency = (number?: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: CURRENCY,
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  if (number) {
    return formatter.format(number);
  }
  return '';
}