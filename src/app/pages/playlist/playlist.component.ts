import { Component, OnInit } from '@angular/core';
import Playlist from './playlist';
import PLAYLISTMOCK from './playListMock';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlists = PLAYLISTMOCK;

  constructor() {}

  ngOnInit(): void {
  }
}
