import { Component, OnInit, TemplateRef, ElementRef } from '@angular/core';
import Playlist from 'src/app/playlist/Playlist';
import { PlaylistService } from 'src/app/playlist/playlist.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Music from 'src/app/music/Music';
import { MusicService } from 'src/app/music/music.service';

@Component({
  selector: 'app-user-playlist',
  templateUrl: './user-playlist.component.html',
  styleUrls: ['./user-playlist.component.css'],
})
export class UserPlaylistComponent implements OnInit {
  userPlaylist: Playlist[];
  modal;
  session;
  selectedPlaylist: Playlist;
  selectedPlaylistMusicsIds: number[] = [];
  playlistForm: FormGroup;
  editPlaylistForm: FormGroup;
  allMusics: Music[];

  constructor(
    private ps: PlaylistService,
    private ms: MusicService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.session = JSON.parse(localStorage.getItem('user'));

    this.ps.getByUser(this.session.user.id).subscribe((res) => {
      this.userPlaylist = res['playlists'];
    });
  }

  createForm() {
    this.playlistForm = this.fb.group({
      name: ['', Validators.required],
      image: [null, Validators.required],
      isPrivate: [false, Validators.required],
    });

    this.editPlaylistForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      isPrivate: [false, Validators.required],
    });
  }

  createEditForm(playlist: Playlist, modal) {
    this.editPlaylistForm = this.fb.group({
      name: [playlist.name, Validators.required],
      image: [''],
      isPrivate: [playlist.isPrivate, Validators.required],
    });

    this.modalService.open(modal);
  }

  open(content: TemplateRef<ElementRef>) {
    this.playlistForm = this.fb.group({
      name: ['', Validators.required],
      image: [null, Validators.required],
      isPrivate: [false, Validators.required],
    });

    this.modalService.open(content);
  }

  submitPlaylist(modal) {
    console.log(this.playlistForm.value);
    this.ps
      .create({ ...this.playlistForm.value, userId: this.session.user.id })
      .subscribe((res) => {
        this.ps.getByUser(this.session.user.id).subscribe((res) => {
          this.userPlaylist = res['playlists'];
          modal.dismiss();
        });
      });
  }

  deletePlaylist(playlist, modal) {
    this.selectedPlaylist = playlist;

    this.modalService.open(modal).result.then(
      (result) => {
        this.ps.delete(playlist.id).subscribe((res) =>
          this.ps.getByUser(this.session.user.id).subscribe((res) => {
            this.userPlaylist = res['playlists'];
          })
        );
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  editPlaylistModal(playlist: Playlist, modal) {
    this.selectedPlaylistMusicsIds = [];
    this.selectedPlaylist = playlist;

    playlist.musics.map((item) => {
      this.selectedPlaylistMusicsIds.push(item.id);
    });

    this.ms.index().subscribe((res) => {
      this.allMusics = res['musics'];
      this.createEditForm(playlist, modal);
    });
  }

  musicInPlaylist(id) {
    let flag = this.selectedPlaylistMusicsIds.includes(id);

    return flag;
  }

  submitEditPlaylist(modal) {
    this.selectedPlaylistMusicsIds = [];

    const checkboxes = document.querySelectorAll('.editCheckbox');

    checkboxes.forEach((item) => {
      if (item['checked']) {
        this.selectedPlaylistMusicsIds.push(Number(item['value']));
      }
    });

    this.ps
      .update(this.session.id, {
        ...this.editPlaylistForm.value,
        playlistId: this.selectedPlaylist.id,
        musicsIds: this.selectedPlaylistMusicsIds,
      })
      .subscribe((res) => {
        this.ps.getByUser(this.session.user.id).subscribe((res) => {
          this.userPlaylist = res['playlists'];
          modal.dismiss();
        });
      });
  }
}
