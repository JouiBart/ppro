package com.example.demofimkf.dao;

import com.example.demofimkf.domain.User;

import java.util.List;

public interface UserDao {
    /**
     * Ulozi noveho uzivatele do DB.
     * @param user uzivatel, ktery ma byt ulozen
     */
    void create(User user);

    /**
     * Najde uzivatele podle jeho ID (PK)
     * @param id ID hledaneho uzivatele
     * @return nalezeho uzivatele nebo null, pokud uzivatel s danym ID neexistuje
     */
    User findById(long id);

    /**
     * Najde a zkontroluje uzivatele
     * @return uzivatele, jinak null
     */
    User login(String email, String password);
}
