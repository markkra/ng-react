import { Component, OnInit } from '@angular/core';
import RenderHelloReactWorld from './react-components/HelloReactWorld';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'I\'m an Angular component rendering a React Component';

  ngOnInit(): void {
    RenderHelloReactWorld('#reactHost', {name: 'Fred Flintstone'});
  }
}
