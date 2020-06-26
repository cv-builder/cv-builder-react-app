import React from 'react';
import resume from '../assets/resume.svg';
import styled from "styled-components";
import Button from "../components/Button";
import {Link} from "react-router-dom";

const PageWrapper = styled.div`
  display: flex;
  width: 80vw;
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.white};
`;

const PageImage = styled.div`
    width: 35vw;
    height: 80vh;
    background-image: url(${resume});
    background-size: cover;
`;

const PageDescription = styled.div`
  width: 35vw;
  align-items: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  width: 480px;
  font-size: 48px;
`

const Paragraph = styled.p`
  
`

const MainPage = () => {
    return (
        <PageWrapper>
            <PageImage/>
            <PageDescription>
                <Title>
                    Instantly create a CV
                    to get a new job!
                </Title>
                    <ul>
                        <li>choose your template</li>
                        <li>build your cv step by step</li>
                        <li>print</li>
                        <li>get a new job</li>
                    </ul>
                <Button>
                    <Link to="/create">Create your own CV! </Link></Button>
            </PageDescription>
        </PageWrapper>
    )
};

export default MainPage;