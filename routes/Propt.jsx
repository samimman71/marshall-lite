import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

import marshall from "./marshall.jpg";
import miniblast from "./miniblast.jpg";
import midblast from "./midblast.jpg";
import highblast from "./highblast.jpg";
import megablast from "./megablast.jpg";

function Hello() {

  const [showInput, setShowInput] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const handleSearchClick = () => {
    setShowInput(!showInput);
  };

  function add1(){ 
    setCount1(count1+1)
   }
  
   function delete1(){ 
    if(count1>0){ 
      setCount1(count1-1)
    } 
  }

  function add2(){ 
    setCount2(count2+1) 
  
  }
  function delete2(){ 
    if(count2>0){ 
      setCount2(count2-1) 
    }
   }

  function add3(){ 
    setCount3(count3+1)
  }
  
  function delete3(){
     if(count3>0){
       setCount3(count3-1)
      } 
    }

  function add4(){ 
    setCount4(count4+1)
  }
  
  function delete4(){
     if(count4>0){
       setCount4(count4-1) 
      } 
    }

 
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
        <img src={marshall} alt="Marshall"/>
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
        <p>marshall high blast 5563/098</p>
        <p>Rs.54600</p>

        <button onClick={delete3}>-</button>
        <span>{count3}</span>
        <button onClick={add3}>+</button>
      </div>

      
      <div className="pic4">
        <img src={megablast} alt="Mega Blast"/>
        <h4>Marshall Mega Blast</h4>
        <p>marshall mega blast 5583/198</p>
        <p>Rs.76600</p>

        <button onClick={delete4}>-</button>
        <span>{count4}</span>
        <button onClick={add4}>+</button>
      </div>

    </div>
  );
}

export default Hello;