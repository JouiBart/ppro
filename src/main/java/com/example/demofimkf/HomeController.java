package com.example.demofimkf;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.DateFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class HomeController {

    @RequestMapping("/kolikjehodin")
    @ResponseBody
    public String akce2() {
        return new Date().toString();
    }

}
