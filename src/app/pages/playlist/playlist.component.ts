import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/playlist/playlist.service';
import Playlist from 'src/app/playlist/Playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[];

  constructor(private ps: PlaylistService) {}

  ngOnInit(): void {
    this.ps.index().subscribe((p) => {
      this.playlists = p;
    });
  }
}
