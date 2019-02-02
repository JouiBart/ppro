package com.example.demofimkf;

import com.example.demofimkf.dao.UserDao;
import com.example.demofimkf.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserRestController {
    @Autowired
    private UserDao dao;

    @GetMapping("/user/login")
    public User loginUsers(@RequestBody String email, @RequestBody String password) {
        return dao.login(email, password);
    }

    @PostMapping("/user/register")
    public void registerUser(@RequestBody User user) {
        dao.create(user);
    }
}
