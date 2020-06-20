import React from 'react';
import styled from 'styled-components';
import Item from "./Item";
import Checkbox from "./Checkbox";

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
            <Item>CONTACT</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item>EXPERIENCE</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item>EDUCATION</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item>SKILLS</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item>ABOUT</Item>
        </ItemWrapper>
        <ItemWrapper>
            <Checkbox/>
            <Item>HOBBIES</Item>
        </ItemWrapper>


    </SideBarWrapper>
)

export default SideBar;