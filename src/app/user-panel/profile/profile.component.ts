import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  personalInfo: object = {
    name: 'Marcin',
    surname: 'Borek',
    address: 'Gdańsk, Poland',
    email: 'marcinmarcin@gmail.com',
    page: 'www.github.com/marcinborek9',
    birthday: '21 may 1993'
  };

  constructor() { }

  ngOnInit() {
  }

}
