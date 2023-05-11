import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './PostContainer.css'
import Post from './Post';
import { useState } from 'react';
import Popupfile from './Popupfile';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const PostContainer = () => {


    const [openPopup, setopenPopup] = useState(false);

    const state_l = useSelector((state)=>state)

    return (
        <div>
            <div className='main-post-container'>
                <div className='post-head'>
                    <div className='post-start'>
                        <Link to="/" className='post-btns'>Posts(30)</Link>
                        <Link to="/" className='post-btns'>Artist</Link>
                        <Link to="/" className='post-btns'>Event</Link>
                        <Link to="/" className='post-btns'>Education</Link>
                        <Link to="/" className='post-btns'>Job</Link>
                    </div>
                    <div className='post-end'>
                        <select name="postd" id="postd">
                            <option value="Write_a_Post">Write a Post</option>
                            <option value="Search_a_post">Search a post</option>
                        </select>
                        <div className='joinbtn'>
                            <img />
                            <button onClick={() => setopenPopup(true)}>Join Group</button>
                        </div>
                    </div>
                </div>
                <Post />
            </div>
        </div>
    )
}

export default PostContainer