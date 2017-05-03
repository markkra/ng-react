import {Component, OnInit} from "@angular/core";
import RenderHelloReactWorld from "./react-components/HelloReactWorld";
import Chat from "gco-chat-bubbles";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chat = new Chat();
  title = 'I\'m an Angular component rendering a React Component';
  selectedDateRange: any;
  selectedDateRangeAdv: any;
  dateRangePickerProps: any;

  // Single date picker
  selectedDate: Date;
  selectedDateAdv: Date;
  singleDatePickerProps: any;

  constructor() {
    // Date range picker conf
    this.dateRangePickerProps = {
      startDatePlaceholderText: 'Desde',
      endDatePlaceholderText: 'Hasta',
      showClearDates: true,
      withPortal: true
    };

    // Single date picker conf
    this.singleDatePickerProps = {
      placeholder: 'Fecha',
      showClearDate: true,
      withPortal: true
    };
  }

  changeDateRangeAdv(ev) {
    console.log('Date range changed: %O', ev);
  }

  changeDateAdv(ev) {
    console.log('Date changed: %O', ev);
  }
  postMsg(id, user) {
    if (user.value) {
      this.chat.add({userId: id, msg: user.value});
    }

    user.value = '';
  }

  ngOnInit(): void {
    RenderHelloReactWorld('#reactHost', {name: 'Fred Flintstone'});
    this.chat.addUser({
      id: 1,
      name: 'Jerry',
      self: true
    });

    this.chat.addUser({
      id: 2,
      name: 'Elaine',
      img: 'https://s3-us-west-1.amazonaws.com/csp.assets/icons/Icon_H_system.svg'
    });

    this.chat.add({
      userId: 2,
      msg: 'Hey Jerry.'
    });

    this.chat.add({
      userId: 1,
      msg: 'Hi Elaine.'
    });

    this.chat.render('#chatHost');
  }


  agentPost(e) {

  }
}
