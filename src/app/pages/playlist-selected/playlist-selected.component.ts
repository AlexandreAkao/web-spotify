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
  isPlaying = false;
  idPlaying = -1;
  audio: HTMLAudioElement;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.playlistId = Number(this.route.snapshot.paramMap.get('id'));
    this.playlist = this.playListsMock[this.playlistId];
  }

  playMusic(musicPath, index) {

    const icon = document.getElementsByClassName('play-pause-button');

    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
      icon[this.idPlaying]['src'] = '../../../assets/img/play.svg';
      this.idPlaying = -1;
    } else {
      this.audio = new Audio(musicPath);
      this.audio.play();
      this.isPlaying = true;
      this.idPlaying = index;
      icon[index]['src'] = '../../../assets/img/pause.svg';
    }
  }
}
