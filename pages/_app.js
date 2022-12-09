import React from 'react';

import { ThemeProvider } from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import ColorProvider, { ColorContext } from '../src/context/ColorContext';
import VideoProvider from '../src/context/VideoContext';
import RegisterVideo from '../src/components/RegisterVideo';

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF"
    }
}

function ColorProviderWrapper(props) {
    return (
        <ColorProvider initialMode="dark">
            {props.children}
        </ColorProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const colorContext = React.useContext(ColorContext);
    return (
        <>
            <VideoProvider>
                <ThemeProvider theme={theme[colorContext.mode]}>
                    <CSSReset />
                    <Component {...pageProps} />
                    <RegisterVideo/>
                </ThemeProvider>
            </VideoProvider>
        </>
    )
}

export default function _App(props) {
    return (
        <ColorProviderWrapper>
            <MyApp {...props} />
        </ColorProviderWrapper>
    )
}