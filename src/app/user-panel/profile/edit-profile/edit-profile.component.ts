import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditProfileComponent implements OnInit {
public userForm: FormGroup;

  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  get name() { return this.userForm.get('name'); }
  get surname() { return this.userForm.get('surname'); }
  get email() { return this.userForm.get('email'); }

}
