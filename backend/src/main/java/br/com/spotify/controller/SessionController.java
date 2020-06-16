package br.com.spotify.controller;

import br.com.spotify.document.Session;
import br.com.spotify.service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
public class SessionController {

    @Autowired
    private SessionService sessionService;

    @PostMapping(value = "/sessions")
    public Mono<Session> login(@RequestBody Map<String, String> username) {

        /*
        Map<String, Object> res = new LinkedHashMap<>();
        res.put("user", newSession.);
        res.put("token", "odjsaidjasdoiusjdsidjsaiojdsaoidjadoia");
         */

        return sessionService.login(username.get("username"), username.get("password"))
                .map(user -> {
                    Session s = new Session();
                    s.setName(user.getUsername());
                    s.setEmail(user.getEmail());
                    s.setUserId(user.getId());

                    return s;
                });
//        return sessionService.getById(username.get("username"));
    }
}
