import React from "react";
import useTheme from "../../hooks/useTheme";
import './ThemeSelector.css';
import Image from '../../assets/noun-light-1299661.png';

const themeColors = ['#58249c', '#249c6b', '#b70233']

const ThemeSelector = () => {
    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode)

    return(
        <div className="theme-selector">
            <div className="mode-toggle">
                <img 
                    onClick={toggleMode}
                    src={Image} alt="Theme Toggle"
                    style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                    
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map((color) => (
                    <div   
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{background: color}}
                    />
                ))}
            </div>
        </div>
    )
}

export default ThemeSelector;