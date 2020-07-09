import React from 'react';
import styled from 'styled-components';

const ButtonSubmitLoginForm = styled.button`
<<<<<<< HEAD
     background-color: #25313D;
     position: absolute;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 250px;
     border: none;
     width: 140px;
=======
     display: flex;
     justify-content: center;
     align-items: center;
     margin: 0 auto;
     background-color: #25313D;
     margin-top: 250px;
     border: none;
     width: 280px;
     margin-top: 200px;
>>>>>>> 0e95e5a... Add next step login form style, and one component
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