import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      window.location.href = '/profile';
    }
  }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      window.location.href = '/profile';
    } else {
      alert('Login failed. Check credentials.');
    }
  }
}
