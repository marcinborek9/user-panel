import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent {
  @Input() showMePartially1: boolean;
  public selectedUser = {
    email: 'test@test.pl',
    password: 'test123'
  };
  constructor(private authService: AuthService) { }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }
}
