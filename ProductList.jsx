import { Link } from "react-router-dom";

function List()
{
    return(
        <div className="List">
            <h1>Marshall Sounds</h1>
           <h1>Products List</h1>
           <ul>
           <Link to="/speaker">
           <li className="speak">Speakers</li></Link>
            <li>Earbuds</li>
            <li>Wireless Speakers</li>
            <li>Accessories</li>
            <li>Wired Speakers</li>
           </ul>
           <Link to="/" className="back-btn">Back to Home</Link>
        </div>
    )
}
export default List;