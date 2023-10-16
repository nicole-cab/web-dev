import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// createRoot() takes one argument, an HTML element, the function is to define the HTML element where a React component should be displayed
// the root node is the HTML element where you want to display the result
// the root node does not have to be a div, and it does not have to have id="root"
const root = ReactDOM.createRoot(document.getElementById('root')); // id="root" is just the standard convention
// render() called to define the React component that should be rendered
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
