package com.example.demofimkf.dao;

import com.example.demofimkf.domain.User;
import com.example.demofimkf.helpers.LoginViewModel;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class JpaUserDao implements UserDao {
    @PersistenceContext
    private EntityManager em;

    @Override
    public void create(User user) {
        em.persist(user);
    }

    @Override
    public User findById(long id) {
        return null;
    }

    @Override
    public User login(LoginViewModel emailPassword) {
        try
        {
            return em.createQuery("SELECT u FROM User u WHERE email = :email AND password = :password", User.class)
                    .setParameter("email", emailPassword.getEmail())
                    .setParameter("password", emailPassword.getPassword()).getSingleResult();
        } catch( Exception e)
        {
           return new User();
        }
    }

}
