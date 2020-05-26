<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# 接口：getUserInfo  [返回](../README.md)
用例： [查看用户信息](../用例/inquiry_user.md),[修改用户信息](../用例/modify_userInfor.md)

- 功能：
    查看用户的所有信息。
    
- 权限：
    学生/老师：查看自己的信息，必须先登录，不能查看其他用户的信息。    
    
- API请求地址： 
    接口基本地址/sys/api/getUserInfo/<USER_ID>


- 请求方式 ：
    GET
      
- 请求参数说明:        

  |参数名称|说明|
  |:---------:|:--------------------------------------------------------|      
  |USER_ID|用户的ID号。对应表USERS.USER_ID的值|
  
- 返回实例：

        {         
            "status": true,
            "info": null,
            "USER_ID":"20171041",    
            "NAME":"李浩",
            "CLASS": "软件工程（本）17-2", 
            "GITHUB_USERNAME":"jiangnhao",
            "TYPE":"学生"            
        }
 
- 返回参数说明：    
 
  |参数名称|说明|
  |:---------:|:--------------------------------------------------------|      
  |status|bool类型，true表示正确的返回，false表示有错误|
  |info|返回结果说明信息|
  |ID|学号或者工号|
  |NAME|用户的真实姓名|  
  |CLASS|班级或者部门名称|
  |GITHUB_USERNAME|gitHub用户名|
  |TYPE|用户类型：老师或者学生|

