import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: any;

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.isLoggedIn = true;
      this.currentUser = { username };
      return true;
    }
    return false;
  }

  register(username: string, password: string): boolean {
    this.isLoggedIn = true;
    this.currentUser = { username };
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }
}
