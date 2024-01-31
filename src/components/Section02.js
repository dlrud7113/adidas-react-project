import React from 'react'

const Section02 = (props) => {
  return (
    <div className='Section02'>
      <div className='Section02_inner'>
      <div className='Section02_wrap'>
        <div className='Section02_top'>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/shoes1.png'} alt="" />
        <div className='Section02_text'>
        <a href=""><h3>{props.shoes1}</h3></a>
          <a href="">Shoes</a>
        </div>
      </div>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/shoes2.png'} alt="" />
        <div className='Section02_text'>
        <a href=""><h3>{props.shoes2}</h3></a>
          <a href="">Shoes</a>
        </div>
      </div>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/shoes3.png'} alt="" />
        <div className='Section02_text'>
        <a href=""><h3>{props.shoes3}</h3></a>
          <a href="">Shoes</a>
        </div>
      </div>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/shoes4.png'} alt="" />
        <div className='Section02_text'>
        <a href=""><h3>{props.shoes3}</h3></a>
          <a href="">Shoes</a>
        </div>
      </div>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/shoes5.png'} alt="" />
        <div className='Section02_text'>
        <a href=""><h3>{props.shoes5}</h3></a>
          <a href="">Shoes</a>
        </div>
      </div>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/shoes6.png'} alt="" />
        <div className='Section02_text'>
        <a href=""><h3>{props.shoes6}</h3></a>
          <a href="">Shoes</a>
        </div>
      </div>
      </div>
      <div className='Section02_bottom'>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/shoes7.png'} alt="" />
        <div className='Section02_text'>
          <a href=""><h3>{props.shoes7}</h3></a>
          <a href="">Shoes</a>
        </div>
      </div>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/shoes8.png'} alt="" />
        <div className='Section02_text'>
        <a href=""><h3>{props.shoes7}</h3></a>
          <a href="">Shoes</a>
        </div>
      </div>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/clothing1.png'} alt="" />
        <div className='Section02_text'>
        <a href=""><h3>{props.clothing1}</h3></a>
          <a href="">clothing</a>
        </div>
      </div>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/clothing2.png'} alt="" />
        <div className='Section02_text'>
        <a href=""><h3>{props.clothing2}</h3></a>
          <a href="">clothing</a>
        </div>
      </div>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/clothing3.png'} alt="" />
        <div className='Section02_text'>
        <a href=""><h3>{props.clothing3}</h3></a>
          <a href="">clothing</a>
        </div>
      </div>
      <div className='Section02_box'>
        <img src={process.env.PUBLIC_URL + './Img/shoes6.png'} alt="" />
        <div className='Section02_text'>
        <a href=""><h3>{props.shoes6}</h3></a>
          <a href="">clothing</a>
          <a href="">Shoes</a>
        </div>
      </div>
      </div>

      </div>
      </div>
    </div>
  )
}

export default Section02