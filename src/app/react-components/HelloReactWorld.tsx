import * as React from 'react';
import * as ReactDOM from 'react-dom';

const HelloReact = ({name}) => <p>Hello {name}! Greetings from your react component!</p>;

export default function RenderHelloReactWorld(selector, props){
  ReactDOM.render(React.createElement(HelloReact, props),
    document.querySelector(selector));
}
