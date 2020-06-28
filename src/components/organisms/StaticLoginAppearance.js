import React from 'react';
import styled from 'styled-components';

const TextTop = styled.h1`
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 25px;
   background-color: grey;
   padding: 20px;
   margin-top: -5px;
`;
const Content = styled.div`
   background-color: black;
   width: 367px;
   height: 500px;
   position: absolute;
   justify-content: center;
   align-items: center;
   left: 37%;
   right: 37%;
   top: 10%;
   bottom: 10%;
`;

const StaticLoginAppearance = () => (
    <div>
    <Content>
    <TextTop>Sign In</TextTop>
    </Content>
    </div>   
);
export default StaticLoginAppearance;