import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiInfo } from '../models/api-info';
import { Observable } from 'rxjs';
import { UrlProviderService } from './url-provider.service';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

  constructor(
    private http: HttpClient,
    private urlProvider: UrlProviderService
    ) { }

  getApiInfo(): Observable<ApiInfo> {
    console.log(this.urlProvider.info());
    return this.http.get<ApiInfo>(this.urlProvider.info());
 }
}
