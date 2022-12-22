import { orderByPopularity } from "./utils";

const MovieInfoList = ({ infoList, itemDescription, count = 5, uniqueBy }) => {
  return (
    <ul>
      {orderByPopularity(infoList || [], count, uniqueBy).map((value) => (
        <li key={value.id}>{itemDescription(value)}</li>
      ))}
    </ul>
  );
};

export default MovieInfoList;
