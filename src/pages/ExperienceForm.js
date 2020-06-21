import React from 'react';
import styled from 'styled-components';
import SideBar from "../components/SideBar";
import FormWrapper from "../components/FormWrapper";
import ExperienceFormWrapper from "../components/ExperienceFormWrapper";


const FormPageWrapper = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.white};
`;


const ExperienceForm = () => (
    <FormPageWrapper>
        <SideBar/>
        <ExperienceFormWrapper/>
    </FormPageWrapper>
)

export default ExperienceForm;