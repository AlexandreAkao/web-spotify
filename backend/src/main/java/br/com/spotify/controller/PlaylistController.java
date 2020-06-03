package br.com.spotify.controller;

import br.com.spotify.document.Playlist;
import br.com.spotify.document.User;
import br.com.spotify.service.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class PlaylistController {

    @Autowired
    private PlaylistService playlistService;

    @GetMapping(value = "/playlists")
    public Flux<Playlist> findAll() {
        return playlistService.findAll();
    }

    @GetMapping(value = "/playlists/{id}")
    public Mono<Playlist> findById(@PathVariable String id) {
        return playlistService.findById(id);
    }

    @GetMapping(value = "/playlists/users/{id}")
    public Flux<Playlist> findByUser(@PathVariable String id) {
        return playlistService.findByUser(id);
    }

    @DeleteMapping(value = "/playlists/{id}")
    public Mono<Void> delete(@PathVariable String id) {
        return playlistService.delete(id);
    }

    @PostMapping(value = "/playlists")
    public Mono<Playlist> save(@RequestBody Playlist playlist) {
        return playlistService.save(playlist);
    }

    @PutMapping(value = "/playlists/{id}")
    public Mono<Playlist> update(@PathVariable String id, @RequestBody Playlist playlist) {
        return playlistService.update(id, playlist);
    }
}
