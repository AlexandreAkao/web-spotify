package br.com.spotify.controller;

import br.com.spotify.document.User;
import br.com.spotify.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/users")
    public Flux<User> getUser() {
        return userService.findAll();
    }

    @GetMapping(value = "/users/{id}")
    public Mono<User> getUserById(@PathVariable String id) {
        return userService.findById(id);
    }

    @PostMapping(value = "/users")
    public Mono<User> create(@RequestBody User user) {
        return userService.save(user);
    }

    @PutMapping(value = "/users/{id}")
    public Mono<User> update(@PathVariable String id, @RequestBody User user) {
        return userService.update(id, user);
    }

    @DeleteMapping(value = "/users/{id}")
    public Mono<Void> delete(@PathVariable String id) {
        return userService.delete(id);
    }
}
