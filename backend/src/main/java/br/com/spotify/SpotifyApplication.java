package br.com.spotify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//spring.data.mongodb.uri=mongodb+srv://admin:admin@cluster0-iyzrm.mongodb.net/spotify?retryWrites=true&w=majority
@SpringBootApplication
public class SpotifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpotifyApplication.class, args);
	}
}
