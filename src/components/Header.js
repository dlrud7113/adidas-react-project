import React from 'react';
import { CiLogin} from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import {useState}from 'react';

const Header = () => {
  let counter = 0;
  const[counter1, setCounter1]= useState(0);
  let increase = ()=>{
    counter = counter1 +1; 
    setCounter1(counter1 +1)
    console.log('counter',counter,'counter1 state',counter1)
  }

  return (
    <div className='Header'>
      <div className='Header_inner'>
        <div className='header_logo'>
    <img src={process.env.PUBLIC_URL + './Img/logo.png'}/>
    <ul>
      <li><a href="">MEN</a></li>
      <li><a href="">WOMEN</a></li>
      <li><a href="">KIDS</a></li>
      <li><a href="">SPORTS</a></li>
      <li><a href="">BRANDS</a></li>
      <li><a href="">SALE</a></li>
    </ul>
        </div>
    <div className='log'>
      <a href=""><CiLogin /> 로그인</a>
      <a href=""><FiShoppingCart />장바구니</a>
      <a href="#none" id="cart" onClick={increase} 
      > <CiHeart className='커져라'/>
      <span className='plus'>{counter1}</span>
      즐겨찾기</a>

    </div>
    </div>
    </div>
  )
}

export default Header