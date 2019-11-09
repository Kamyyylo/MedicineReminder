package com.medicinereminder.exceptions;

public class MedicineIdExceptionResponse {
    private String userId;

    public MedicineIdExceptionResponse(String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
