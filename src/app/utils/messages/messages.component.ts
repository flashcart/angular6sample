import { Component, OnInit } from '@angular/core';
import { MessageService } from "../messages/message.service";
//https://angular.io/tutorial/toh-pt4
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
