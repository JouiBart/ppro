package com.example.demofimkf;

import com.example.demofimkf.dao.ItemDao;
import com.example.demofimkf.domain.Item;
import com.example.demofimkf.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemRestController  {
    @Autowired
    private ItemDao dao;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/item/getAll")
    public List<Item> getAll() {
        return dao.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/item/create")
    public void create(@RequestBody Item item) {
        dao.create(item);
    }
}