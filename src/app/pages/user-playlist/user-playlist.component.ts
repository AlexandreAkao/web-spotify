import { Component, OnInit, TemplateRef, ElementRef } from '@angular/core';
import Playlist from 'src/app/playlist/Playlist';
import { PlaylistService } from 'src/app/playlist/playlist.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  playlistForm: FormGroup;
  editPlaylistForm: FormGroup;

  constructor(
    private ps: PlaylistService,
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
  }

  createEditForm() {
    this.editPlaylistForm = this.fb.group({
      name: ['', Validators.required],
      image: [null, Validators.required],
      isPrivate: [false, Validators.required],
    });
  }

  open(content: TemplateRef<ElementRef>) {
    this.modalService.open(content);
  }

  submitPlaylist(modal) {
    this.ps
      .create({ ...this.playlistForm.value, userId: this.session.user.id })
      .subscribe((res) => {
        this.ps.getByUser(this.session.user.id).subscribe((res) => {
          this.userPlaylist = res['playlists'];
          modal.dismiss();
        });
      });
  }

  deletePlaylist(plalist, modal) {
    this.selectedPlaylist = plalist;

    this.modalService.open(modal).result.then(
      (result) => {
        this.ps.delete(plalist.id).subscribe((res) =>
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
}
