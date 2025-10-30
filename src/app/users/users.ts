import { Component } from '@angular/core';
import { CreateUserForm } from './create-user-form/create-user-form';

@Component({
  selector: 'app-users',
  imports: [CreateUserForm],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {}
