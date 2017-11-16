import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  showVar = false;
  showVar1 = true;
  name = 'Go to registration!';
  constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    toggleChild() {
    this.showVar = !this.showVar;
    this.showVar1 = !this.showVar1;

    if (this.showVar) {
      this.name = 'Go to login!';
    } else {
      this.name = 'Go to registration!';
    }
     }

    onSignin(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signinUser(email, password);
    }
  }

