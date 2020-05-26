﻿<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# 接口：getUserInfo  [返回](../README.md)
用例： [学期选择](../用例/getTerm_Course.md)

- 功能：
    根据学期来查看所有课程信息。
    
- 权限：
    学生/老师：查看所有信息，必须先登录，不能查看其他非班级所修课程信息。    
    游客：仅能访问课程列表。
- API请求地址： 
    接口基本地址/system/api/getTerm_Course/<term>

- 请求方式 ：
    GET
      
- 请求参数说明:        

  |参数名称|说明|
  |:---------:|:--------------------------------------------------------|      
  |term|学期。对应表COURSE.TERM的值|
  
- 返回实例：

                {
                    "status": true,
                    "info": null,
                    "total": 30,
                    "data": [
                        {"COURSE_ID": "0000001",
                        "COURSE_NAME": "软件系统分析",
                        "TEACHER_ID": "120022",
                        "TERM": "2019-2020(2)",
                        "DEPARTMENT": "信息科学与工程学院",},
                        {
                        ...其他课程信息
                        }
                    ]
                }
 
- 返回参数说明：

  |参数名称|说明|
  |:---------:|:--------------------------------------------------------|
  |status|bool类型，true表示正确的返回，false表示有错误|
  |info|返回结果说明信息|
  |total|返回学生人数|
  |data|所有课程的数组|
  |TEACHER_ID|教师工号|
  |COURSE_ID|课程编号|
  |COURSE_NAME|课程名称|
  |TERM|开课学期|
  |DEPARTMENT|授课部门|

