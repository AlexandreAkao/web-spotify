import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-box',
  templateUrl: './playlist-box.component.html',
  styleUrls: ['./playlist-box.component.css']
})
export class PlaylistBoxComponent implements OnInit {

  album: string;
  author: string;
  pathImage: string;

  constructor() {}

  ngOnInit(): void {
  }
}
