import React from "react";
import {useContext} from "react";
import { ThemeContext } from "../component/context/ThemeContext";

const useTheme = () => {
    const context = useContext(ThemeContext);

    if(context === undefined){
        throw new Error("useTheme() must be used inside a ThemeProvider ")
    }

    return context;
}

export default useTheme;