import React from 'react';
import logo from '../logo.svg';
import 'App.css';
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
import {routes} from "routes";
import {Footer} from "../components/molecules/Footer";
import {Header} from "../components/molecules/Header";
import Example from "./Example";

function Root() {
    return (
        <Router>
            <ThemeProvider theme={lightTheme}>
                <Header/>
                <Route exact path={routes.mainPage} component={MainPage}/>
                <Route path={routes.create} component={PersonalDataForm}/>
                <Route path={routes.login} component={LoginForm}/>
                <Route path={routes.personalData} component={PersonalDataForm}/>
                <Route path={routes.experience} component={ExperienceForm}/>
                <Route path={routes.education} component={EducationForm}/>
                <Route path={routes.skill} component={SkillsForm}/>
                <Route path={routes.interest} component={InterestForm}/>
                <Route path={routes.summary} component={SummaryForm}/>
                <Route path={"/example"} component={Example}/>
                {/*<Footer/>*/}
            </ThemeProvider>
        </Router>
    );
}

export default Root;
