﻿﻿<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# “修改密码”用例 [返回](../README.md)
## 1. 用例规约

|用例名称|修改密码|
|-------|:-------------|
|功能|修改用户的密码|
|参与者|学生，老师|
|前置条件|登录，并进入密码修改界面|
|后置条件|修改密码以后必须强制登出，再跳转到登录页面|
|主事件流| 1.用户填写旧密码 2.用户填写新密码（两次输入） <br/> 3.用户提交修改信息 <br/>4.系统存储修改后密码|
|备选事件流|1a.用户旧密码错误 1.系统提示旧密码错误  <br/>&nbsp;&nbsp; 2. 用户重新填写并提交。 2a. 用户两次输入的密码不同 <br/>&nbsp;&nbsp; 1.系统提示两次输入的密码不相同  <br/>&nbsp;&nbsp; 2. 用户重新填写并提交。 |

## 2. 业务流程
无

## 3. 界面设计
- 界面参照: https://jiangnhao.github.io/is_analysis_test6/ui/modify_userpasswd.html
- API接口调用
    - 接口1：[setPassword](../接口/setPassword.md)

## 4. 算法描述 [源码](../src/Login_in.puml)
![登录认证流程图](../Login_in.png)
    
## 5. 参照表

- [USERS](../Database.md/#USERS)
