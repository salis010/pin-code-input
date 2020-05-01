import React, { useState } from 'react'
import styled from 'styled-components'
import { PinCodeInput } from './pin-code-input/index'


const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
`

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 95%;
    padding: 1rem;
    border: 3px solid ${props => props.theme.colors.primary};
    border-radius: 2rem;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        padding: 4rem;
    }
`

const Title = styled.h1`
    font-family: 'arial';
    font-size: 2rem;
    font-weight: 800;
    margin: 0;
    color: ${props => props.theme.colors.primary};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        font-size: 2.4rem;
    }
`

const Button = styled.button`
    font-size: 1.4rem;
    font-weight: 800;
    height: 3.4rem;
    width: 100%;
    margin-top: 3.4rem;
    color: white;
    background-color: ${props => props.disabled ? 'RGB(150, 150, 150)' : props.theme.colors.primary};
    border: none;
    border-radius: 100rem;
    outline: none;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        font-size: 1.6rem;
    }
`

export const Login = () => {

    const [ pinCode, setPinCode ] = useState('')

    const handleClick = () => console.log('Pin Code:', pinCode)

    return (
        <PageWrapper>
            <LoginWrapper>
                <Title>Enter your PIN</Title>
                <PinCodeInput 
                    pinCode={pinCode} 
                    setPinCode={setPinCode} 
                />
                <Button 
                    disabled={pinCode.length !== 4}
                    onClick={handleClick} 
                >
                    Login
                </Button>
            </LoginWrapper>
        </PageWrapper>
    )
}
