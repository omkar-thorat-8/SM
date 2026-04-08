package com.sminfotech.auth_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sminfotech.auth_api.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByVerificationToken(String token);
    Optional<User> findByResetPasswordToken(String token);
}