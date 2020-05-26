﻿<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# “课程列表”用例 [返回](../README.md)
## 1. 用例规约

|用例名称|课程列表|
|-------|:-------------|
|功能|以表形式的显示出所有课程的信息|
|参与者|游客，学生，老师|
|前置条件|老师，学生需要登录|
|后置条件|跳转至课程列表 |
|主事件流|1.用户进入系统的登陆界面。<br>2.输入正确的用户名和密码，并且成功进入系统。<br>3.在主界面上了选择学期。<br>4.查看课程列表。 |
|备选事件流|无 |

## 2. 业务流程（顺序图） [源码](../src/sequenceCourse_list.puml)
![课程列表时序图](../sequenceCourse_list.svg) 

## 3. 界面设计
- 界面参照:https://jiangnhao.github.io/is_analysis_test6/ui/index.html
- API接口调用
    - 接口1：[getCourses](../接口/getCourses.md) 

## 4. 算法描述

- 无
    
## 5. 参照表

- [COURSES](../DataBase.md/#COURSES)


