import { AuthService } from './../../auth/_service/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleNotificationSidenav = new EventEmitter<void>();

  constructor( private authService: AuthService,private router: Router) {
  }

  fullScreenToggle(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

   doLogout() {
     this.authService.doLogout();
   }
   viewProfile()
  {
    this.router.navigate(['/profile']);
  }
}
