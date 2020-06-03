package br.com.spotify.repository;

import br.com.spotify.document.Playlist;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface PlaylistRepository extends ReactiveMongoRepository<Playlist, String> {
    @Query("{ userId: ?0 }")
    Flux<Playlist> findByUser(String id);
}
