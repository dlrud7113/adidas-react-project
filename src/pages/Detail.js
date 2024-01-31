import React from 'react'
import {useNavigate } from 'react-router-dom';

const Detail = () => {
  let Navigate = useNavigate();
  let goToMain=()=>{Navigate('/')}
  return (

    <div className='Detail'>
      <button on onClick={goToMain}>
        메인으로이동하기
      </button>
      <h1>상세페이지입니다.</h1>
    </div>
  )
}

export default Detail