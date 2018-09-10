package com.test1.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class hello {

    @RequestMapping("/")
    public String index() {
        return "Simple display";
    }

}