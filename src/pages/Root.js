import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {lightTheme} from "../theme/theme";
import MainPage from "./MainPage";
import {ThemeProvider} from "styled-components";
import FormPage from "./FormPage";

function Root() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Header/>
            <FormPage/>
            <Footer/>
        </ThemeProvider>
    );
}

export default Root;
