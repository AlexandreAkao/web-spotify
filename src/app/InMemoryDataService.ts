import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

import diacriticSensitiveRegex from '../util/diacriticSensitiveRegex';
import playlist from '../app/playlist/Playlist';
import usuario from '../app/usuario/Usuario';
import Music from './music/Music';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  musics: Music[] = [
    new Music(
      0,
      'When We All Fall Asleep, Where Do We Go?',
      'bad guy',
      '',
      'Billie Eilish',
      206,
      '../../../assets/music/Billie_Eilish-bad_guy.mp3'
    ),
    new Music(
      1,
      'When We All Fall Asleep, Where Do We Go?',
      "when the party's over",
      '',
      'Billie Eilish',
      194,
      '../../../assets/music/Billie_Eilish-when_the_partys_over.mp3'
    ),
    new Music(
      2,
      'When We All Fall Asleep, Where Do We Go?',
      'everything i wanted',
      '',
      'Billie Eilish',
      288,
      '../../../assets/music/Billie_Eilish-everything_i_wanted.mp3'
    ),
    new Music(
      3,
      'The Days / Nights',
      'The Nights',
      '',
      'Avicii',
      186,
      '../../../assets/music/avicii-the-nights.mp3'
    ),
    new Music(
      4,
      'The Days / Nights',
      'The Days',
      '',
      'Avicii',
      282,
      '../../../assets/music/avicii-the-days.mp3'
    ),
    new Music(5, '', '', '', '', 1, ''),
    new Music(
      6,
      'Recess',
      'All Is Fair In Love',
      '',
      'Skrillex',
      249,
      '../../../assets/music/skrillex-all-is-fair-in-love.mp3'
    ),
    new Music(
      7,
      'Recess',
      'Recess',
      '',
      'Skrillex',
      238,
      '../../../assets/music/skrillex-recess.mp3'
    ),
    new Music(
      8,
      'Recess',
      'Try It Out',
      '',
      'Skrillex',
      235,
      '../../../assets/music/skrillex-try-it-out.mp3'
    ),
    new Music(
      9,
      'Recess',
      'Coast Is Clear',
      '',
      'Skrillex',
      243,
      '../../../assets/music/skrillex-coast-is-clear.mp3'
    ),
    new Music(
      10,
      'Recess',
      'Fire Away',
      '',
      'Skrillex',
      351,
      '../../../assets/music/skrillex-fire-away.mp3'
    ),
    new Music(
      11,
      'Recess',
      'Ease My Mind',
      '',
      'Skrillex',
      302,
      '../../../assets/music/skrillex-ease-my-mind.mp3'
    ),
    new Music(
      12,
      'Recess',
      'Fuck That',
      '',
      'Skrillex',
      314,
      '../../../assets/music/skrillex-fuck-that.mp3'
    ),
    new Music(
      13,
      'Recess',
      'Doompy Poomp',
      '',
      'Skrillex',
      198,
      '../../../assets/music/skrillex-doompy-poomp.mp3'
    ),
    new Music(
      14,
      'Recess',
      'Ragga Bomb',
      '',
      'Skrillex',
      267,
      '../../../assets/music/skrillex-ragga-bomb.mp3'
    ),
  ];

  playlists: playlist[] = [
    new playlist(
      0,
      'When We All Fall Asleep, Where Do We Go?',
      '../../../assets/img/album/When_We_Fall_Asleep,_Where_Do_We_Go.png',
      1,
      [this.musics[0], this.musics[1], this.musics[2]],
      false,
      0
    ),
    new playlist(
      1,
      'The Days / Nights',
      '../../../assets/img/album/the_days_nights.png',
      1,
      [this.musics[3], this.musics[4]],
      false,
      0
    ),
    new playlist(
      2,
      'Curtain Call',
      '../../../assets/img/album/eminem_curtain_call.jpg',
      1,
      [this.musics[5]],
      false,
      0
    ),
    new playlist(
      3,
      'Castelos & Ruínas',
      '../../../assets/img/album/bk.webp',
      1,
      [this.musics[5]],
      false,
      0
    ),
    new playlist(
      4,
      'All Eyez On Me',
      '../../../assets/img/album/2pac.jpg',
      1,
      [this.musics[5]],
      false,
      0
    ),
    new playlist(
      5,
      'DAMN',
      '../../../assets/img/album/Kendrick_Lamar.jpg',
      1,
      [this.musics[5]],
      false,
      0
    ),
    new playlist(
      6,
      'Doka Language',
      '../../../assets/img/album/sidoka.jfif',
      1,
      [this.musics[5]],
      false,
      0
    ),
    new playlist(
      7,
      'Recess',
      '../../../assets/img/album/recess.jfif',
      1,
      [
        this.musics[6],
        this.musics[7],
        this.musics[8],
        this.musics[9],
        this.musics[10],
        this.musics[11],
        this.musics[12],
        this.musics[13],
        this.musics[14],
      ],
      false,
      0
    ),
  ];

  usuarios: usuario[] = [
    {
      id: 0,
      username: 'Admin',
      email: 'admin',
      senha: 'admin',
      sexo: 'notBinary',
      dataDeNascimento: new Date(12335),
    },
  ];

  indexes = {
    musics: 0,
    playlists: 0,
    usuarios: 0,
  };

  createDb() {
    return {
      musics: this.musics,
      playlists: this.playlists,
      usuarios: this.usuarios,
    };
  }

  get(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'playlists-user') {
      return this.getPlaylistUser(reqInfo);
    } else if (reqInfo.collectionName === 'musics') {
      return this.filterMusic(reqInfo);
    }

    return undefined;
  }

  post(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'session') {
      return this.authenticate(reqInfo);
    } else if (reqInfo.collectionName === 'playlists') {
      return this.createPlaylist(reqInfo);
    }

    if (reqInfo.collectionName === 'musics') {
      this.indexes = { ...this.indexes, musics: this.indexes.musics + 1 };
    } else if (reqInfo.collectionName === 'usuarios') {
      this.indexes = { ...this.indexes, playlists: this.indexes.usuarios + 1 };
    }

    return undefined;
  }

  delete(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'session') {
      return this.logout(reqInfo);
    }

    return undefined;
  }

  private authenticate(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const { headers, url, req } = reqInfo;

      let users = this.usuarios;

      const { username, password } = req['body'];

      if (
        users.some(
          (item) => item.username === username || item.email === username
        )
      ) {
        users = users.filter(
          (item) =>
            item.senha === password &&
            (item.username === username || item.email === username)
        );

        if (users.length !== 0) {
          return {
            status: 201,
            headers,
            url,
            body: {
              user: {
                id: users[0].id,
                username: users[0].username,
                email: users[0].email,
              },
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            },
          };
        } else {
          return {
            status: 401,
            headers,
            url,
            body: {
              error: 'Não autorizado',
            },
          };
        }
      } else {
        return {
          status: 404,
          headers,
          url,
          body: {
            error: 'Usuario não encontrado',
          },
        };
      }
    });
  }

  private logout(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const { headers, url, req } = reqInfo;

      if (localStorage.getItem('user')) {
        localStorage.removeItem('user');

        return {
          status: 200,
          headers,
          url,
          body: {
            sucess: 'Usuário deslogado',
          },
        };
      } else {
        return {
          status: 400,
          headers,
          url,
          body: {
            error: 'Usuário não estava conectado',
          },
        };
      }
    });
  }

  private filterMusic(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const { headers, url, req } = reqInfo;
      let search = reqInfo.query.get('search')[0];

      if (search === 'null') {
        search = '';
      }

      const reg = new RegExp(diacriticSensitiveRegex(search), 'ig');

      let musics = this.musics;
      musics = musics.filter((music) => {
        console.log({
          author: {
            value: music.author,
            flag: reg.test(music.author),
          },
          name: {
            value: music.name,
            flag: reg.test(music.name),
          },
        });

        return reg.test(music.author) || reg.test(music.name);
      });

      return {
        status: 200,
        headers,
        url,
        body: {
          musics: musics,
        },
      };
    });
  }

  private getPlaylistUser(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const { headers, url, req, id } = reqInfo;

      let playlists = this.playlists;

      playlists = playlists.filter(
        (playlist) => playlist.userId === Number(id)
      );

      return {
        status: 200,
        headers,
        url,
        body: {
          playlists,
        },
      };
    });
  }

  private createPlaylist(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const { headers, url, req } = reqInfo;

      this.indexes = { ...this.indexes, playlists: this.indexes.playlists + 1 };

      const { name, image, isPrivate, userId } = req['body'];

      const newPlaylist = new playlist(
        this.indexes.playlists,
        name,
        '../assets/img/music_placeholder.png',
        1,
        [],
        isPrivate,
        userId
      );

      this.playlists.push(newPlaylist);

      return {
        status: 201,
        headers,
        url,
        body: {
          playlist: newPlaylist,
        },
      };
    });
  }
}
