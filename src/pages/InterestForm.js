import React from 'react';
import styled from 'styled-components';
import FormWrapper from "components/FormWrapper";
import SkillsFormWrapper from "components/SkillsFormWrapper";
import SideBar from "../components/organisms/SideBar";
import ButtonsPanel from "../components/molecules/ButtonsPanel";


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

const InterestForm = () => (
    <FormPageWrapper>
        <SideBar/>
        <FormFrame>
            <SkillsFormWrapper children="Hobby"/>
            <ButtonsPanel/>
        </FormFrame>
    </FormPageWrapper>
)

export default InterestForm;