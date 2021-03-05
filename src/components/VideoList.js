import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onSelect}) =>{
    const renderList = videos.map((video)=>{
        return <VideoItem onSelect={onSelect} video={video}/>;
    });
    return(
        <div>
            {renderList}
        </div>
    );
}

export default VideoList;