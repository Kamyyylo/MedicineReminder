package com.medicinereminder.web;

import com.medicinereminder.domain.Medicine;
import com.medicinereminder.exceptions.MedicineIdException;
import com.medicinereminder.services.MapValidationErrorService;
import com.medicinereminder.services.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;

@RestController
@RequestMapping("/medicine")
@CrossOrigin
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewMedicine(@Valid @RequestBody Medicine medicine, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if(errorMap!= null){return errorMap;}

        Medicine medicine1 = medicineService.saveOrUpdateMedicine(medicine);
        return new ResponseEntity<>(medicine1, HttpStatus.CREATED);
    }

    @GetMapping("{userName}/{medicineId}")
    public ResponseEntity<?> getMedicineByUserId(@PathVariable String userName, @PathVariable String medicineId){
        Medicine medicine = medicineService.findByMedicineId(userName, Long.parseLong(medicineId));
        return new ResponseEntity<Medicine>(medicine,HttpStatus.OK);
    }

    @GetMapping("{userName}")
    public ArrayList<Medicine> getAllMedicineForUser(@PathVariable String userName){
       return medicineService.findAllMedicineForUser(userName);
    }

    @DeleteMapping("{medicineId}")
    public ResponseEntity<?> deleteMedicine(@PathVariable String medicineId){
        medicineService.deleteMedicine(Long.parseLong(medicineId));
        return new ResponseEntity<String>("Medicine successfully deleted", HttpStatus.OK);
    }
}
