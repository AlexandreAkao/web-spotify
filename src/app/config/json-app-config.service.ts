import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig }  from "./app-config"

@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService extends AppConfig {

  constructor(private http: HttpClient) {
    super();
  }

  load() {
    return this.http.get<AppConfig>('app.config.json')
      .toPromise()
      .then(data => {
        this.baseUrl = data.baseUrl;
      })
      .catch(() => {
        console.error('Não foi possível carregar as configurações');
      })
  }
}
