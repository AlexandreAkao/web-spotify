package br.com.spotify.service;

import br.com.spotify.document.Music;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface MusicService {
    Flux<Music> findAll();

    Flux<Music> findByNameOrAuthor(String search);

    Mono<Music> findById(String id);

    Mono<Music> save(Music music);
}
