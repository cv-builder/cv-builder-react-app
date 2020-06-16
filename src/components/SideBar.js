import React from 'react';
import styled from 'styled-components';
import Item from "./Item";

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin: 30px;
`

const SideBar = () => (
    <SideBarWrapper>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </SideBarWrapper>
)

export default SideBar;