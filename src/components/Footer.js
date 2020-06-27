import React from 'react';
import styled from "styled-components";
import logo from "../assets/logo.svg"

const HeaderWrapper = styled.nav`
   margin-top: 10px;
   position: fixed;
   left: 0;
   bottom: 0;
   display: flex;
   justify-content: flex-end;
   height: 70px;
   width: 100vw;
   color: ${({theme}) => theme.colors.white};
   background-color: ${({theme}) => theme.colors.dark};
`;


const List = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Item = styled.li`
    list-style: none;
    display: flex;
    height: 70px;
    width: 230px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const Footer = () => (
    <HeaderWrapper>
        <List>
            <Item>
                About
            </Item>
            <Item>
                F.A.Q.
            </Item>
            <Item>
                Contact
            </Item>
        </List>
    </HeaderWrapper>
)