// 1) import the React and ReactDom libraaries
// library that defines what a component is and how multiple components work together
import React from 'react';
// library that knows how to get a component to show up in the browser
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get a reference to the drive with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
// function App() {
//     return <h1>Hi There!</h1>;
// }

// 5) Show the component on the screen
root.render(<App />);