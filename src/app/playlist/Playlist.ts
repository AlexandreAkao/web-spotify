import Music from '../music/Music';

export default class Playlist {
  id: number;
  name: string;
  image: string;
  author: string;
  duration: number;
  musics: Music[];

  constructor(id, name, image, author, duration, musics) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.author = author;
    this.duration = duration;
    this.musics = musics;
  }
}
