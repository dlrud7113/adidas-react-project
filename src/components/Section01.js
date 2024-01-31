import React from 'react'

const Section01 = (props) => {
  return (
    <div  className='Section01'>
      <div className='Section01_inner'>
        <div className='Box_wrap'>
        <div className='ProductBox'>
          <div className='box_img'>
          <img src={process.env.PUBLIC_URL + './Img/section1.png'}/>
          </div>
          <div className='box_text'>
           <a href="">
           <h3>{props.product1}</h3>
           </a>
            <p>새해의 활기찬 에너지로 다시 운동을 시작해보세요</p>
            <a href="">지금 구매하기 ></a>
          </div>
        </div>
        <div className='ProductBox'>
          <div className='box_img'>
          <img src={process.env.PUBLIC_URL + './Img/section2.png'}/>
          </div>
          <div className='box_text'>
            <a href=""><h3>{props.product2}</h3></a>
            <p>더 나은 한해를 만들고 싶다면 지금 바로 러닝을 시작해보세요.</p>
            <a href="">지금 구매하기 ></a>
          </div>
        </div>
        <div className='ProductBox'>
          <div className='box_img'>
          <img src={process.env.PUBLIC_URL + './Img/section3.png'}/>
          </div>
          <div className='box_text'>
          <a href=""><h3>{props.product3}</h3></a>
            <p>머리부터 발끝까지, 모든 순간 완벽하게.</p>
            <a href="">지금 구매하기 ></a>
          </div>
        </div>
        <div className='ProductBox'>
          <div className='box_img'>
          <img src={process.env.PUBLIC_URL + './Img/section4.png'}/>
          </div>
          <div className='box_text'>
          <a href=""><h3>{props.product2}</h3></a>
            <p>내 안의 잠재력을 깨워줄 아디다스 트레이닝 컬렉션</p>
            <a href="">지금 구매하기 ></a>
          </div>
        </div>
        </div>
        <div className='Section01_bt'>
          <div className='bt PICK'>MD'S PICK</div>
          <div className='bt Best'>Best of adidas🔥</div>
        </div>
      </div>
    </div>
  )
}

export default Section01