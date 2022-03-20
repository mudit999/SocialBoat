import React from 'react';
import {Card} from 'react-bootstrap';
import './MediaCard.css';
import ReactPlayer from 'react-player'

const MediaCard = ({ heading,text,video,tags }) => {

    return(
        <div>
          <Card style={{ width: '20rem' }}>
            <ReactPlayer className="video-player" width='318px' height='180px' controls url={video}/>
            <Card.Body>
              <Card.Title className="mb-3">{heading}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">Tags: {tags.join(", ")}</Card.Subtitle>
              <Card.Text>
                {text}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    )
}

export default MediaCard