package com.medicinereminder.repositories;

import com.medicinereminder.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {

    User findByLogin(String login);

    @Override
    Iterable<User> findAll();
}
