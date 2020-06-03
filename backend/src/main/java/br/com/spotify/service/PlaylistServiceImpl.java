package br.com.spotify.service;

import br.com.spotify.document.Playlist;
import br.com.spotify.repository.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class PlaylistServiceImpl implements PlaylistService {

    @Autowired
    private PlaylistRepository playlistRepository;

    @Override
    public Flux<Playlist> findAll() {
        return playlistRepository.findAll();
    }

    @Override
    public Mono<Playlist> findById(String id) {
        return playlistRepository.findById(id);
    }

    @Override
    public Flux<Playlist> findByUser(String id) {
        return playlistRepository.findByUser(id);
    }

    @Override
    public Mono<Void> delete(String id) {
        return playlistRepository.deleteById(id);
    }

    @Override
    public Mono<Playlist> save(Playlist playlist) {
        return playlistRepository.save(playlist);
    }

    @Override
    public Mono<Playlist> update(String id, Playlist newPlaylist) {
        Playlist updatedPlaylist = new Playlist(
                id,
                newPlaylist.getName(),
                newPlaylist.getImage(),
                newPlaylist.getPrivate(),
                newPlaylist.getDuration(),
                newPlaylist.getMusics(),
                newPlaylist.getUserId()
        );

        return playlistRepository.save(updatedPlaylist);
    }
}
