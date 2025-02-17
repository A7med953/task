import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  createObj = {
    fullName: '',
    EmailId: '',
    password: ''
  };

  constructor(private http: HttpClient , private router: Router) {}

  Create() {
    const apiUrl = '/api/UserApp/CreateNewUser';

    this.http.post(apiUrl, this.createObj).subscribe({
      next: (response) => {
        console.log('User created successfully:', response);
        this.router.navigate(['/login']); 
      },
      error: (error) => {
        alert('Registration failed. Please try again.');
        console.error(error);
      }
    });
  }
}
