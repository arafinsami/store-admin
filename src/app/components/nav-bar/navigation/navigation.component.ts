import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    let token = this.authService.getToken();
    if (token != null) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  toggleDisplay() {
    this.loggedIn = !this.loggedIn;
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
    setTimeout((function() {
      window.location.reload();
    }), 250);
  }

}
