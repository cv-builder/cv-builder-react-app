import React from 'react';
import styled from "styled-components";
import logo from "../assets/logo.png"

const HeaderWrapper = styled.nav`
  display: flex;
  //align-items: center;
  height: 70px;
  background-color: deepskyblue;
  transition: all 0.5s linear;
`;

const Logo = styled.div`
    margin: 0 40px;
    display: block;
    justify-content: flex-start;
    width: 67px; 
    height: 67px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: none;
`;

const List = styled.li`
    display: flex;
    justify-content: flex-end;
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

export const Header = () => (
    <HeaderWrapper>
        <Logo/>
        <List>
            <Item>
                Login
            </Item>
            <Item>
                Sign up
            </Item>
        </List>
    </HeaderWrapper>
)