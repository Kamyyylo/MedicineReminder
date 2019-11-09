package com.medicinereminder.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;


@Entity
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Name of the medicine is required")
    private String medicineName;
    //@NotBlank(message = "Put expiration date of your medicine")
    private Date expirationDate;
    @NotBlank(message = "At least one time when medicine will be taken is required")
    private String timeOfTaking_1;
    private String timeOfTaking_2;
    private String timeOfTaking_3;
    @NotBlank(message = "Put a short description of this medicine")
    private String medicineDescription;
    @NotBlank(message = "Dosage is required")
    private String dosage;
    private Long userId;

    public Medicine() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMedicineName() {
        return medicineName;
    }

    public void setMedicineName(String medicineName) {
        this.medicineName = medicineName;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public String getTimeOfTaking_1() {
        return timeOfTaking_1;
    }

    public void setTimeOfTaking_1(String timeOfTaking_1) {
        this.timeOfTaking_1 = timeOfTaking_1;
    }

    public String getTimeOfTaking_2() {
        return timeOfTaking_2;
    }

    public void setTimeOfTaking_2(String timeOfTaking_2) {
        this.timeOfTaking_2 = timeOfTaking_2;
    }

    public String getTimeOfTaking_3() {
        return timeOfTaking_3;
    }

    public void setTimeOfTaking_3(String timeOfTaking_3) {
        this.timeOfTaking_3 = timeOfTaking_3;
    }

    public String getMedicineDescription() {
        return medicineDescription;
    }

    public void setMedicineDescription(String medicineDescription) {
        this.medicineDescription = medicineDescription;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
