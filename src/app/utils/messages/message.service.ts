import { Injectable } from '@angular/core';
//https://angular.io/tutorial/toh-pt4
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
}
