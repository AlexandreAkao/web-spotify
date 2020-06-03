package br.com.spotify.repository;

import br.com.spotify.document.Music;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface MusicRepository extends ReactiveMongoRepository<Music, String> {
    @Query("{$or: [{ 'name': ?0 }, { 'author': ?0 }]}")
    Flux<Music> findByNameOrAuthor(String search);
}
