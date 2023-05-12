import React from 'react'
import './Post.css'
import profile2 from './assets/color_profile.svg'
import profile from './assets/profile_icon.svg'
import view from './assets/explore.svg'
import share from './assets/icons8-share.svg'
import location from './assets/location-pointer.png'
import edit from './assets/icons8-edit.svg'
import { useDispatch, useSelector } from 'react-redux'
import post_back from './assets/image_atg_top.jpg'
import atg_1 from './assets/atg_1.jfif'
import atg_2 from './assets/atg_2.jfif'
import atg_3 from './assets/atg_3.jfif'
import calender from './assets/calendar.svg'


const Post = () => {

  const state_l = useSelector((state) => state)

  return (
    <div className='post-location'>
      <div className='post-card-list'>
        <div className='post-card'>
          <div className='post-img1'>
          </div>
          <div className='post-text'>
            <p className='post-tag'>Article</p>

            <div className='post-body-total'>
              <p className='post-caption'>What if famous brands had regular fonts? Meet RegulaBrands!</p>
              <select className='options'>
                <option value="empty"></option>
                <option value="edit">Edit</option>
                <option value="report">Report</option>
                <option value="option3">option 3</option>
              </select>
            </div>
            <p className='post-body'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
          </div>
          <div className='post-card-b-main'>
            <div className='post-card-b'>
              <img src={profile2} alt="" className='profile-icon' />
              <p className='profile-name'>Sarthak Kamra</p>
            </div>
            <div className='post-card-b2'>
              <img src={view} alt="" className='view-icon' />
              <p className='n-views'>1.4k views</p>
              <img src={share} alt="" className='share-icon' />
            </div>
          </div>
        </div>
        <div className='post-card'>
          <div className='post-img2'>
          </div>
          <div className='post-text'>
            <p className='post-tag'>Article</p>
            <div className='post-body-total'>
              <p className='post-caption'>What if famous brands had regular fonts? Meet RegulaBrands!</p>
              <select className='options'>
                <option value="empty"></option>
                <option value="edit">Edit</option>
                <option value="report">Report</option>
                <option value="option3">option 3</option>
              </select>
            </div>
            <p className='post-body'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
          </div>
          <div className='post-card-b-main'>
            <div className='post-card-b'>
              <img src={profile2} alt="" className='profile-icon' />
              <p className='profile-name'>Sarah West</p>
            </div>
            <div className='post-card-b2'>
              <img src={view} alt="" className='view-icon' />
              <p className='n-views'>1.4k views</p>
              <img src={share} alt="" className='share-icon' />
            </div>
          </div>
        </div>
        <div className='post-card'>
          <div className='post-img3'>
          </div>
          <div className='post-text'>
            <p className='post-tag'>Article</p>
            <div className='post-body-total'>
              <p className='post-caption'>What if famous brands had regular fonts? Meet RegulaBrands!</p>
              <select className='options'>
                <option value="empty"></option>
                <option value="edit">Edit</option>
                <option value="report">Report</option>
                <option value="option3">option 3</option>
              </select>
            </div>
            <div className='cal-loc'>
              <div className='calender-div'>
                <img src={calender} className='calender-post' />
                <p>Sun, 13 Nov, 2022</p>
              </div>
              <div className='location-div'>
                <img src={location} className='location-post' />
                <p>Nellore, India</p>
              </div>
            </div>
            <center><p className='post-body-btn'>Visit Website</p></center>
          </div>
          <div className='post-card-b-main'>
            <div className='post-card-b'>
              <img src={profile2} alt="" className='profile-icon' />
              <p className='profile-name'>Ronal Jones</p>
            </div>
            <div className='post-card-b2'>
              <img src={view} alt="" className='view-icon' />
              <p className='n-views'>1.4k views</p>
              <img src={share} alt="" className='share-icon' />
            </div>
          </div>
        </div>

        <div className='post-card2'>
          <div className='post-text'>
            <p className='post-tag'>Jobs</p>
            <div className='post-body-total'>
              <p className='post-caption'>Software Developer</p>
              <select className='options'>
                <option value="empty"></option>
                <option value="edit">Edit</option>
                <option value="report">Report</option>
                <option value="option3">option 3</option>
              </select>
            </div>
            <div className='cal-loc'>
              <div className='calender-div'>
                <img src={calender} className='calender-post' />
                <p>HealthyWeb pvt ltd</p>
              </div>
              <div className='location-div'>
                <img src={location} className='location-post' />
                <p>Nellore, India</p>
              </div>
            </div>
            <center><p className='post-body-btn'>Visit Website</p></center>
          </div>
          <div className='post-card-b-main'>
            <div className='post-card-b'>
              <img src={profile2} alt="" className='profile-icon' />
              <p className='profile-name'>Ronal Jones</p>
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
          {!state_l ? <p>Nellore, India</p> : <input placeholder='Enter Your Location' />}
          <img src={edit} alt="" className='view-icon' />
        </div>
        <div className='location-body'>
          <p>Your location will help us serve better and attend a personalized experience</p>
        </div>
        
        {state_l? <div className='recommrndations'>
          <h4>Recommended Groups</h4>
          <div className='post-card-b'>
            <img src={profile2} alt="" className='profile-icon' />
            <p className='profile-name'>Leisure</p>
            <button>Follow</button>
          </div>
          <div className='post-card-b'>
            <img src={profile2} alt="" className='profile-icon' />
            <p className='profile-name'>Activism</p>
            <button>Follow</button>
          </div>
          <div className='post-card-b'>
            <img src={profile2} alt="" className='profile-icon' />
            <p className='profile-name'>MBA</p>
            <button>Follow</button>
          </div>
          <div className='post-card-b'>
            <img src={profile2} alt="" className='profile-icon' />
            <p className='profile-name'>Philosophy</p>
            <button>Follow</button>
          </div>
        </div>:null}
      </div>
    </div>
  )
}

export default Post