import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Playlist from '../playlist/playlist';
import PLAYLISTMOCK from '../playlist/playListMock';

@Component({
  selector: 'app-playlist-selected',
  templateUrl: './playlist-selected.component.html',
  styleUrls: ['./playlist-selected.component.css']
})
export class PlaylistSelectedComponent implements OnInit {

  playlistId: number;
  playListsMock = PLAYLISTMOCK;
  playlist: Playlist;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.playlistId = Number(this.route.snapshot.paramMap.get('id'));
    this.playlist = this.playListsMock[this.playlistId];
  }
}
