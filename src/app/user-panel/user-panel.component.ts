import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserPanelComponent {

  constructor(private authService: AuthService, private router: Router) { }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
