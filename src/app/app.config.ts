import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { basePreset } from '../theme/theme';
import { routes } from './app.routes';
import { ConfirmationService, MessageService } from 'primeng/api';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { apiInterceptor } from './core/interceptors/api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    ConfirmationService,
    MessageService,
    provideHttpClient(withInterceptors([tokenInterceptor, apiInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: basePreset,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
  ],
};
