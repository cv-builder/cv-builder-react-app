import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {lightTheme} from "../theme/theme";
import MainPage from "./MainPage";
import {ThemeProvider} from "styled-components";
import FormPage from "./FormPage";
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";

function Root() {
    return (
        <Router>
            <ThemeProvider theme={lightTheme}>
                <Header/>
                <Route exact path="/" component={MainPage}/>
                <Route path="/create" component={FormPage}/>
                <Footer/>
            </ThemeProvider>
        </Router>
    );
}

export default Root;
