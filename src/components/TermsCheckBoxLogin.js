import React from 'react';
import styled from 'styled-components';

const TextTerms = styled.p`
   position: absolute;
   text-align: center;
   font-size: 12px;
   color: #000;
   margin-bottom: -30px;
   margin-top: 50px;
`;


const TermsCheckBoxLogin = () => (
    <TextTerms>I accept terms and conditions to use</TextTerms>
  );
export default TermsCheckBoxLogin;