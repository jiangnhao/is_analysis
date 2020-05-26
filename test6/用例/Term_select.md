﻿<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# “查看成绩”用例 [返回](../README.md)
## 1. 用例规约

|用例名称|查看成绩|
|-------|:-------------|
|功能|学生查看自己的每个实验的实验成绩及实验评价|
|参与者|学生|
|前置条件|1用户已经成功登录到系统，进入主界面<br>2用户需要选修相应的课程<br>3用户通过查询课程的信息已经确定要选择的课程,或者想要查询或者修改已选的课程<br>4课程开设且考试完成。|
|后置条件|成功进入成绩页面 |
|主事件流| 1用户进入系统的登陆界面<br>2输入正确的用户名和密码，并且成功进入系统<br>3.在主界面上了选择成绩查询的功能。
|备选事件流| 学生可以显示全部课程的成绩，也可以按照课程名或者课程号显示|

## 2. 业务流程
- 无 

## 3. 界面设计
- 界面参照: https://jiangnhao.github.io/is_analysis_test6/ui/term_select.html
- API接口调用
    - 接口1：[getTerm_Course](../接口/getTerm_Course.md) 

## 4. 算法描述
    无
    
## 5. 参照表
- [COURSES](../DataBase.md/#COURSES)
