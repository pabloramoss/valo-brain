import React from 'react';
import VideoItem from './VideoItem';
import { Box } from '@chakra-ui/react'


const VideoList = ({videos , handleVideoSelect}) => {
    console.log("estos son los videos que recibe videlist: ",videos)
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });

    return <Box ms={{base:"0", md:"100px"}}>{renderedVideos}</Box>;
};
export default VideoList;