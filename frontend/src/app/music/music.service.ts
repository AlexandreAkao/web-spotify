import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Music from './Music';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private http: HttpClient) {}

  index(search = ''): Observable<Music[]> {
    if (search) {
      return this.http.get<Music[]>(`http://localhost:8080/musics`, {
        params: {
          search: search,
        },
      });
    }

    return this.http.get<Music[]>(`http://localhost:8080/musics`);
  }

  show(id: string): Observable<Music> {
    return this.http.get<Music>(`http://localhost:8080/musics/${id}`);
  }
}
