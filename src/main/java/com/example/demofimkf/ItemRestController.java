package com.example.demofimkf;

import com.example.demofimkf.dao.ItemDao;
import com.example.demofimkf.domain.Item;
import com.example.demofimkf.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemRestController  {
    @Autowired
    private ItemDao dao;

    @GetMapping("/item/getAll")
    public List<Item> getAll() {
        return dao.findAll();
    }

    @PostMapping("/item/create")
    public void create(@RequestBody Item item) {
        dao.create(item);
    }
}