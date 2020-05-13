import { Component, OnInit } from '@angular/core';
import Playlist from 'src/app/playlist/Playlist';
import { PlaylistService } from 'src/app/playlist/playlist.service';

@Component({
  selector: 'app-user-playlist',
  templateUrl: './user-playlist.component.html',
  styleUrls: ['./user-playlist.component.css'],
})
export class UserPlaylistComponent implements OnInit {
  userPlaylist: Playlist[];

  constructor(private ps: PlaylistService) {}

  ngOnInit(): void {
    let session = JSON.parse(localStorage.getItem('user'));

    this.ps.getByUser(session.user.id).subscribe((res) => {
      this.userPlaylist = res['playlists'];
    });
  }
}
