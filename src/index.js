import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import learnSymbol from './data.js'
import Matrix from './Matrix.js'

// Here the application starts where the Matrix components are rendered 
// The Matrix component is the only thing rendered, and is passed a values prop

// if you inspect the symbol in the browser, you'll see that every pixel in the pixelated symbol is 
// actual a div

ReactDOM.render(<Matrix values={learnSymbol} />, document.getElementById('root'));
