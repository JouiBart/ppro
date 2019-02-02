package com.example.demofimkf.dao;


import com.example.demofimkf.domain.Item;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class JpaItemDao implements ItemDao {
    @PersistenceContext
    private EntityManager em;

    @Override
    public void create(Item item) {
        em.persist(item);
    }

    @Override
    public List<Item> findAll() {
        return em.createQuery("SELECT i FROM Item i", Item.class).getResultList();
    }
}

