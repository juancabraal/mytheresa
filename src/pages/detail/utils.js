export const orderByPopularity = (itemList, count = 5, uniqueBy = "name") => {
  let orderedArray = Array.from(itemList).sort(
    (a, b) => b.popularity - a.popularity
  );

  if (uniqueBy) {
    orderedArray = orderedArray.filter(
      (v, i, a) => a.findIndex((v2) => v2[uniqueBy] === v[uniqueBy]) === i
    );
  }

  return orderedArray.slice(0, count);
};
