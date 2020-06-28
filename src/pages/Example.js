import React from 'react';
import styled from 'styled-components';
import SideBar from "../components/organisms/SideBar";
import ButtonsPanel from "../components/molecules/ButtonsPanel";
import SummaryFormWrapper from "../components/organisms/SummaryFormWrapper";
import MainTemplate from "../templates/MainTemplate";


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

const Example = () => (
    <MainTemplate>
        <FormFrame>
            <SummaryFormWrapper/>
            <ButtonsPanel/>
        </FormFrame>
    </MainTemplate>
)

export default Example;