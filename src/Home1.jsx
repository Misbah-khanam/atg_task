import React from 'react'
import back from './assets/image_atg_top.jpg'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'

const Home1 = () => {
  const state_l = useSelector((state) => state)

  return (
    <div>
        <h1></h1>
        <div className='top-rectangle'>
          <p >Computer Engineering</p>
          <p className='small'>142,765 Computer Engineers follow this</p>
        </div>
    </div>
  )
}

export default Home1