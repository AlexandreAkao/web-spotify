import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { PlaylistSelectedComponent } from './pages/playlist-selected/playlist-selected.component';
import { InMemoryDataService } from '../app/InMemoryDataService';
import { JsonAppConfigService } from './config/json-app-config.service';
import { AppConfig } from './config/app-config';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

export function initializerFn(jsonAppConfigService: JsonAppConfigService) {
  return () => {
    return jsonAppConfigService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FaqComponent,
    SubscribeComponent,
    PlaylistComponent,
    PlaylistSelectedComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    // {
    //   provide: AppConfig,
    //   deps: [HttpClient],
    //   useExisting: JsonAppConfigService
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   multi: true,
    //   deps: [JsonAppConfigService],
    //   useFactory: initializerFn
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
