import { Injectable } from '@angular/core';
import Playlist from './Playlist';
import playlistMock from './PlaylistMock';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor() { }

  index(): Playlist[] {
    return playlistMock;
  }

  show(i: number): Playlist {
    return playlistMock[i];
  }
}
