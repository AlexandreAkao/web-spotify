import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Playlist from '../../playlist/Playlist';
import { PlaylistService } from 'src/app/playlist/playlist.service';

@Component({
  selector: 'app-playlist-selected',
  templateUrl: './playlist-selected.component.html',
  styleUrls: ['./playlist-selected.component.css']
})
export class PlaylistSelectedComponent implements OnInit {

  playlistId: number;
  playlist: Playlist;
  isPlaying = false;
  idPlaying = -1;
  audio = new Audio();

  constructor(private route: ActivatedRoute, private ps: PlaylistService) { }

  ngOnInit(): void {
    this.playlistId = Number(this.route.snapshot.paramMap.get('id'));
    this.playlist = this.ps.show(this.playlistId);
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

  parseTime(time) {
    const min = Math.trunc(time / 60);
    const seg = time - min * 60;

    return `${min}:${String(seg).padStart(2, '0')}`;
  }
}
