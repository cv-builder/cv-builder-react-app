import React from 'react';
import logo from '../logo.svg';
import 'App.css';
import {Header} from "components/Header";
import {Footer} from "components/Footer";
import {lightTheme} from "theme/theme";
import MainPage from "pages/MainPage";
import {ThemeProvider} from "styled-components";
import PersonalDataForm from "pages/PersonalDataForm";
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import LoginForm from "pages/LoginForm";
import SummaryForm from "pages/SummaryForm";
import InterestForm from "pages/InterestForm";
import SkillsForm from "pages/SkillsForm";
import EducationForm from "pages/EducationForm";
import ExperienceForm from "pages/ExperienceForm";

function Root() {
    return (
        <Router>
            <ThemeProvider theme={lightTheme}>
                <Header/>
                <Route exact path="/" component={MainPage}/>
                <Route path="/create" component={PersonalDataForm}/>
                <Route path="/login" component={LoginForm}/>
                <Route path="/personal-data" component={PersonalDataForm}/>
                <Route path="/experience" component={ExperienceForm}/>
                <Route path="/education" component={EducationForm}/>
                <Route path="/skills" component={SkillsForm}/>
                <Route path="/interests" component={InterestForm}/>
                <Route path="/summary" component={SummaryForm}/>
                <Footer/>
            </ThemeProvider>
        </Router>
    );
}

export default Root;
