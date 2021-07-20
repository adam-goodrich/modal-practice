import "./BlankContent.css";
import HelpModal from "./HelpModal";
import { Link } from "react-router-dom";

const BlankContent = () => {
  return (
    <div className="blank-content">
      <div className="container">
        <h1>Some content</h1>
        <span className="hello">👋</span>
      </div>
      <Link to="./">
        <button className="btn">go back</button>
      </Link>

      <HelpModal />
    </div>
  );
};

export default BlankContent;
