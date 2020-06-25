import React from 'react';
import styled from 'styled-components';
import Item from "components/Item";
import Checkbox from "components/Checkbox";
import {Link} from "react-router-dom";

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
            <Item to="/contact">CONTACT</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item to="/experience">EXPERIENCE</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item to="/education">EDUCATION</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item to="/skills">SKILLS</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item to="/about">ABOUT</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item to="/hobbies">HOBBIES</Item>
        </ItemWrapper>


    </SideBarWrapper>
)

export default SideBar;