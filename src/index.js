import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Login } from './components/login'


const mountNode = document.getElementById('mountNode')

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Login />
    </ThemeProvider>,
    mountNode)
