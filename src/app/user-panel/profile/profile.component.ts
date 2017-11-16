import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})

interface Provider {
  name: string;
  surname: string;
  address: string;
  email: string;
  page: string;
  birthday: string;
}

export class ProfileComponent implements OnInit {

  public personalInfo: object = {
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
