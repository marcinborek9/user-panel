import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ProfileComponent } from './user-panel/profile/profile.component';
import { AboutComponent } from './user-panel/about/about.component';
import { FilesComponent } from './user-panel/files/files.component';
import { ContactComponent } from './user-panel/contact/contact.component';
import { PanelInfoComponent } from './user-panel/panel-info/panel-info.component';
import { EditProfileComponent } from './user-panel/profile/edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    ProfileComponent,
    AboutComponent,
    FilesComponent,
    ContactComponent,
    PanelInfoComponent,
    EditProfileComponent,
    LoginComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'userpanel', component: UserPanelComponent,  children: [
        { path: 'panelinfo', component: PanelInfoComponent},
        { path: 'profile', component: ProfileComponent},
        { path: 'about', component: AboutComponent},
        { path: 'files', component: FilesComponent},
        { path: 'contact', component: ContactComponent},
      ]},
      { path: 'signup', component: SignupComponent},
      { path: 'signin', component: SigninComponent},
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
