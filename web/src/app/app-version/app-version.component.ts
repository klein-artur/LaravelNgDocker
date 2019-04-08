import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppInfoService } from '../services/app-info.service';

@Component({
  selector: 'app-app-version',
  templateUrl: './app-version.component.html',
  styleUrls: ['./app-version.component.css']
})
export class AppVersionComponent implements OnInit {
  version = environment.VERSION;
  apiVersion;

  constructor(private appInfoService: AppInfoService) {
    this.appInfoService.getApiInfo().subscribe(apiInfo => this.apiVersion = apiInfo.version);
  }

  ngOnInit() {
  }

}
