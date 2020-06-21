import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {lightTheme} from "../theme/theme";
import MainPage from "./MainPage";
import {ThemeProvider} from "styled-components";
import ContactForm from "./FormPage";
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import LoginForm from "./LoginForm";

function Root() {
    return (
        <Router>
            <ThemeProvider theme={lightTheme}>
                <Header/>
                <Route exact path="/" component={MainPage}/>
                <Route path="/create" component={ContactForm}/>
                <Route path="/login" component={LoginForm}/>
                <Footer/>
            </ThemeProvider>
        </Router>
    );
}

export default Root;
