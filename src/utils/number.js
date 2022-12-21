export const getStarsRealValue = (percent = 0, stars = 5) => {
  const value = stars * ((percent * 10) / 100);
  return value;
};

export const isWhatPercentOf = (oldNumber, newNumber) => {
  if (oldNumber === 0 || newNumber === 0) return 0;
  return (1 - oldNumber / newNumber) * 100;
};
