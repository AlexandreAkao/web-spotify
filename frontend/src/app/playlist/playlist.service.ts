import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import Playlist from './Playlist';
import { AppConfig } from '../config/app-config';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  BASE_URL = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  index(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(
      `${this.BASE_URL}/playlists?isPrivate=false`
    );
  }

  show(i: string): Observable<Playlist> {
    console.log(i);
    return this.http.get<Playlist>(`${this.BASE_URL}/playlists/${i}`);
  }

  getByUser(i: string): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${this.BASE_URL}/playlists/users/${i}`);
  }

  delete(id: string): Observable<Playlist[]> {
    return this.http.delete<Playlist[]>(`${this.BASE_URL}/playlists/${id}`);
  }

  create(playlist: { image; name; isPrivate; userId }): Observable<Playlist> {
    return this.http.post<Playlist>(
      `${this.BASE_URL}/playlists`,
      playlist,
      this.httpOptions
    );
  }

  update(i: string, info): Observable<Playlist> {
    return this.http.put<Playlist>(`${this.BASE_URL}/playlists/${i}`, info);
  }
}
