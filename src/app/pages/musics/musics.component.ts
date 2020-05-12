import { Component, OnInit } from '@angular/core';
import Music from 'src/app/music/Music';
import { MusicService } from 'src/app/music/music.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css'],
})
export class MusicsComponent implements OnInit {
  musics: Music[];
  isPlaying = false;
  idPlaying = -1;
  audio = new Audio();

  constructor(private ms: MusicService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let search = '';

    this.route.queryParamMap.subscribe((params) => {
      search = params.get('search');

      this.ms.index(search).subscribe((res) => {
        this.musics = res['musics'];
      });
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
}
