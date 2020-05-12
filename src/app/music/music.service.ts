import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Music from './Music';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private http: HttpClient) {}

  index(search): Observable<Music[]> {
    return this.http.get<Music[]>(`api/musics`, {
      params: {
        search: search,
      },
    });
  }
}
