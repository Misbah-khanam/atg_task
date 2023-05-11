import React from 'react'
import back from './assets/image_atg_top.jpg'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux'

const Home1 = () => {
  const state_l = useSelector((state) => state)

  return (
    <div>
        <h1></h1>
        <div className='top-rectangle'></div>
    </div>
  )
}

export default Home1