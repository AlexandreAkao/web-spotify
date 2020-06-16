export default class Music {
  id: string;
  album: string;
  name: string;
  image: string;
  duration: number;
  author: string;
  path: string;

  constructor(id, album, name, image, author, duration, path) {
    this.id = id;
    this.album = album;
    this.name = name;
    this.image = image;
    this.author = author;
    this.duration = duration;
    this.path = path;
  }
}
