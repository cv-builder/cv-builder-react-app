import React from 'react';
import styled from 'styled-components';
import SideBar from "../components/SideBar";
import ButtonsPanel from "../components/ButtonsPanel";
import ContactFormWrapper from "../components/ContactFormWrapper";

const FormPageWrapper = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.white};
`;
const FormFrame = styled.div`
  display: flex;
  flex-direction:  column;
`;

const ContactForm = () => (
    <FormPageWrapper>
        <SideBar/>
        <FormFrame>
            <ContactFormWrapper/>
            <ButtonsPanel/>
        </FormFrame>
    </FormPageWrapper>
)

export default ContactForm;