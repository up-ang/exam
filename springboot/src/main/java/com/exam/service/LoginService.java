package com.exam.service;

import com.exam.entity.Student;
import com.exam.entity.Teacher;

public interface LoginService {


    public Teacher teacherLogin(Integer username, String password);

    public Student studentLogin(Integer username, String password);
}
