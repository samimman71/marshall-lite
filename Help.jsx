import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

function Help() {
  return (
    <div className="help-container">

      <h1>You Need Help</h1>

      <h4>
        Do not hesitate to ask, our specialists will help you choose proper products
      </h4>

      <div className="phone">
        <BsFillTelephoneFill />
        <span> +91 98765 43210 </span>
      </div>

      <div className="email">
        <BsEnvelope />
        <span> support@musicstore.com </span>
      </div>

      <Link to="/" className="back-btn">Back to Home</Link>

    </div>
  );
}

export default Help;