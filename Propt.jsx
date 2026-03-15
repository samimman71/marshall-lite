import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import marshall from "./marshall.jpg";
import miniblast from "./miniblast.jpg";
import midblast from "./midblast.jpg";
import highblast from "./highblast.jpg";
import megablast from "./megablast.jpg";
import tfp1 from "./tfp1.jpg";
import tfp2 from "./tfp2.jpg";
import tfp3 from "./tfp3.jpg";
import title2 from "./title 2.jpg"
import title3 from "./title3.jpg"
import tpf3 from "./tpf3.jpg";


function Hello() {

  const [showInput, setShowInput] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const [index, setIndex] = useState(0);

  const images = [marshall, title2, title3];

  useEffect(() => {

    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slide);

  }, []);

  const handleSearchClick = () => {
    setShowInput(!showInput);
  };

  function add1(){ setCount1(count1 + 1) }
  function delete1(){ if(count1>0){ setCount1(count1 - 1) } }

  function add2(){ setCount2(count2 + 1) }
  function delete2(){ if(count2>0){ setCount2(count2 - 1) } }

  function add3(){ setCount3(count3 + 1) }
  function delete3(){ if(count3>0){ setCount3(count3 - 1) } }

  function add4(){ setCount4(count4 + 1) }
  function delete4(){ if(count4>0){ setCount4(count4 - 1) } }

  const cartItems = [
    {name:"Marshall Mini Blast", price:25000, count:count1},
    {name:"Marshall Mid Blast", price:35000, count:count2},
    {name:"Marshall High Blast", price:54600, count:count3},
    {name:"Marshall Mega Blast", price:76600, count:count4}
  ].filter(item => item.count > 0);

  const totalCart = count1 + count2 + count3 + count4;

  return (
    <div>

      <h1 className="title">
        Marshall

        <button className="btn1" onClick={handleSearchClick}>
          <AiOutlineSearch />
        </button>

        {showInput && (
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button onClick={() => setShowInput(false)}>Enter</button>
          </div>
        )}

        <Link to="/login" className="btn2">
          <AiOutlineUser />
        </Link>

        <Link to="/cart" state={cartItems} className="btn3">
          <BsCart4 /> {totalCart}
        </Link>

      </h1>

      <div className="image-container">
        <img src={images[index]} alt="slide" width="100%" height="400px"/>
      </div>

      <div className="pic1">
        <img src={miniblast} alt="Mini Blast"/>
        <h4>Marshall Mini Blast</h4>
        <p>Marshall mini blast 005/0934</p>
        <p>Rs.25000</p>

        <button onClick={delete1}>-</button>
        <span>{count1}</span>
        <button onClick={add1}>+</button>
      </div>

      <div className="pic2">
        <img src={midblast} alt="Mid Blast"/>
        <h4>Marshall Mid Blast</h4>
        <p>Marshall mid blast 005/0934</p>
        <p>Rs.35000</p>

        <button onClick={delete2}>-</button>
        <span>{count2}</span>
        <button onClick={add2}>+</button>
      </div>

      <div className="pic3">
        <img src={highblast} alt="High Blast"/>
        <h4>Marshall High Blast</h4>
        <p>Marshall high blast 5563/098</p>
        <p>Rs.54600</p>

        <button onClick={delete3}>-</button>
        <span>{count3}</span>
        <button onClick={add3}>+</button>
      </div>

      <div className="pic4">
        <img src={megablast} alt="Mega Blast"/>
        <h4>Marshall Mega Blast</h4>
        <p>Marshall mega blast 5583/198</p>
        <p>Rs.76600</p>

        <button onClick={delete4}>-</button>
        <span>{count4}</span>
        <button onClick={add4}>+</button>
      </div>

      <div className="tfp1">
        <img src={tfp1} alt=""/>
      </div>

      <div className="w1">
        <h1><b>Music expresses that which cannot be put into words and that which cannot remain silent</b></h1>
      </div>

      <div className="tfp2">
        <img src={tfp2} alt=""/>
      </div>

      <div className="tfp3">
        <img src={tfp3} alt=""/>
      </div>
      
      <div className="tpf3">
<img src={tpf3} alt="" />
      </div>

      <div className="para">
        <p>
        For over six decades, Marshall’s legacy has grown chord to chord,
        person to person, generation to generation. It all began in 1962
        in Hanwell, London, when Jim and Terry Marshall built their first
        ever amp...

        </p>
      </div>

      <div className="quote">
        <h1>
        The sound of a kiss is not so loud as that of a cannon,
        but its echo lasts a great deal longer.
        </h1>
      </div>

      <div className="additionals">
        <ul>

          <Link to="/products">
            <li>Products</li>
          </Link>

          <Link to="/help">
            <li>Help</li>
          </Link>

          <Link to="/about">
            <li>About us</li>
          </Link>

        </ul>
      </div>

    </div>
  );
}

export default Hello;
