import React from 'react'
import './Popupfile.css'
import login_back from './assets/login_back.jpg'
import { useState } from 'react'
import signup_back from './assets/signup_back.jpg'
import { useDispatch, useSelector } from 'react-redux'

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
                    <input placeholder='Email' /><br />
                    <input placeholder='Password' /><br />
                    {signin && <input placeholder='Confirm Password' />}
                    <div className='mobile-btn'>
                        {!signin ? <button onClick={handle}>Sign In</button> : <button onClick={handle}>Create</button>}
                        {signin ? <center><h6 onClick={() => setSignin(!signin)}>signin</h6></center> : <center><h6 onClick={() => setSignin(!signin)}>Create Account</h6></center>}
                    </div>
                    <h5>Sign up with Facebook</h5>
                    <h5>Sign up with Google</h5>
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