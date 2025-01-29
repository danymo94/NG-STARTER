import { InputUppercaseDirective } from './../directives/uppercase.directive';
import { Component, OnInit, Signal, signal, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogService } from './../services/confirm.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    HttpClientModule,
    InputTextModule,
    KeyFilterModule,
    IftaLabelModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    InputUppercaseDirective
  ],
})
export class AuthComponent implements OnInit {
  isRegister = signal<boolean>(false); // Dynamically switch between login and registration
  authForm!: FormGroup;
  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthService);
  private confirmDialogService = inject(ConfirmDialogService);

  /**
   * Initializes the component and sets up the form based on the route
   */
  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.isRegister.set(url[0]?.path === 'register');
      this.initForm();
    });
  }

  /**
   * Initializes the authentication form with appropriate controls
   */
  private initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    if (this.isRegister()) {
      this.authForm.addControl(
        'fullName',
        this.fb.control('', Validators.required)
      );
      this.authForm.addControl(
        'businessName',
        this.fb.control('', Validators.required)
      );
      this.authForm.addControl(
        'secretKey',
        this.fb.control('', Validators.required)
      );
      this.authForm.addControl(
        'phone',
        this.fb.control('', Validators.required)
      );
      this.authForm.addControl(
        'address',
        this.fb.control('', Validators.required)
      );
      this.authForm.addControl(
        'vatNumber',
        this.fb.control('', Validators.required)
      );
      this.authForm.addControl(
        'fiscalCode',
        this.fb.control('', Validators.required)
      );
      this.authForm.addControl(
        'sdiCode',
        this.fb.control('', Validators.required)
      );
      this.authForm.addControl(
        'pecAddress',
        this.fb.control('', Validators.required)
      );
      this.authForm.addControl('website', this.fb.control(''));
    }
  }

  /**
   * Submits the authentication form, either registering or logging in the user
   */
  async submitForm() {
    if (this.authForm.invalid) return;

   /**  const confirmed = await this.confirmDialogService.confirm().toPromise();
    if (!confirmed) return; **/

    this.isLoading.set(true);
    this.errorMessage.set(null);

    try {
      if (this.isRegister()) {
        await this.authService.registerAdmin(this.authForm.value);
      } else {
        await this.authService.login(
          this.authForm.value.email,
          this.authForm.value.password
        );
      }
    } catch (error: any) {
      this.errorMessage.set(error.message || 'An error occurred');
    } finally {
      this.isLoading.set(false);
    }
  }
}
