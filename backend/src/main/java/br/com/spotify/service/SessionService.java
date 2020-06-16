package br.com.spotify.service;

import br.com.spotify.document.Session;
import br.com.spotify.document.User;
import reactor.core.publisher.Mono;

public interface SessionService {
    Mono<User> login(String username, String password);
}
