import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent {
  @Input() showMePartially: boolean;

    constructor(private authService: AuthService) { }

    onSignup(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signupUser(email, password);
    }

}
