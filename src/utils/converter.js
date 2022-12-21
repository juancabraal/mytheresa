const currencyFormater = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "BRL",
});

export const convertToCurrency = (value) => {
  return currencyFormater.format(value);
};
