import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  showVar = false;
  showVar1 = true;
  showMessage = true;
  message = 'If u dont have an accout yet. Click here!';
  name = 'Go to registration!';
  constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    toggleChild() {
    this.showVar = !this.showVar;
    this.showVar1 = !this.showVar1;
    this.showMessage = !this.showMessage;

    if (this.showVar) {
      this.name = 'Go to login!';
    } else {
      this.name = 'Go to registration!';
    }

    if (this.showMessage) {
      this.message = 'If u dont have an accout yet. Click here!';
    } else {
      this.message = 'Already have an account? Sign in';
    }
     }

    onSignin(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signinUser(email, password);
    }
  }

