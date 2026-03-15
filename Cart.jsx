import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Cart(){

  const location = useLocation();
  const cart = location.state;

  return(
    <div style={{padding:"40px"}} className="cart style">

      <h1>Your Cart</h1>

      {cart && cart.length > 0 ? (
        cart.map((item,index)=>(
          <div key={index} style={{marginBottom:"20px"}}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.count}</p>
          </div>
        ))
      ) : (
        <p>No items in cart</p>
      )}
       <button>Buy Now</button>
       <Link to="/" className="back-btn">Back to Home</Link>
      

    </div>
  )
}

export default Cart;