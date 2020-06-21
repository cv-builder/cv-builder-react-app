import React from 'react';
import styled from "styled-components";
import logo from "../assets/logo.svg"
import {Link} from "react-router-dom";

const HeaderWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 70px;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.dark};
`;

const Logo = styled.div`
    margin: 0 40px;
    display: block;
    justify-content: flex-start;
    width: 150px; 
    
    height: 67px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border: none;
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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
`

export const Header = () => (
    <HeaderWrapper>
        <Logo/>
        <List>
            <Item>
                <StyledLink to="/login">
                    Login
                </StyledLink>
            </Item>
            <Item>
                Sign up for free
            </Item>
        </List>
    </HeaderWrapper>
)