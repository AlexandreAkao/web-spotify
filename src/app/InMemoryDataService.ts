import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, STATUS, ResponseOptions } from 'angular-in-memory-web-api';

import playlist from '../app/playlist/Playlist';
import musicMock from '../app/Music/MusicMock';
import usuario from '../app/usuario/Usuario';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const playlists: playlist[] = [
      new playlist(
        0,
        'When We All Fall Asleep, Where Do We Go?',
        '../../../assets/img/album/When_We_Fall_Asleep,_Where_Do_We_Go.png',
        'Billie Eilish',
        1,
        [
          musicMock[0], musicMock[1], musicMock[2]
        ]
      ),
      new playlist(
        1,
        'The Days / Nights',
        '../../../assets/img/album/the_days_nights.png',
        'Avicii',
        1,
        [
          musicMock[3], musicMock[4]
        ]
      ),
      new playlist(
        2,
        'Curtain Call',
        '../../../assets/img/album/eminem_curtain_call.jpg',
        '',
        1,
        [
          musicMock[5]
        ]
      ),
      new playlist(
        3,
        'Castelos & Ruínas',
        '../../../assets/img/album/bk.webp',
        '',
        1,
        [
          musicMock[5]
        ]
      ),
      new playlist(
        4,
        'All Eyez On Me',
        '../../../assets/img/album/2pac.jpg',
        '',
        1,
        [
          musicMock[5]
        ]
      ),
      new playlist(
        5,
        'DAMN',
        '../../../assets/img/album/Kendrick_Lamar.jpg',
        '',
        1,
        [
          musicMock[5]
        ]
      ),
      new playlist(
        6,
        'Doka Language',
        '../../../assets/img/album/sidoka.jfif',
        '',
        1,
        [
          musicMock[5]
        ]
      ),
      new playlist(
        7,
        'Recess',
        '../../../assets/img/album/recess.jfif',
        'Skrillex',
        1,
        [
          musicMock[6], musicMock[7], musicMock[8],
          musicMock[9], musicMock[10], musicMock[11],
          musicMock[12], musicMock[13], musicMock[14]
        ]
      )
    ];

    const usuarios: usuario[] = [
      {
        id: 0,
        username: "a",
        email: "a",
        senha: "a",
        sexo: "masculino",
        dataDeNascimento: new Date(12335)
      }
    ];

    return { playlists, usuarios };
  }

  // post(requestInfo: RequestInfo) {
  //   const collectionName = requestInfo.collectionName;

  //   if (collectionName === 'usuarios') {
  //     // Intercept POST calls to the 'somedatatype' collection:
  //     // E.g. add some fields to our entity that would be set in the backend,
  //     const data = requestInfo.utils.getJsonBody(requestInfo.req);
  //     console.log(data)

  //     const collection = requestInfo.collection;
  //     data.extraField = 'hello';

  //     // set id to next highest number
  //     data.id = collection.map(item => item.id).reduce((cur, next) => cur > next ? cur : next) + 1;

  //     // ... add the item to the collection
  //     collection.push(data);

  //     // forge the response
  //     const options: ResponseOptions = {
  //       body: { data  },
  //       status: STATUS.OK,
  //       headers: requestInfo.headers,
  //       url: requestInfo.url
  //     };

  //     // use createResponse$ to return proper response
  //     return requestInfo.utils.createResponse$(() => options);
  //   }

  //   // let the default POST handle all other collections by returning undefined
  //   return undefined;
  // }
}
