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
//        Playlist updatedPlaylist = new Playlist(
//                id,
//                newPlaylist.getName(),
//                newPlaylist.getImage(),
//                newPlaylist.getPrivate(),
//                newPlaylist.getDuration(),
//                newPlaylist.getMusics(),
//                newPlaylist.getUserId()
//        );

//
        return playlistRepository.save(newPlaylist);
//        return playlistRepository.findById(id).map(playlist -> {
//            if (newPlaylist.getName() != null) {
//                playlist.setName(newPlaylist.getName());
//            }
//
//            if (newPlaylist.getImage() != null && newPlaylist.getImage().equals("")) {
//                playlist.setImage(newPlaylist.getImage());
//            }
//
//            if (newPlaylist.getPrivate() != null) {
//                playlist.setPrivate(newPlaylist.getPrivate());
//            }
//
//            if (newPlaylist.getMusics() != null) {
//                playlist.setMusics(newPlaylist.getMusics());
//            }
//
//            if (newPlaylist.getUserId() != null) {
//                playlist.setUserId(newPlaylist.getUserId());
//            }
//
//            //playlistRepository.save(playlist);
//
//            return playlist;
//        });


//        updatedPlaylist.setId(id);
//
//        if (newPlaylist.getName() != null) {
//            updatedPlaylist.setName(newPlaylist.getName());
//        }
//        if (newPlaylist.getImage() != null && newPlaylist.getImage().equals("")) {
//            updatedPlaylist.setImage(newPlaylist.getImage());
//        }
//        if (newPlaylist.getPrivate() != null) {
//            updatedPlaylist.setPrivate(newPlaylist.getPrivate());
//        }
//        if (newPlaylist.getMusics() != null) {
//            updatedPlaylist.setMusics(newPlaylist.getMusics());
//        }
//        if (newPlaylist.getUserId() != null) {
//            updatedPlaylist.setUserId(newPlaylist.getUserId());
//        }
    }
}
