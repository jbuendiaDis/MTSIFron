export function formatNumber(number: number, locale = "en-US") {
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(number);
}

export function formatCurrency(number: number, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(number);
}
