import React from 'react'
import './Popupfile.css'
import login_back from './assets/login_back.jpg'
import { useState } from 'react'
import signup_back from './assets/signup_back.jpg'
import { useDispatch, useSelector } from 'react-redux'

import google from './assets/icons8-google.svg'
import facebook from './assets/icons8-facebook.svg'

const Popupfile = () => {

    const [signin, setSignin] = useState(true)
    const dispatch = useDispatch();
    const state_l = useSelector((state) => state)


    const handle = () => {
        dispatch({ type: "LOGIN" })
        console.log(state_l)
    }



    return (
        <div className='popup-back'>
            <div className='green-txt-div'>
                <p className='green-txt'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            </div>
            <div className='popup-total'>
                <div className='popup-main'>
                    {!signin ? <h3>Sign In</h3> : <h3>Create Account</h3>}
                    {signin &&
                        <div className='popup-name'>
                            <input placeholder='First Name' /><br />
                            <input placeholder='Last Name' /><br />
                        </div>}
                    <input placeholder='Email' type='email' /><br />
                    <input placeholder='Password' type='password'/><br />
                    {signin && <input placeholder='Confirm Password' type='password' />}
                    <div className='mobile-btn'>
                        {!signin ? <button onClick={handle}>Sign In</button> : <button onClick={handle}>Create</button>}
                        {signin ? <center><h6 onClick={() => setSignin(!signin)}>signin</h6></center> : <center><h6 onClick={() => setSignin(!signin)}>Create Account</h6></center>}
                    </div>
                    <div className='facebook-div'>
                        <img src={facebook} className='f-icon'/>
                        <h5>Sign up with Facebook</h5>
                    </div>
                    <div className='google-div'>
                    <img src={google} className='g-icon'/>
                    <h5>Sign up with Google</h5>
                    </div>
                    {!signin && <h6>Forgot Password?</h6>}
                </div>
                <div className='image-div'>
                    {!signin ? <center><p onClick={() => setSignin(!signin)}>Don't have an account? create new for free</p></center> : <center><p onClick={() => setSignin(!signin)}>Already have an account? Sign In</p></center>}
                    {!signin ? <img src={login_back} /> : <img src={signup_back} />}
                </div>
            </div>
        </div>
    )
}

export default Popupfile