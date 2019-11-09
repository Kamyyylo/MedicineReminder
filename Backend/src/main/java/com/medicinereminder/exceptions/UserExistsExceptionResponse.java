package com.medicinereminder.exceptions;

public class UserExistsExceptionResponse {
    private String userId;

    public UserExistsExceptionResponse(String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
