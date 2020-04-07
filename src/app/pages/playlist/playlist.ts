import Music from './music';

export default class Playlist {
    id: number;
    name: string;
    image: string;
    author: string;
    duration: number;
    musics: Music[];
}
