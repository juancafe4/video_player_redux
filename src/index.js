import React from 'react'
import ReactDOM from 'react-dom'
// Create a new component
// This component will produce some HTML

const App = () => <div>Hi</div>;

// Take this component;s generated HTML and put
// in the DOM

ReactDOM.render(<App />, document.querySelector('.container'))