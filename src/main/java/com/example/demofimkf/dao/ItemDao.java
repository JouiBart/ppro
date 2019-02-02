package com.example.demofimkf.dao;
import com.example.demofimkf.domain.Item;

import java.util.List;

public interface ItemDao {
    /**
     * Ulozi novy item do DB.
     * @param Item vec, ktery ma byt ulozen
     */
    void create(Item item);

    /**
     * Vrati pole Item z db
     * @return List<Item> list itemu
     */
    List<Item> findAll();
}

