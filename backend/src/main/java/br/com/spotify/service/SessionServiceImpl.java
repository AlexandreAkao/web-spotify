package br.com.spotify.service;

import br.com.spotify.document.User;
import br.com.spotify.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class SessionServiceImpl implements SessionService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Mono<User> login(String username, String password) {
        return userRepository.login(username, password);
    }
}
