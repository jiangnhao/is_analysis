﻿﻿<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# “修改用户信息”用例 [返回](../README.md)
## 1. 用例规约

|用例名称|修改用户信息|
|-------|:-------------|
|功能|修改用户的GitHub用户名称|
|参与者|学生，老师|
|前置条件|必须先登录，并且查看用户现有的GitHub用户名|
|后置条件|成功修改个人信息 |
|主事件流| 1.用户填写GitHub用户名称和其他信息 <br/> 2.用户提交修改信息 <br/>3.系统存储修改后的GitHub用户名称等信息|
|备选事件流|1a. 如果用户输入的GitHub用户名称为空 <br/>&nbsp;&nbsp; 1.系统清空用户的GitHub用户名称|

## 2. 业务流程
无

## 3. 界面设计
- 界面参照: https://jiangnhao.github.io/is_analysis_test6/ui/modify_userinfo.html
- API接口调用
    - 接口1：[getUserInfo](../接口/getUserInfo.md)
    - 接口2：[setUserInfo](../接口/setUserInfo.md)
    
## 4. 算法描述
无
    
## 5. 参照表
- [USERS](../DataBase.md/#USERS)
