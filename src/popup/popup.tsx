import React from 'react';
import './popup.css'
import { createRoot } from 'react-dom/client'

const test = <img src="icon.png" alt="" />

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(test)
 