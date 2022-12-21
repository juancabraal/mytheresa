import { FaRegSadCry } from "react-icons/fa";

import "./style.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <FaRegSadCry fontSize={60} />
      <h2>Page Not Found</h2>
    </div>
  );
};

export default NotFoundPage;
