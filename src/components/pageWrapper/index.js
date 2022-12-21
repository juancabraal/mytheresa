import Header from "../header";
import "./style.scss";

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageWrapper;
