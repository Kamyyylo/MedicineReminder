package com.medicinereminder.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;


@Entity
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Nazwa leku jest wymagana")
    private String medicineName;
    @NotNull(message = "Podanie daty przydatności do spożycia jest wymagane")
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date expirationDate;
    @NotBlank(message = "Wymagane jest podanie przynajmniej jednej daty przyjmowania leku")
    private String timeOfTaking_1;
    private String timeOfTaking_2;
    private String timeOfTaking_3;
    private String medicineDescription;
    @NotBlank(message = "Dawkowanie leku jest wymagane")
    private String dosage;
    private String userName;

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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
