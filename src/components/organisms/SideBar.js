import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Checkbox from "../atoms/Checkbox";
import Item from "../atoms/Item";

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin: 30px;
`
const ItemWrapper = styled.div`
  display: flex;
`


const SideBar = () => (
    <SideBarWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item to="/cv/contact">CONTACT</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item to="/cv/experience">EXPERIENCE</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item to="/cv/education">EDUCATION</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item to="/cv/skill">SKILLS</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item to="/cv/about">ABOUT</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item to="/cv/interest">HOBBIES</Item>
        </ItemWrapper>


    </SideBarWrapper>
)

export default SideBar;