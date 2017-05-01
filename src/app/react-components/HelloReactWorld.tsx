import * as React from 'react';
import * as ReactDOM from 'react-dom';

const HelloReact = (name) => <p>Hello {name}! I'm a React Component</p>;

export default function RenderHelloReactWorld(selector: string, props: any){
  ReactDOM.render(<HelloReact name={props.name}/>, document.querySelector(selector));
}
