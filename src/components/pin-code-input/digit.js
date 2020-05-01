import React from 'react'
import styled from 'styled-components'


const DigitWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.4rem;
    height: 1.4rem;
    padding: 0.6rem;
    border: 3px solid RGB(100, 150, 100);
    border-radius: 0.5rem;
    cursor: pointer;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        width: 2.2rem;
        height: 2.2rem;
    }
`

const P = styled.p`
    font-family: 'arial';
    font-size: 1.4rem;
    font-weight: 800;
    margin: 0;
    color: ${props => props.hasFocus ? 'RGB(130, 130, 130)' : 'RGB(80, 80, 80)'};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        font-size: 1.8rem;
    }
`

export const Digit = ({ id, digit, inputRef, cursorPosition, setCursorPosition }) => {

    const clickHandler = () => {

        inputRef.current.focus()
        
        if(id <= cursorPosition) {
            setCursorPosition(id)
        }

    }
    
    return (
        <DigitWrapper 
            id={id}
            onClick={clickHandler}
        >
            <P hasFocus={cursorPosition === id}>{digit}</P>
        </DigitWrapper>
    )
}
