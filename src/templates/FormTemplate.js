import React from 'react';
import styled from 'styled-components';
import SideBar from "../components/organisms/SideBar";
import MainTemplate from "./MainTemplate";
import ButtonsPanel from "../components/molecules/ButtonsPanel";

const FormFrame = styled.div`
  display: flex;
  flex-direction:  column;
`;

const FormTemplate = ({children}) => (
    <MainTemplate>
       <FormFrame>
           {children}
           <ButtonsPanel/>
       </FormFrame>
    </MainTemplate>
);

export default FormTemplate;