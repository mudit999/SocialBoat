import React from 'react';
import './Cards.css';
import MediaCard from './MediaCard/MediaCard';

const Cards = ({videosData}) => {
    return(
            <div className='Cards'>
                {/* {console.log(videosData)} */}
                {videosData.map(videoItem => (
                    <MediaCard
                        key={videoItem.text} 
                        heading = {videoItem.heading}
                        text = {videoItem.text}
                        video = {videoItem.video}
                        tags = {videoItem.tags} />)
                )}
            </div>
    )
}

export default Cards