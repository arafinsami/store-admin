import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { LoginDto } from 'src/app/dto/login.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public dto: LoginDto = new LoginDto();
  public loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.dto = Object.assign({}, this.loginForm.value);
      this.authService.login(this.dto).subscribe(data => {
        this.loginForm.reset();
        this.route.navigateByUrl('/book-list');
        setTimeout((function () {
          window.location.reload();
        }), 250);
        console.log(data);
      }, error => {
        console.log(error);
      });
    }
  }


}
