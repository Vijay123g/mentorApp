// import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";

// import { AuthService } from "src/app/services/auth.service";

// @Component({
//   selector: "app-navigation",
//   templateUrl: "./navigation.component.html",
//   styleUrls: ["./navigation.component.scss"],
// })
// export class NavigationComponent implements OnInit {
//   isAuthenticated = false;
//   userRole: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   ngOnInit(): void {
//     this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
//       this.isAuthenticated = isLoggedIn;
//     });
//   }

//   logout(): void {
//     localStorage.removeItem("token");
//     this.authService.isUserLoggedIn$.next(false);
//     this.router.navigate(["login"]);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  userRole: string = '';
  dashboardTitle: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
      this.setDashboardTitle();
    });
  }

  setDashboardTitle(): void {
    const role = localStorage.getItem('role'); 
    if (role === 'Admin') {
      this.dashboardTitle = 'Admin Dashboard';
    } else if (role === 'Faculty') {
      this.dashboardTitle = 'Faculty Dashboard';
    } else if (role === 'Student') {
      this.dashboardTitle = 'Student Dashboard';
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(['login']);
  }
}
