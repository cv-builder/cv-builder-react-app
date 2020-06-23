import React from 'react';
import styled from 'styled-components';
import Button from "components/Button";

const ButtonPanelWrapper = styled.div`
    width: 40vw;
    display: flex;
    justify-content: space-around;
    margin: 20px
`


const ButtonsPanel = () => (
    <ButtonPanelWrapper>
        <Button children="Previous"/>
        <Button children="Next"/>
    </ButtonPanelWrapper>
);

export default ButtonsPanel;

