package com.sminfotech.auth_api.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    private String name;

    private boolean enabled = false; // email not verified yet

    private String verificationToken;

    private String resetPasswordToken;

    private LocalDateTime resetTokenExpiry;

    private LocalDateTime createdAt = LocalDateTime.now();
}