package com.medicinereminder.web;

import com.medicinereminder.domain.User;
import com.medicinereminder.services.MapValidationErrorService;
import com.medicinereminder.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("/register")
    public ResponseEntity<?> createNewUser(@Valid @RequestBody User user, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if(errorMap!= null){return errorMap;}

        User user1 = userService.registerUser(user);
        return new ResponseEntity<>(user1, HttpStatus.CREATED);

    }

    @GetMapping("{login}/{password}")
    public ResponseEntity<?> getUserByLogin(@PathVariable String login, @PathVariable String password){
        User user = userService.findUser(login,password);
        return new ResponseEntity<User>(user ,HttpStatus.OK);
    }

}
