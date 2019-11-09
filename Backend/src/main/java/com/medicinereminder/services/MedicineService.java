package com.medicinereminder.services;

import com.medicinereminder.domain.Medicine;
import com.medicinereminder.exceptions.MedicineIdException;
import com.medicinereminder.repositories.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MedicineService {

    @Autowired
    private MedicineRepository medicineRepository;

    public Medicine saveOrUpdateMedicine(Medicine medicine){

        return medicineRepository.save(medicine);
    }

    public Medicine findByMedicineId(Long userId, Long medicineId){
        Iterable<Medicine> medicineList = medicineRepository.findAll();
        Medicine medicine1 = new Medicine();
        for(Medicine medicine : medicineList){
            if(medicine.getUserId() == userId && medicine.getId()==medicineId){
                medicine1 = medicine;
            }
        }
        if(medicine1 == null){
            throw new MedicineIdException("Medicine does not exists");
        }
        return medicine1;
    }

    public ArrayList<Medicine> findAllMedicineForUser(Long userId){
        Iterable<Medicine> medicineList = medicineRepository.findAll();
        ArrayList<Medicine> medicineForUser = new ArrayList<>();
        for(Medicine medicine : medicineList){
            if(medicine.getUserId() == userId){
                medicineForUser.add(medicine);
            }
        }
        return  medicineForUser;
    }

    public void deleteMedicine(long medicineId){
        Medicine medicine = medicineRepository.findById(medicineId);
        medicineRepository.delete(medicine);
    }

}
