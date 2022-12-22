import { Spinner } from "../../assets";

import "./style.scss";

const Loading = () => {
  return (
    <div className="loading">
      <img src={Spinner} />
    </div>
  );
};

export default Loading;
