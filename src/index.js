import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import './styles/main.css'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(<App />, mountNode)

