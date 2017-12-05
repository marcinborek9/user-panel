import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ProfileComponent } from '../profile.component';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditProfileComponent {
public userForm: FormGroup;
public personalInfo: object = {
  name: 'Marcin',
  surname: 'Marcin',
  address: 'Gdańsk, Poland',
  email: 'marcinmarcin@gmail.com',
  page: 'www.github.com/marcinborek9',
  birthday: '21 may 1993'
};
  constructor(private router: Router) {
    this.createForm();
   }

  createForm() {
    this.userForm = new FormGroup({
      name: new FormControl(this.personalInfo['name'], [Validators.required]),
      surname: new FormControl(this.personalInfo['surname'], [Validators.required]),
      address: new FormControl(this.personalInfo['address'], [Validators.required]),
      email: new FormControl(this.personalInfo['email'], [Validators.required]),
      page: new FormControl(this.personalInfo['page'], [Validators.required]),
      birthday: new FormControl(this.personalInfo['birthday'], [Validators.required]),
    });
  }

  get name() { return this.userForm.get('name'); }
  get surname() { return this.userForm.get('surname'); }
  get address() { return this.userForm.get('address'); }
  get email() { return this.userForm.get('email'); }
  get page() { return this.userForm.get('page'); }
  get birthday() { return this.userForm.get('birthday'); }

  saveProfile() {
      console.log(this.personalInfo);
      return this.personalInfo['name'] = 'Maciek';
    }
    backToProfile() {
    this.router.navigate(['/userpanel/profile']);
    }

}
