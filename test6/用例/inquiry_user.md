﻿<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# “查看用户信息”用例 [返回](../README.md)
## 1. 用例规约

|用例名称|查看用户信息|
|-------|:-------------|
|功能|查看用户的所有信息|
|参与者|学生，老师|
|前置条件|登录，并进入个人信息界面|
|后置条件|成功进入个人信息界面 |
|主事件流|点击个人信息进入个人信息界面 |
|备选事件流| 无|

## 2. 业务流程
无

## 3. 界面设计
- 界面参照: https://jiangnhao.github.io/is_analysis_test6/ui/top_meun.html
- API接口调用
    - 接口1：[getUserInfo](../接口/getUserInfo.md)

## 4. 算法描述
无
    
## 5. 参照表
- [STUDENTS](../Database.md/#STUDENTS)
- [TEACHERS](../Database.md/#TEACHERS)
- [USERS](../Database.md/#USERS)
