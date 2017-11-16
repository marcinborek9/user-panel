import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDLS-G2tH6ClAPd0ViJXb9UDN4H80jijbw',
      authDomain: 'user-panel-2d6a0.firebaseapp.com',
    });
  }
}
