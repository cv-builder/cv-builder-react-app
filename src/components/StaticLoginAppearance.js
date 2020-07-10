import React from 'react';
import styled from 'styled-components';
import ValidationLoginForm from "components/ValidationLoginForm.js";
import img from "assets/Backgroundimg.png";


const TextTop = styled.h1`
   position: absolute;
   width: 367px;
   max-width: 100%;
   text-align: center;
   margin: 0 auto;
   color: white;
   background-color: #25313D; 
   font-size: 20px;
   font-weight: none;
   padding: 20px;
   top: 0;
`;
const Content = styled.div`
   background-color: #E3E3E3;
   width: 367px;
   height: 500px;
   max-width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
`;

const PageImage = styled.div`
   width: 100vw;
   max-width: 100%;
   height: 100vh;
   background-image: url(${img});
   background-size: cover;
`;

const StaticLoginAppearance = () => (
    <div>
    <PageImage>
    <Content>
    <TextTop>Sign In</TextTop>
    <ValidationLoginForm/>
    </Content>
    </PageImage>
    </div>   
);
export default StaticLoginAppearance;