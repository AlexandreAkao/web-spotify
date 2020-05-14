import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import Playlist from './Playlist';
import { AppConfig } from '../config/app-config';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  index(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`api/playlists?isPrivate=false`);
  }

  show(i: number): Observable<Playlist> {
    return this.http.get<Playlist>(`api/playlists/${i}`);
  }

  getByUser(i: number): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`api/playlists-user/${i}`);
  }

  delete(id: number): Observable<Playlist[]> {
    return this.http.delete<Playlist[]>(`api/playlists/${id}`);
  }

  create(playlist: { image; name; isPrivate; userId }): Observable<Playlist> {
    return this.http.post<Playlist>(
      `api/playlists`,
      playlist,
      this.httpOptions
    );
  }
}
