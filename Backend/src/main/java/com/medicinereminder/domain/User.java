package com.medicinereminder.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Nazwa użytkownika nie może być pusta")
    @Size(min=6, message = "Login musi posiadać minimum 6 znaków")
    private String login;
    @NotBlank(message = "Hasło nie może być puste")
    @Size(min=8, message = "Hasło musi posiadać minimum 8 znaków")
    private String password;

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
