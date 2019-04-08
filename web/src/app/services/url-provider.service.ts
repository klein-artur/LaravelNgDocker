import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlProviderService {

  constructor() { }

  getApiUrl(): string {
    return environment.api;
  }

  info(): string {
    return this.getApiUrl().concat("/info");
  }
}
