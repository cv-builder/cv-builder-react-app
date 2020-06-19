import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
  margin: 15px auto;
  background: ${({theme}) => theme.colors.gray};
  border-radius: 50px;
`

const Checked = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  margin: 8px 8px;
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