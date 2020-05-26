﻿<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# 接口：setOneStudentResults  [返回](../README.md)
用例： [评定成绩](../用例/evaluate_grades.md)

- 功能：
    设置一个学生的部分实验成绩和评语。
    
    输入参数result不为空，自动设置update_date为当前日期，表示同时设置批改日期。
    
    输入参数result为空，自动设置update_date为空，表示未批改。
    
- 权限：
    老师：可以查看所有学生的成绩。
    
- API请求地址： 
    接口基本地址/system/api/setOneStudentResults

- 请求方式 ：
    POST
 
- 请求实例：  
        { 
            "STUDENT_ID": "20171021", 
            "total": 8,
            "data": [
                {
                "EXAMINATION_ID":1,
                "RESULT": 80, 
                "CONTENT":"实验未完全完成",
                }, 
                {
                ...其他实验
                }
            ] 
        }

- 请求参数说明:       
 
  |参数名称|说明|
  |:---------:|:--------------------------------------------------------|      
  |STUDENT_ID|学号|
  |total|本次批改的所有实验的总数，小于等于全部实验的总数|
  |data|实验的成绩和评语|
  |EXAMINATION_ID|实验编号|
  |RESULT|本实验成绩，可以为空，为空表示没有批改。|
  |CONTENT|本实验老师的评价，可以为空|   
 
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


