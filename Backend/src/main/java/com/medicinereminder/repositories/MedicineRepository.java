package com.medicinereminder.repositories;

import com.medicinereminder.domain.Medicine;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository extends CrudRepository<Medicine, Long> {

   Medicine findByUserName(String username);

    Medicine findById(long id);

}
