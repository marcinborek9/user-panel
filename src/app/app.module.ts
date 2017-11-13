import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ProfileComponent } from './user-panel/profile/profile.component';
import { AboutComponent } from './user-panel/about/about.component';
import { FilesComponent } from './user-panel/files/files.component';
import { ContactComponent } from './user-panel/contact/contact.component';
import { PanelInfoComponent } from './user-panel/panel-info/panel-info.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    ProfileComponent,
    AboutComponent,
    FilesComponent,
    ContactComponent,
    PanelInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: PanelInfoComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'about', component: AboutComponent},
      { path: 'files', component: FilesComponent},
      { path: 'contact', component: ContactComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
