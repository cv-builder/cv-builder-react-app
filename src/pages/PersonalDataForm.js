import React from 'react';
import styled from 'styled-components';
import SideBar from "../components/organisms/SideBar";
import ButtonsPanel from "../components/molecules/ButtonsPanel";
import FormWrapper from "../components/organisms/FormWrapper";
import FormTemplate from "../templates/FormTemplate";

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

const PersonalDataForm = () => (
    <FormTemplate>
        <FormWrapper/>
    </FormTemplate>
)

export default PersonalDataForm;