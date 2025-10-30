import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'create-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './create-user-form.html',
  styleUrl: './create-user-form.css',
})
export class CreateUserForm {
  userForm = new FormGroup({
    nameField: new FormControl(''),
    emailField: new FormControl(''),
    passwordField: new FormControl(''),
    addressField: new FormControl(''),
  });

  submitForm() {
    console.log(this.userForm.value);
  }
}
