import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { PlaylistSelectedComponent } from './pages/playlist-selected/playlist-selected.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MusicsComponent } from './pages/musics/musics.component';
import { UserPlaylistComponent } from './pages/user-playlist/user-playlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'playlist-selected/:id', component: PlaylistSelectedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'music', component: MusicsComponent },
  { path: 'user-playlist', component: UserPlaylistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
