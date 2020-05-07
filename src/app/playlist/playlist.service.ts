import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Playlist from './Playlist';
import { AppConfig } from '../config/app-config';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  constructor(private http: HttpClient) {}

  index(): Observable<Playlist[]> {
    // console.log(this.appConfig)
    return this.http.get<Playlist[]>(`api/playlists`);
  }

  show(i: number): Observable<Playlist> {
    return this.http.get<Playlist>(`api/playlists/${i}`);
  }
}
