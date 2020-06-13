import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {lightTheme} from "../theme/theme";
import MainPage from "./MainPage";
import {ThemeProvider} from "styled-components";

function Root() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Header/>
            <MainPage/>

            <Footer/>.
        </ThemeProvider>
    );
}

export default Root;
