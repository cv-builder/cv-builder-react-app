import React from 'react';
import 'App.css';
import {lightTheme} from "theme/theme";
import MainPage from "pages/MainPage";
import {ThemeProvider} from "styled-components";
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router";
import {routes} from "routes";
import {Header} from "../components/molecules/Header";
import LoginForm from "../views/LoginForm";
import PersonalDataPage from "./PersonalDataPage";
import ExperiencePage from "./ExperiencePage";
import EducationPage from "./EducationPage";
import InterestPage from "./InterestPage";
import SummaryPage from "./SummaryPage";
import SkillsPage from "./SkillsPage";

function Root() {
    return (
        <Router>
            <ThemeProvider theme={lightTheme}>
                <Header/>
                <Route exact path={routes.mainPage} component={MainPage}/>
                <Route path={routes.create} component={PersonalDataPage}/>
                <Route path={routes.login} component={LoginForm}/>
                <Route path={routes.personalData} component={PersonalDataPage}/>
                <Route path={routes.experience} component={ExperiencePage}/>
                <Route path={routes.education} component={EducationPage}/>
                <Route path={routes.skill} component={SkillsPage}/>
                <Route path={routes.interest} component={InterestPage}/>
                <Route path={routes.summary} component={SummaryPage}/>
            </ThemeProvider>
        </Router>
    );
}

export default Root;
