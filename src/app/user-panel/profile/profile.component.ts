import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

interface Provider {
  name: string;
  surname: string;
  address: string;
  email: string;
  page: string;
  birthday: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  public personalInfo: object = {
    name: 'Marcin',
    surname: 'Borek',
    address: 'Gdańsk, Poland',
    email: 'marcinmarcin@gmail.com',
    page: 'www.github.com/marcinborek9',
    birthday: '21 may 1993'
  };
  constructor(private router: Router) {}

  ngOnInit() {
  }

  edit() {
    this.router.navigate(['/userpanel/profile/edit']);
  }
}
