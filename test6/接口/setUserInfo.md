﻿<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# 接口：setUserInfo  [返回](../README.md)
用例： [修改用户信息](../用例/modify_userInfor.md)

- 功能：
    修改用户的GitHub用户名。
    
- 权限：
    学生/老师：修改自己的密码，必须先登录。    
    
- API请求地址： 
    接口基本地址/system/api/setUserInfo

- 请求方式 ：
    POST

- 请求实例：

        {
            "USER_ID":"20171041",
            "GITHUB_USERNAME":"123456",            
        }
        
- 请求参数说明:        

  |参数名称|说明|
  |:---------:|:--------------------------------------------------------|      
  |USER_ID|用户的ID号。对应表USERS.USER_ID的值|
  |GITHUB_USERNAME|用户GitHub用户名。| 
  
- 返回实例：

        {         
            "status": true,
            "info": null
        }
 
- 返回参数说明：    
 
  |参数名称|说明|
  |:---------:|:--------------------------------------------------------|      
  |status|bool类型，true表示正确的返回，false表示有错误|
  |info|返回结果说明信息|


