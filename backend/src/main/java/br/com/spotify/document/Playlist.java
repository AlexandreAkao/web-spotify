package br.com.spotify.document;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Playlist {

    @Id
    private String id;
    private String name;
    private String image;
    private Boolean isPrivate;
    private int duration;
    private List<Music> musics;
    private String userId;

    public Playlist() {}

    public Playlist(String id, String name, String image, Boolean isPrivate, int duration, List<Music> musics, String userId) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.isPrivate = isPrivate;
        this.duration = duration;
        this.musics = musics;
        this.userId = userId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Boolean getPrivate() {
        return isPrivate;
    }

    public void setPrivate(Boolean aPrivate) {
        isPrivate = aPrivate;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public List<Music> getMusics() {
        return musics;
    }

    public void setMusics(List<Music> musics) {
        this.musics = musics;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
