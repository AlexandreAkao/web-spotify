import Music from '../music/Music';

export default class Playlist {
  id: string;
  name: string;
  image: string;
  duration: number;
  musics: Music[];
  isPrivate: boolean;
  userId: number;

  constructor(id, name, image, duration, musics, isPrivate, userId) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.duration = duration;
    this.musics = musics;
    this.isPrivate = isPrivate;
    this.userId = userId;
  }
}
