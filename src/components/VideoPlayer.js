import { ifError } from 'assert';
import React from 'react';

const VideoPlayer = ({video}) => {

    if(!video){
        return <div>Click Something...</div>;
    }

    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return(
        <div>
            <div className="ui embed">
                <iframe src={videoURL}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoPlayer;