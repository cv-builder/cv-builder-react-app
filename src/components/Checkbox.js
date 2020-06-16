import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
  margin: 10px auto;
  background: #fcfff4;
  border-radius: 50px;
  box-shadow: rgba(0,0,0,0.5);
`

const Checked = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  margin: 8px 8px;
  background: black;
  border-radius: 50px;
  box-shadow: black;
`

const Checkbox = () => (
    <CheckboxWrapper>
        <Checked/>
    </CheckboxWrapper>
)

export default Checkbox;