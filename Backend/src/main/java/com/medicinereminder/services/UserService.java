package com.medicinereminder.services;

import com.medicinereminder.domain.User;
import com.medicinereminder.exceptions.UserExistsException;
import com.medicinereminder.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user){

        Iterable<User> users = userRepository.findAll();
        for(User user1 : users){
            if(user1.getLogin().equals(user.getLogin())){
                throw new UserExistsException("User with this name already exists");
            }
        }

        return userRepository.save(user);
    }

    public User findUser(String login, String password){
        User user = userRepository.findByLogin(login);
        if(user == null){
            throw new UserExistsException("User does not exist");
        }
        if(!user.getPassword().equals(password)){
            throw new UserExistsException("Password is wrong");
        }
        return user;
    }
}
