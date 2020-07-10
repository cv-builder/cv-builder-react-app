import React from 'react';
import styled from 'styled-components';
import ValidationLoginForm from "components/ValidationLoginForm.js";

const ButtonSubmitLoginForm = styled.button`
     display: flex;
     justify-content: center;
     align-items: center;
     margin: 0 auto;
     background-color: #25313D;
     margin-top: 250px;
     border: none;
     width: 280px;
     margin-top: 200px;
`;

const TextOnButton = styled.p`
     color: #fff;
     font-size: 17px;
     font-family: Arial;
     letter-spacing: 1px;
`;


const ButtonSubmitAppearance = ({isSubmitting}) => (
          <ButtonSubmitLoginForm type="submit" visible={isSubmitting}>
            <TextOnButton>Submit</TextOnButton>
          </ButtonSubmitLoginForm>
  );
export default ButtonSubmitAppearance;