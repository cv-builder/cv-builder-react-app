import React from 'react';
import logo from '../logo.svg';
import 'App.css';
import {Header} from "components/Header";
import {Footer} from "components/Footer";
import {lightTheme} from "theme/theme";
import MainPage from "pages/MainPage";
import {ThemeProvider} from "styled-components";
import ContactForm from "pages/ContactForm";
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import LoginForm from "pages/LoginForm";
import AboutForm from "pages/AboutForm";
import HobbyForm from "pages/HobbyForm";
import SkillsForm from "pages/SkillsForm";
import EducationForm from "pages/EducationForm";
import ExperienceForm from "pages/ExperienceForm";
import SecuredRoute from "security/SecuredRoute";

function Root() {
    return (
        <Router>
            <ThemeProvider theme={lightTheme}>
                <Header/>
                <Route exact path="/" component={MainPage}/>
                <Route path="/login" component={LoginForm}/>
                <SecuredRoute path="/create" component={ContactForm}/>
                <SecuredRoute path="/contact" component={ContactForm}/>
                <SecuredRoute path="/experience" component={ExperienceForm}/>
                <SecuredRoute path="/education" component={EducationForm}/>
                <SecuredRoute path="/skills" component={SkillsForm}/>
                <SecuredRoute path="/hobbies" component={HobbyForm}/>
                <SecuredRoute path="/about" component={AboutForm}/>
                <Footer/>
            </ThemeProvider>
        </Router>
    );
}

export default Root;
