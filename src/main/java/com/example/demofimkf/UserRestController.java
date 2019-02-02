package com.example.demofimkf;

import com.example.demofimkf.dao.UserDao;
import com.example.demofimkf.domain.User;
import com.example.demofimkf.helpers.LoginViewModel;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserRestController {
    @Autowired
    private UserDao dao;

    @PostMapping("/user/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public User loginUsers(@RequestBody LoginViewModel emailPassword) {
        try {
            return dao.login(emailPassword);
        } catch (Exception e)
        {
            return new User();
        }

    }

    @PostMapping("/user/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public void registerUser(@RequestBody User user) {
        dao.create(user);
    }
}
