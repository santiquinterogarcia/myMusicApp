import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  routes = [
    { name: 'Home', route: '/songs/home' },
    { name: 'Favorites', route: '/songs/favorites' },
  ];

  get user() {
    return this.authService.user;
  }

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
