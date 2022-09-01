import React, { useEffect } from 'react';
import { useState } from 'react';

const useDarkMode = () => {
    const [theme,setTheme] = useState <any>(localStorage.theme);
    const colorTheme = theme == 'dark' ? 'light': 'dark';

    useEffect(() =>{
        const  root = window.document.documentElement;
        root.classList.add(theme);

        root.classList.remove(colorTheme);
        localStorage.setItem('theme',theme)
    },[colorTheme, setTheme]);
    return[colorTheme, setTheme]
};

export default useDarkMode;