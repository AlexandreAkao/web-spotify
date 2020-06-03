package br.com.spotify.service;

import br.com.spotify.document.Playlist;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface PlaylistService {
    Flux<Playlist> findAll();

    Mono<Playlist> findById(String id);

    Flux<Playlist> findByUser(String id);

    Mono<Void> delete(String id);

    Mono<Playlist> save(Playlist playlist);

    Mono<Playlist> update(String id, Playlist playlist);
}
