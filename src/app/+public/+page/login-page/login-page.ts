import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  router = inject(Router)
  loginForm: loginForm = {
    username: '', 
    pass: '',
    keepme: false
  };
  message: string = '';
  check() {
    if (this.loginForm.username == 'admin' && this.loginForm.pass == '1234') {
      sessionStorage.setItem('token','iuqshu761w$$yg')
      if(this.loginForm.keepme==true){
        localStorage.setItem('token','iuqshu761w$$yg')
      }
      this.router.navigateByUrl('/private');
    }
    else {
      this.message = 'نام کاربری یا رمز عبور درست نیست';
    }
  }

}
export interface loginForm {
  username: string;
  pass: string;
  keepme: boolean;
}