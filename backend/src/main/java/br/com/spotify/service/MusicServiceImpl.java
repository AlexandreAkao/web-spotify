package br.com.spotify.service;

import br.com.spotify.document.Music;
import br.com.spotify.repository.MusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class MusicServiceImpl implements MusicService {

    @Autowired
    private MusicRepository musicRepository;

    @Override
    public Flux<Music> findAll() {
        return musicRepository.findAll();
    }

    @Override
    public Flux<Music> findByNameOrAuthor(String search) {
        return musicRepository.findByNameOrAuthor(search);
    }

    @Override
    public Mono<Music> save(Music music) {
        return musicRepository.save(music);
    }
}
