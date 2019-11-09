package com.medicinereminder.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class MedicineIdException extends RuntimeException {
    public MedicineIdException(String message) {
        super(message);
    }
}
