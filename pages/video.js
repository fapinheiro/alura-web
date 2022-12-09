import React from "react";
import { VideoContext } from "../src/context/VideoContext";

function Video(props) {
    const videoContext = React.useContext(VideoContext);
    console.log(videoContext.video);
    
    return (
        <div>
            Video: {videoContext.video.title}
        </div>
    )
}

export default Video;