import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Playlist from '../../playlist/Playlist';
import { PlaylistService } from 'src/app/playlist/playlist.service';
import { MusicService } from 'src/app/music/music.service';
import Music from 'src/app/music/Music';

@Component({
  selector: 'app-playlist-selected',
  templateUrl: './playlist-selected.component.html',
  styleUrls: ['./playlist-selected.component.css'],
})
export class PlaylistSelectedComponent implements OnInit {
  playlistId: string;
  playlist: Playlist;
  musics: Music[] = [];
  isPlaying = false;
  idPlaying = -1;
  audio = new Audio();

  constructor(
    private route: ActivatedRoute,
    private ps: PlaylistService,
    private ms: MusicService
  ) {}

  ngOnInit(): void {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    this.ps.show(this.playlistId).subscribe((p) => {
      const musicId = p.musics.map((music) => music.id);

      for (let i = 0; i < musicId.length; i++) {
        this.ms.show(musicId[i]).subscribe((m) => {
          this.musics.push(m);
        });
      }

      this.playlist = p;
    });
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

  backToPlaylists() {
    this.audio.pause();
  }
}
