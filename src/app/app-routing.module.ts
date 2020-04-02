import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'subscribe', component: SubscribeComponent },
    { path: 'playlist', component: PlaylistComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
