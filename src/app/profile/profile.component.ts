import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  currentUser: any;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getCurrentUser();
  }
}
