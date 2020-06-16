package br.com.spotify.document;

public class Session {

    String id;
    String name;
    String email;
    String token;

    public String getUserId() {
        return id;
    }

    public void setUserId(String userId) {
        this.id = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return "7d41b658912d5c39eeaf4fe94eb5e3e7";
    }

    public void setToken(String token) {
        this.token = token;
    }
}
