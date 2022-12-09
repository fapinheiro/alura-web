import React from "react";

export const ColorModeContext = React.createContext({
    mode: 'dark',
    setMode: () => { alert('Color mode não está configurado!') },
    toggleMode: () => { alert('Color mode não está configurado!') }
})

export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode);

    function toggleMode() {
        if (mode === 'dark') setMode('light');
        if (mode === 'light') setMode('dark');
    }

    return (
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}