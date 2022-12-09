import React from 'react';

import { ThemeProvider } from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import ColorModeProvider, { ColorModeContext } from '../src/components/Menu/components/ColorMode';
import VideoProvider from '../src/context/VideoContext';

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
        <ColorModeProvider initialMode="dark">
            {props.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const colorContext = React.useContext(ColorModeContext);
    return (
        <>
            <VideoProvider>
                <ThemeProvider theme={theme[colorContext.mode]}>
                    <CSSReset />
                    <Component {...pageProps} />
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