import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      window.location.href = '/profile';
    }
  }

  register(): void {
    if (this.authService.register(this.username, this.password)) {
      window.location.href = '/profile';
    } else {
      alert('Registration failed. Try again.');
    }
  }
}
