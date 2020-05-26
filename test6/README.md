# 实验6:基于GitHub的实验管理平台的分析与设计
####成都大学信息科学工程学院
|   学号       |      班级      |      姓名    |
|:------------:|:-------------:|:-----------:|
|201710414207|     17软工2班    |   李浩     | 
|-----------|--------------|-------------|

## 1.概述
* 基于GitHub的实验管理平台的作用是在线管理实验成绩的Web应用系统。学生和老师的实验内容均存放在GitHUB 页面上。
* 学生的功能主要有：一是设置自己的GitHub用户名，二是查询自己的实验成绩。学生的GitHub用户名是公开的，但成绩不公开。
* 老师的功能主要有：一是批改每个学生的成绩，二是查看每个学生的成绩。
* 老师和学生都能通过本系统的链接方便地跳转到学生的每个GitHUB实验目录，以便批改实验或者查看实验情况。
* 实验成绩按数字分数计算，每项实验的满分为100分，最低为0分。
* 系统自动计算每个学生的所有实验的平均分。
* 一个老师可以上多门课，每个老师只能维护老师自己的课程及成绩。
* 一个同学可以上多门课，每个同学只能查询同学自己的课程的实验成绩。
* 必须考虑选课了，老师和同学都可以选多门课程，但必须是老师先选，学生后选。
* 原实验为单评分项实验，要求改为多评分项实验，即每个实验的实验成绩细分为多个评分项，每个评分项对应各自的评分标准。 老师在批改实验的时候，对每个评分项进行评分并输入对应的文字评价，系统自动计算出所有评分项的成绩之和为该实验的总成绩。
* 考虑到有多个学期，每个学期都有不同的实验。
* 系统设计在界面上和操作上应该方便老师查询和评阅学生的实验成绩，应该方便学生查询实验成绩。
## 2.系统总体设计[源码](./src/system.puml)

[系统设计参见](./system.svg)
[界面设计参见](https://jiangnhao.github.io/is_analysis_test6/ui/index.html)

## 3.用例图设计 [源码](./src/UseCase.puml)
![image](./UseCase.svg)

## 4.类图设计[源码](./src/Class.puml)
![image](./Class.svg)


## 5.数据库设计
*  [﻿数据库设计](./DataBase.md)

## 6.用例及界面详细设计
- ### [“学生列表”用例](./用例/stu_list.md),[界面](https://jiangnhao.github.io/is_analysis_test6/ui/student_list.html)
- ### [“评定成绩”用例](./用例/evaluate_grades.md),[界面](https://jiangnhao.github.io/is_analysis_test6/ui/evaluate_grades.html)
- ### [“查看成绩”用例](./用例/inquiry.md),[界面](https://jiangnhao.github.io/is_analysis_test6/ui/inquiry.html)
- ### [“修改密码”用例](./用例/modify_userpasswd.md),[界面](https://jiangnhao.github.io/is_analysis_test6/ui/modify_userpasswd.html)
- ### [“修改用户信息”用例](./用例/modify_userInfor.md),[界面](https://jiangnhao.github.io/is_analysis_test6/ui/modify_userinfo.html)
- ### [“查看用户信息”用例](./用例/inquiry_user.md),[界面](https://jiangnhao.github.io/is_analysis_test6/ui/top_meun.html)
- ### [“登出”用例](./用例/Login_out.md),[界面](https://jiangnhao.github.io/is_analysis_test6/ui/login_out.html)
- ### [“登录”用例](./用例/Login_in.md),[界面](https://jiangnhao.github.io/is_analysis_test6/ui/login_in.html)
- ### [“课程列表”用例](./用例/Course_list.md),[界面](https://jiangnhao.github.io/is_analysis_test6/ui/index.html)
- ### [“评分标准设置”用例](./用例/evaluate_principle.md),[界面](https://jiangnhao.github.io/is_analysis_test6/ui/evaluate_principle.html)
- ### [“学期选择”用例](./用例/Term_select.md),[界面](https://jiangnhao.github.io/is_analysis_test6/ui/term_select.html)

