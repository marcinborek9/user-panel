import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { EditProfileComponent } from './edit-profile/edit-profile.component';

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
export class ProfileComponent {
  public personalInfo: object = {
    name: 'Marcin',
    surname: 'Marcin',
    address: 'Gdańsk, Poland',
    email: 'marcinmarcin@gmail.com',
    page: 'www.github.com/marcinborek9',
    birthday: '21 may 1993'
  };
  constructor(private router: Router) {}

  edit() {
    this.router.navigate(['/userpanel/profile/edit']);
  }
}
