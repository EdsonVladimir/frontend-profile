import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideRouter(routes), provideStore(),
    provideHttpClient()
  ]
};
