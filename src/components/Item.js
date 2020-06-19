import React from 'react';
import styled from 'styled-components';
import Checkbox from "./Checkbox";

const Item = styled.div`
  width: 270px;
  height: 50px;
  border-radius: 35px;
  display: flex;
  background: ${({theme}) => theme.colors.accent};
  color: ${({theme}) => theme.colors.white};
  margin: 10px;
  justify-content: flex-start;
`
export default Item;