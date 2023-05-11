import React from 'react'
import './Post.css'
import profile from './assets/profile_icon.svg'
import view from './assets/explore.svg'
import share from './assets/icons8-share.svg'
import location from './assets/location-pointer.png'
import edit from './assets/icons8-edit.svg'
import { useDispatch, useSelector } from 'react-redux'
import post_back from './assets/image_atg_top.jpg'


const Post = () => {

  const state_l = useSelector((state) => state)

    return (
        <div className='post-location'>
          <div className='post-card-list'>
            <div className='post-card'>
                <div className='post-img'>
                </div>
                <div className='post-text'>
                    <p className='post-tag'>Article</p>
                    <p className='post-caption'>What if famous brands had regular fonts? Meet RegulaBrands!</p>
                    <p className='post-body'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                </div>
                <div className='post-card-b-main'>
                    <div className='post-card-b'>
                      <img src={profile} alt="" className='profile-icon' />
                      <p className='profile-name'>Name</p>
                    </div>
                    <div className='post-card-b2'>
                      <img src={view} alt="" className='view-icon' />
                      <p className='n-views'>1.4k views</p>
                      <img src={share} alt="" className='share-icon' />
                    </div>
                </div>
            </div>
            <div className='post-card'>
                <div className='post-img'>
                </div>
                <div className='post-text'>
                    <p className='post-tag'>Article</p>
                    <p className='post-caption'>What if famous brands had regular fonts? Meet RegulaBrands!</p>
                    <p className='post-body'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                </div>
                <div className='post-card-b-main'>
                    <div className='post-card-b'>
                      <img src={profile} alt="" className='profile-icon' />
                      <p className='profile-name'>Name</p>
                    </div>
                    <div className='post-card-b2'>
                      <img src={view} alt="" className='view-icon' />
                      <p className='n-views'>1.4k views</p>
                      <img src={share} alt="" className='share-icon' />
                    </div>
                </div>
            </div>
            <div className='post-card'>
                <div className='post-img'>
                </div>
                <div className='post-text'>
                    <p className='post-tag'>Article</p>
                    <p className='post-caption'>What if famous brands had regular fonts? Meet RegulaBrands!</p>
                    <p className='post-body'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                </div>
                <div className='post-card-b-main'>
                    <div className='post-card-b'>
                      <img src={profile} alt="" className='profile-icon' />
                      <p className='profile-name'>Name</p>
                    </div>
                    <div className='post-card-b2'>
                      <img src={view} alt="" className='view-icon' />
                      <p className='n-views'>1.4k views</p>
                      <img src={share} alt="" className='share-icon' />
                    </div>
                </div>
            </div>
        </div>
        <div className='location-card'>
          <div className='location-head'>
            <img src={location} alt="" className='loaction-icon' />   
            {!state_l? <p>Nellore, India</p>:<input placeholder='Enter Your Location'/>}
            <img src={edit} alt="" className='view-icon' />  
          </div>
          <div className='location-body'>
            <p>Your location will help us serve better and attend a personalized experience</p>
          </div>
        </div>
        </div>
    )
}

export default Post