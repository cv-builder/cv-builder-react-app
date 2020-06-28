import React from 'react';
import styled from 'styled-components';
import SideBar from "../components/organisms/SideBar";
import {Footer} from "../components/molecules/Footer";

const FormPageWrapper = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.white};
`;

const MainTemplate = ({children}) => (
    <FormPageWrapper>
        <SideBar/>
        {children}
        <Footer/>
    </FormPageWrapper>
);

export default MainTemplate;