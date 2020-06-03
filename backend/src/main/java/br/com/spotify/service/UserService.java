package br.com.spotify.service;

import br.com.spotify.document.User;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface UserService {
    Flux<User> findAll();

    Mono<User> findById(String id);

    Mono<User> save(User user);

    Mono<User> update(String id, User user);

    Mono<Void> delete(String id);
}
