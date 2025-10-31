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
    nameField: new FormControl('', [Validators.required, Validators.minLength(3)]),
    emailField: new FormControl('', [Validators.required, Validators.email]),
    passwordField: new FormControl('', [Validators.required, Validators.minLength(8)]),
    addressField: new FormControl('', Validators.required),
  });

  submitForm() {
    console.log(this.userForm.value);
  }
}
