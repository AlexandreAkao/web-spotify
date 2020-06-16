package br.com.spotify.controller;

import br.com.spotify.document.Music;
import br.com.spotify.document.Playlist;
import br.com.spotify.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class MusicController {

    @Autowired
    private MusicService musicService;

    @GetMapping(value = "/musics")
    public Flux<Music> findByNameAndAuthor(@RequestParam(value = "search", required = false) String search) {
        if (search != null) {
            return musicService.findByNameOrAuthor(search);
        }

        return musicService.findAll();
    }

    @GetMapping(value = "/musics/{id}")
    public Mono<Music> findById(@PathVariable String id) {
        return musicService.findById(id);
    }

    @PostMapping(value = "/musics")
    public Mono<Music> create(@RequestBody Music music) {
        return musicService.save(music);
    }
}
