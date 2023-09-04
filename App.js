import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxHeading = (
  <div>
    <h1>Namaste React</h1>
  </div>
);
console.log(jsxHeading);

const HeadingComponent = () => (
  <div id="container">
    <h1>This is React Functional Component</h1>
  </div>
);

const name = <h1>Anirudha K H</h1>;

const Greeting = () => (
  <div>
    <h1>Hello {name}, Welcome!!!!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
