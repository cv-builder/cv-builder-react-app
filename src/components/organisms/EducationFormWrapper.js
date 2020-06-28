import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
      margin: 30px;
      border-radius: 20px;
      width: 60vw;
      display: flex;
      flex-direction: column;
`;

const Wrapper = styled.div`
      display: flex;
      background-color: ${({theme}) => theme.colors.light};
      margin: 10px 0;
      padding: 5px 0 20px 0;
      border-radius: 20px;
`

const FormItem = styled.div`
      display: flex;
      flex-direction: column;
      margin-left: 40px;
      margin-top: 16px;
      box-shadow: 0 20px 40px -5px rgba(#1e58ff, .3);  
`;

const StyledLabel = styled.label`
      background-color: transparent;;
      color: ${({theme}) => theme.colors.dark};
      text-align: left;
      justify-content: flex-start;  
      transition: 0.2s ease-out all;
      font-weight: bold;
      font-size: 18px;
      height: 40px;
      //width: 325px;
      margin: 1px;
      display: flex;
      text-decoration: none;
      align-items: flex-start;
`;

const StyledInput = styled.input`
    display: inline-block;
    appearance: none;
    outline: 0;
    border: 1px solid white;
    overflow:hidden;
    border-radius: 35px;
    margin: 1px;
    text-align: center;
    font-size: 18px;
    color: black;
    height: 46px;
    transition-duration: 0.25s;
    font-weight: 300;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 20px 40px -5px rgba(#1e58ff, .3);
  }
`;

const StyledTextarea = styled.textarea`
    display: inline-block;
    appearance: none;
    outline: 0;
    width: 750px;
    height: 92px;
    border: 1px solid white;
    overflow:hidden;
    border-radius: 35px;
    margin: 1px;
    text-align: center;
    font-size: 18px;
    color: black;
    transition-duration: 0.25s;
    font-weight: 300;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 20px 40px -5px rgba(#1e58ff, .3);
  }
`;

const EducationFormWrapper = () => (
    //school name
    //location
    //from
    //to


    <PageWrapper>
        <Wrapper>
            <FormItem>
                <StyledLabel>
                    School name
                </StyledLabel>
                <StyledInput
                    name="name"
                    type="text"
                />
            </FormItem>

            <FormItem>
                <StyledLabel>
                    Location
                </StyledLabel>
                <StyledInput
                    name="name"
                    type="text"
                />
            </FormItem>
        </Wrapper>

        <Wrapper>
            <FormItem>

                <StyledLabel>
                    From
                </StyledLabel>
                <StyledInput
                    name="name"
                    type="text"
                />
            </FormItem>
            <FormItem>
                <StyledLabel>
                    To
                </StyledLabel>
                <StyledInput
                    name="name"
                    type="text"
                />
            </FormItem>
        </Wrapper>

    </PageWrapper>
)

export default EducationFormWrapper;