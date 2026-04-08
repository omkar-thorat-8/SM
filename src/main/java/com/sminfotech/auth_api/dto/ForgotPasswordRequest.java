package com.sminfotech.auth_api.dto;

import lombok.Data;

@Data
public class ForgotPasswordRequest {
    private String email;
}