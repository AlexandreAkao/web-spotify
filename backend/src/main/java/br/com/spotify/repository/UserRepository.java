package br.com.spotify.repository;


import br.com.spotify.document.Session;
import br.com.spotify.document.User;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface UserRepository extends ReactiveMongoRepository<User, String> {
    @Query("{$or: [{ 'name': ?0 }, { 'email': ?0 }]}")
    Mono<User> login(String username, String password);
}
