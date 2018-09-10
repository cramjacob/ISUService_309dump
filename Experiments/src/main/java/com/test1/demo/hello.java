package com.test1.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.Random;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class hello {
    @RequestMapping("/")
    public int[] GetRandomNum(@RequestParam int input){
        Random rand = new Random();
        int[] num = new int[8];
        for(int i = 0; i < num.length; i++){
            num[i] = rand.nextInt(50);
        }
        if(input == 500){
            return num;
        }
        return null;
    }
}