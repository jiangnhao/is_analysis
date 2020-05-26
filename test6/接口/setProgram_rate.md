﻿<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# 接口：setProgram_rate  [返回](../README.md)
用例： [评分标准设置](../用例/evaluate_principle.md)

- 功能：
    设置一个课程的部分实验评价标准和占比。
    
    输入参数program与rate需要同时为空或都有值，自动设置update_date为当前日期，表示同时设置日期。
    
    输入参数program为空，自动设置update_date为空，表示未设置。
    
- 权限：
    老师：可以设置当前课程实验的评分标准。
    
- API请求地址： 
    接口基本地址/system/api/setProgram_rate

- 请求方式 ：
    POST
 
- 请求实例：  
        { 
            "TEST_ID": "001",
            "COURSE_ID":"00000002" 
            "total": 5,
            "data": [
                {
                
                "PROGRAM1":"100",
                "RATE1": 60%, 
                }, 
                {
                ...其他实验批改要求
                }
            ] 
        }

- 请求参数说明:       
 
  |参数名称|说明|
  |:---------:|:--------------------------------------------------------|      
  |TEST_ID|实验编号|
  |COURSE_ID|课程编号|
  |total|本次批改实验的要求数量，小于等于全部实验的总数|
  |data|评改实验要求和占比|
   
 
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


