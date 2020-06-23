import React from 'react';
import styled from 'styled-components';
import SideBar from "components/SideBar";
import FormWrapper from "components/FormWrapper";
import ExperienceFormWrapper from "components/ExperienceFormWrapper";
import ButtonsPanel from "components/ButtonsPanel";


const FormPageWrapper = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.white};
`;
const FormFrame = styled.div`
  display: flex;
  flex-direction:  column;
`;

const ExperienceForm = () => (
    <FormPageWrapper>
        <SideBar/>
        <FormFrame>
            <ExperienceFormWrapper/>
            <ButtonsPanel/>
        </FormFrame>
    </FormPageWrapper>
)

export default ExperienceForm;