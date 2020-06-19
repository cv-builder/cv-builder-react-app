import React from 'react';
import styled from "styled-components";
// import styles from './Button.module.scss';


const StyledButton = styled.button`
    //width: 316px;
    height: 50px;
    outline: none;
    border: none;
    letter-spacing: 5px;
    border-radius: 24px;
    font-size: 30px;
    cursor: pointer;
    background: ${({theme}) => theme.colors.accent};
    color: ${({theme}) => theme.colors.white};
`


const Button = ({children}) => (
    <StyledButton>
        {children}
    </StyledButton>
);

export default Button;

