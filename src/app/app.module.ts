import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { PlaylistBoxComponent } from './pages/playlist/playlist-box/playlist-box.component';
import { PlaylistSelectedComponent } from './pages/playlist-selected/playlist-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FaqComponent,
    SubscribeComponent,
    PlaylistComponent,
    PlaylistBoxComponent,
    PlaylistSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
