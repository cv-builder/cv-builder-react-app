import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  margin: 15px auto;
  border: 5px ${({theme}) => theme.colors.gray} solid ;
  border-radius: 50px;
`

const Checked = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  margin: 3px 3px;
  background: ${({theme}) => theme.colors.accent};
  border-radius: 50px;
  box-shadow: black;
`

const Checkbox = () => (
    <CheckboxWrapper>
        <Checked/>
    </CheckboxWrapper>
)

export default Checkbox;