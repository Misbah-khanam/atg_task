import React from 'react'
import logo from './assets/otg_logo.jpg'
import dropdown from './assets//down_arrow.png'
import './Navbar.css'
import search from './assets/search.svg'
import Popupfile from './Popupfile'
import { useState, useEffect } from 'react'
import cancel from './assets/icons8-cancel.svg'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {

  const [openPopup, setopenPopup] = useState(false);
  const state_l = useSelector((state) => state)

  useEffect(() => {
    console.log(state_l)
  }, [state_l])

  return (
    <div>
      <div className='main-nav'>
        <div className='navAtg'>
          <img src={logo} className='icon' />
          <form className='searchForm'>
            <input type="text" placeholder='Search for your favourite groups in ATG' />
            <img src={search} alt="search" className='search-icon' />
          </form>
          {
            !state_l ?
            <div className='acc-div'>
            <p onClick={() => setopenPopup(true)}>Create Account</p>
            <p className='b-p'>It's Free</p>
            {/* <img src='dropdown' />  */}
            </div>:
            <div className='acc-div'>
              <p >User Name</p>
            </div>
          }
          
        </div>
      </div>
      {!state_l ? <button className='join-mobile-btn'  onClick={() => setopenPopup(true)}>Join Group</button>:
      <button className='join-mobile-btn' >Leave Group</button>}
      {(openPopup&& !state_l)? <img src={cancel} alt="search" className='cancel-icon' onClick={() => setopenPopup(false)} />:null}
            {(openPopup&& !state_l)? <div class="overlay" />:null}
            { (openPopup&& !state_l)? <Popupfile />: null}
    </div>
  )
}

export default Navbar