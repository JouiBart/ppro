package com.example.demofimkf.domain;

import javax.persistence.*;
import com.example.demofimkf.domain.User;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String description;
    private float price_day;
    private float price_hour;
    private float price_month;
    private boolean delete;

    public Item() {
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getPrice_day() {
        return price_day;
    }

    public void setPrice_day(float price_day) {
        this.price_day = price_day;
    }

    public float getPrice_hour() {
        return price_hour;
    }

    public void setPrice_hour(float price_hour) {
        this.price_hour = price_hour;
    }

    public float getPrice_month() {
        return price_month;
    }

    public void setPrice_month(float price_month) {
        this.price_month = price_month;
    }

    public boolean isDelete() {
        return delete;
    }

    public void setDelete(boolean delete) {
        this.delete = delete;
    }
}