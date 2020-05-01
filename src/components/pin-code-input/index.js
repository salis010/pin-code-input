import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Digit } from './digit'


const pinLength = 4

const Input = styled.input`
    width: 0;   
    border: none;
    outline: none;
`

const DigitsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin: 1.8rem 1rem 0 1rem;
`

export const PinCodeInput = ({ pinCode, setPinCode }) => {

    const digits = [0, 1, 2, 3]
    const [ cursorPosition, setCursorPosition ] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus()
    }, [])

    const handleKeyDown = event => {
        
        if(cursorPosition < pinLength && event.keyCode >= 48 && event.keyCode <= 57) {

            let newCode = ''

            if(cursorPosition === pinCode.length) {
                newCode = pinCode + String.fromCharCode(event.keyCode)
            } else {
                newCode = [...pinCode]
                newCode[cursorPosition] = String.fromCharCode(event.keyCode)
                newCode = newCode.join('')
            }
            
            setPinCode(newCode)
            setCursorPosition(cursorPosition + 1)

        } else if(event.keyCode === 8) {
            if(cursorPosition > 0) {
                
                const newCode = [...pinCode].splice(0, cursorPosition - 1).join('')
                
                setPinCode(newCode)
                setCursorPosition(newCode.length)
            }
        }
    }

    return (
        <>
            <Input 
                type='text' 
                ref={ref}
                value={pinCode}
                onChange={() => null}
                onKeyDown={handleKeyDown}
            />
            <DigitsWrapper>
                {digits.map(digit => 
                    <Digit 
                        key={digit}
                        id={digit} 
                        digit={pinCode[digit]} 
                        inputRef={ref} 
                        cursorPosition={cursorPosition} 
                        setCursorPosition={setCursorPosition} 
                    />
                )}
            </DigitsWrapper>
        </>
    )
}
