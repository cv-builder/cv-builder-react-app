import React from 'react';
import styled from 'styled-components';
import ValidationLoginForm from "components/ValidationLoginForm.js";
import img from "assets/Backgroundimg.png";


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
   max-width: 100%;
   position: relative;
   left: 33%;
   top: 33%;
   right: 33%;
   bottom: 33%;
   
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