import { Link } from "react-router-dom";
function Details() {
    return (
      <>
        <div className="back1">
          <div className="login-card">
            <h1 className="heading">Marshall</h1>
            <h1>Login</h1>
  
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
  
            <Link to="/">
            <button className="login-btn">Login</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
  
  export default Details;