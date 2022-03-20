import React from 'react';
import "./Navbar.css";
import SearchBox from '../SearchBox/SearchBox';
import ProfilePic from '../../images/Mudit_photo.jpg';

const Navbar = ({setVideosData}) => {

    return(
        <div className='Navbar'>
            <div>
                 {/* Logo */}
                <img className="Logo" src="https://www.socialboat.live/images/logo.svg" alt="Logo"></img>
                {/* Text - SocialBoat */}
                <img className="CompanyNameImg" src="https://www.socialboat.live/images/SocialBoat.png" alt="Company Name"></img>
            </div>
           
            <div className='SearchBox'>
                <SearchBox setVideosData = {setVideosData}/>
            </div>

            {/* Profile Pic */}
            <div>
                <img src={ProfilePic} className='ProfilePic' alt="Profile Pic" />
            </div>
        </div>
    )
}

export default Navbar;