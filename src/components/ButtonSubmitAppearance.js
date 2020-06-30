import React from 'react';
import styled from 'styled-components';

const ButtonSubmitLoginForm = styled.button`
     background-color: #25313D;
     position: absolute;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 250px;
     border: none;
     width: 140px;
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