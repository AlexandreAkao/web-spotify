import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

import playlist from '../app/playlist/Playlist';
import musicMock from '../app/Music/MusicMock';
import usuario from '../app/usuario/Usuario';
import { Session } from '../app/session/session';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  playlists: playlist[] = [
    new playlist(
      0,
      'When We All Fall Asleep, Where Do We Go?',
      '../../../assets/img/album/When_We_Fall_Asleep,_Where_Do_We_Go.png',
      'Billie Eilish',
      1,
      [musicMock[0], musicMock[1], musicMock[2]]
    ),
    new playlist(
      1,
      'The Days / Nights',
      '../../../assets/img/album/the_days_nights.png',
      'Avicii',
      1,
      [musicMock[3], musicMock[4]]
    ),
    new playlist(
      2,
      'Curtain Call',
      '../../../assets/img/album/eminem_curtain_call.jpg',
      '',
      1,
      [musicMock[5]]
    ),
    new playlist(
      3,
      'Castelos & Ruínas',
      '../../../assets/img/album/bk.webp',
      '',
      1,
      [musicMock[5]]
    ),
    new playlist(
      4,
      'All Eyez On Me',
      '../../../assets/img/album/2pac.jpg',
      '',
      1,
      [musicMock[5]]
    ),
    new playlist(
      5,
      'DAMN',
      '../../../assets/img/album/Kendrick_Lamar.jpg',
      '',
      1,
      [musicMock[5]]
    ),
    new playlist(
      6,
      'Doka Language',
      '../../../assets/img/album/sidoka.jfif',
      '',
      1,
      [musicMock[5]]
    ),
    new playlist(
      7,
      'Recess',
      '../../../assets/img/album/recess.jfif',
      'Skrillex',
      1,
      [
        musicMock[6],
        musicMock[7],
        musicMock[8],
        musicMock[9],
        musicMock[10],
        musicMock[11],
        musicMock[12],
        musicMock[13],
        musicMock[14],
      ]
    ),
  ];

  usuarios: usuario[] = [
    {
      id: 0,
      username: 'a',
      email: 'a',
      senha: 'a',
      sexo: 'masculino',
      dataDeNascimento: new Date(12335),
    },
  ];

  createDb() {
    return {
      playlists: this.playlists,
      usuarios: this.usuarios,
    };
  }

  post(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'session') {
      return this.authenticate(reqInfo);
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
}
