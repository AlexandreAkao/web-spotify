import musicMock from '../Music/MusicMock';
import playlist from './Playlist';

const playlistMock: playlist[] = [
    new playlist(
      1,
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
      1,
      'Curtain Call',
      '../../../assets/img/album/eminem_curtain_call.jpg',
      '',
      1,
      [
        musicMock[5]
      ]
    ),
    new playlist(
      1,
      'Castelos & Ruínas',
      '../../../assets/img/album/bk.webp',
      '',
      1,
      [
        musicMock[5]
      ]
    ),
    new playlist(
      1,
      'All Eyez On Me',
      '../../../assets/img/album/2pac.jpg',
      '',
      1,
      [
        musicMock[5]
      ]
    ),
    new playlist(
      1,
      'DAMN',
      '../../../assets/img/album/Kendrick_Lamar.jpg',
      '',
      1,
      [
        musicMock[5]
      ]
    ),
    new playlist(
      1,
      'Doka Language',
      '../../../assets/img/album/sidoka.jfif',
      '',
      1,
      [
        musicMock[5]
      ]
    ),
    new playlist(
      1,
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

export default playlistMock;
