import React from 'react';
import config from '../config.json';
import styled from 'styled-components';

import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';
import Banner from '../src/components/Banner';
import { VideoContext } from '../src/context/VideoContext';
import Link from 'next/link';

function HomePage() {

    const [valorDaBusca, setValorDaBusca]  = React.useState('Frost');

    return (
        <>
            <div>
                <Menu valorDaBusca={valorDaBusca} setValorDaBusca={setValorDaBusca}/>
                <Banner bg={config.bg}/>
                <Header />
                <Timeline searchValue={valorDaBusca} playlists={config.playlists} />
            </div>
        </>

    )
}

export default HomePage;

// function Menu() {
//     return (
//         <div>Menu</div>
//     )
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%
    }
    .user-info {
        /* margin-top: 50px; */
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

// const StyledBanner = styled.div`
//     background-image: url(${({bg}) => bg});
//     background-image: url(${config.bg});
//     height: 250px;
// `;

function Header() {
    return (
        <StyledHeader>
            {/* <StyledBanner bg={config.bg}/> */}
            <section className='user-info'>
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

// function Banner() {
//     return (
//         <img src="./images/banner.png" alt="Banner do site"/>
//     )
// }


function Timeline({searchValue, ...props}) {
    const playlistNames = Object.keys(props.playlists);
    const videoContext = React.useContext(VideoContext);

    function setVideo(video) {
        videoContext.setVideo(video);
    }

    return (
        <StyledTimeline>
            {
                playlistNames.map((name, index) => {
                    const videos = props.playlists[name];
                    return (
                        <section key={index}>
                            <h2>
                                {name}
                            </h2>
                            <div>
                                {
                                    videos.filter( video => {
                                        return video.title.toLowerCase().includes(searchValue.toLowerCase())
                                    }).map((video, index) => {
                                
                                        return (
                                            <Link href='/video' key={index} onClick={ () => {setVideo(video)} }>
                                                <img src={video.thumb}></img>
                                                <span>
                                                    {video.title}
                                                </span>
                                            </Link>
                                            // <a href='http://localhost:3000/video' key={index} onClick={ () => {
                                            //     console.log(video);
                                            //     videoContext.setVideo(video);
                                            // } }>
                                            //     <img src={video.thumb}></img>
                                            //     <span>
                                            //         {video.title}
                                            //     </span>
                                            // </a>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    )
                })
            }
        </StyledTimeline>
    )
}