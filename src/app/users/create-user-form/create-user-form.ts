import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'create-user-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-user-form.html',
  styleUrl: './create-user-form.css',
})
export class CreateUserForm {
  userForm = new FormGroup({
    nameField: new FormControl('', [Validators.required, Validators.minLength(3)]),
    emailField: new FormControl('', [Validators.required, this.emailValidator()]),
    passwordField: new FormControl('', [Validators.required, Validators.minLength(8)]),
    addressField: new FormControl('', Validators.required),
  });

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // Let required validator handle empty values
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const valid = emailRegex.test(control.value);
      return valid ? null : { invalidEmail: { value: control.value } };
    };
  }

  hasError(fieldName: string): boolean {
    const field = this.userForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getErrorMessage(fieldName: string): string {
    const field = this.userForm.get(fieldName);
    if (!field || !field.errors || !field.touched) {
      return '';
    }

    if (field.errors['required']) {
      switch (fieldName) {
        case 'nameField':
          return 'O nome é obrigatório';
        case 'emailField':
          return 'O email é obrigatório';
        case 'passwordField':
          return 'A senha é obrigatória';
        case 'addressField':
          return 'O endereço é obrigatório';
        default:
          return 'Este campo é obrigatório';
      }
    }

    if (field.errors['minlength']) {
      const requiredLength = field.errors['minlength'].requiredLength;
      switch (fieldName) {
        case 'nameField':
          return `O nome deve ter pelo menos ${requiredLength} caracteres`;
        case 'passwordField':
          return `A senha deve ter pelo menos ${requiredLength} caracteres`;
        default:
          return `Este campo deve ter pelo menos ${requiredLength} caracteres`;
      }
    }

    if (field.errors['invalidEmail']) {
      return 'Por favor, insira um email válido';
    }

    return '';
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      // Mark all fields as touched to show errors
      Object.keys(this.userForm.controls).forEach(key => {
        this.userForm.get(key)?.markAsTouched();
      });
    }
  }
}
