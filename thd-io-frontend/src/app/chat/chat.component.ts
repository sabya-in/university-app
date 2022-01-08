import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit{
  newMessage: string | undefined;
  messageList: string[] = [];
  userList: string[] = [];

  constructor(private chatService: SocketService){

  }

  ngOnInit(){
    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    });
    this.chatService.getActiveUsers().subscribe((user: string) => {
      this.userList.push(user);
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  joinChat(){
    let userName = localStorage.getItem('uname');
    if (userName) {
      console.log(userName)
      this.chatService.addUser(userName);
    }
    this.chatService.activeUsers();
  }

}

/* 
Error : message is incremented by 1 each time
Check: https://stackoverflow.com/questions/20720096/socket-io-sending-multiple-message-for-a-single-request
*/