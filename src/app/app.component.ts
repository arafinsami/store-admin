import { Component } from '@angular/core';
import { SpinnerService } from './service/spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public spnService: SpinnerService;
  constructor(private router: Router, private spinnerService: SpinnerService) {
    this.spnService = spinnerService;
  }
}
