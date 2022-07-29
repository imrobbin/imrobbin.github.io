import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './_services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  formLogin: FormGroup;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  async submitLogin() {
    if (this.formLogin.invalid) return;

    this.isSubmitting = true;
    this.formLogin.disable();

    try {
      await this.authService.signWithEmailAndpassword(this.formLogin.value);
      this.formLogin.reset();
      await this.router.navigate(['messages']);
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        this.toastService.showToastMessage('User not found');
      } else if (error.code === 'auth/wrong-password') {
        this.toastService.showToastMessage('Invalid credentials');
      } else {
        this.toastService.showToastMessage(error.message);
      }

      this.formLogin.enable();
    } finally {
      this.isSubmitting = false;
    }
  }

  errorHandling(control: string, error: string): boolean {
    return this.formLogin.controls[control].hasError(error);
  }
}
