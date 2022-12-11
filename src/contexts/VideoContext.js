import React from "react";

export const VideoContext = React.createContext({
    video: {
        "title": "",
        "url": "",
        "thumb": ""
    },
    setVideo: () => {}
})

export default function VideoProvider(props) {
    const [video, setVideo] = React.useState({
        "title": "",
        "url": "",
        "thumb": ""
    });

    return (
        <VideoContext.Provider value={{video: video, setVideo: setVideo}}>
            {props.children}
        </VideoContext.Provider>
    )
}