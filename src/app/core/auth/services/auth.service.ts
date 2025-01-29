import { Injectable, Signal, signal, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiResponse } from '../../models/api-response.model';
import { Admin, Partner } from '../user.model';
import { firstValueFrom } from 'rxjs';
import { JwtService } from './jwt.service';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root',
})
/**
 * Service to handle authentication and user management.
 */
export class AuthService {
  private token = signal<string | null>(null);
  private role = signal<'admin' | 'partner' | null>(null);
  private user = signal<Admin | Partner | null>(null);

  private http = inject(HttpClient);
  private router = inject(Router);
  private jwtService = inject(JwtService);
  private roleService = inject(RoleService);

  constructor() {
    this.loadStoredData();
  }

  /**
   * Loads stored token and role from local storage and fetches the user data.
   */
  private loadStoredData() {
    const storedToken = this.jwtService.getToken();
    const storedRole = this.roleService.getRole();
    if (storedToken && storedRole) {
      this.token.set(storedToken);
      this.role.set(storedRole);
      this.fetchUser();
    }
  }

  /**
   * Logs in the user with the provided email and password.
   * @param email The user's email.
   * @param password The user's password.
   */
  async login(email: string, password: string): Promise<void> {
    try {
      const response = await firstValueFrom(this.http.post<ApiResponse<{ token: string; role: 'admin' | 'partner' }>>(
        `/login`, { email, password }
      ));

      if (response.status === 200 && response.data) {
        this.token.set(response.data.token);
        this.role.set(response.data.role);
        this.jwtService.saveToken(response.data.token);
        this.roleService.setRole(response.data.role);
        await this.fetchUser();
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  /**
   * Registers a new admin user.
   * @param admin The admin user data.
   */
  async registerAdmin(admin: Admin): Promise<void> {
    try {
      const response = await firstValueFrom(this.http.post<ApiResponse<{ token: string; role: 'admin' }>>(
        `/register`, admin
      ));

      if (response.status === 201 && response.data) {
        this.token.set(response.data.token);
        this.role.set('admin');
        this.jwtService.saveToken(response.data.token);
        this.roleService.setRole('admin');
        await this.fetchUser();
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  }

  /**
   * Registers a new partner user.
   * @param partner The partner user data.
   */
  async registerPartner(partner: Partner): Promise<void> {
    try {
      const response = await firstValueFrom(this.http.post<ApiResponse<{ token: string; role: 'partner' }>>(
        `/partner/register`, partner
      ));

      if (response.status === 201 && response.data) {
        this.token.set(response.data.token);
        this.role.set('partner');
        this.jwtService.saveToken(response.data.token);
        this.roleService.setRole('partner');
        await this.fetchUser();
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  }

  /**
   * Fetches the current user data from the server.
   */
  async fetchUser(): Promise<void> {
    try {
      const response = await firstValueFrom(this.http.get<ApiResponse<Admin | Partner>>(`/me`));

      if (response.status === 200 && response.data) {
        this.user.set(response.data);
      }
    } catch (error) {
      console.error('Fetch user error:', error);
      this.logout();
    }
  }

  /**
   * Logs out the current user and clears the stored data.
   */
  logout() {
    this.token.set(null);
    this.role.set(null);
    this.user.set(null);
    this.jwtService.destroyToken();
    this.roleService.destroyRole();
    this.router.navigate(['/login']);
  }

  /**
   * Gets the current authentication token.
   * @returns The current authentication token.
   */
  get authToken(): Signal<string | null> {
    return this.token;
  }

  /**
   * Gets the current user role.
   * @returns The current user role.
   */
  get userRole(): Signal<'admin' | 'partner' | null> {
    return this.role;
  }

  /**
   * Gets the current user data.
   * @returns The current user data.
   */
  get currentUser(): Signal<Admin | Partner | null> {
    return this.user;
  }
}
