import React from 'react';
import styled from 'styled-components';
import SideBar from "../components/SideBar";
import EducationFormWrapper from "../components/EducationFormWrapper";
import ButtonsPanel from "../components/ButtonsPanel";


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

const EducationForm = () => (
    <FormPageWrapper>
        <SideBar/>
        <FormFrame>
        <EducationFormWrapper/>
            <ButtonsPanel/>
        </FormFrame>
    </FormPageWrapper>
)

export default EducationForm;