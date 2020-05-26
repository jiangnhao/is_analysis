<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# 接口：getOneStudentScore  [返回](../README.md)
用例： [查看成绩](../用例/inquiry.md)，[评分](../用例/evaluate_grades.md)

- 功能：
    返回一个学生的所有实验成绩和实验评价。
    
- 权限：
    学生：只能查看自己的成绩，即接口参数student_id必须等于登录学生的student_id
    老师：可以查看所有学生的成绩。
    
- API请求地址： 
    接口基本地址/sys/api/getOneStudentScore/<student_id>

- 请求方式 ：
    GET

- 请求参数说明:        

  |参数名称|说明|
  |:---------:|:--------------------------------------------------------|      
  |STUDENT_ID|学生的学号|
    
- 返回实例：

        {         
            "status": true,
            "info": null,    
            "STUDENT_ID": "20171041", 
            "GITHUB_USERNAME": "jiangnhao",, 
            "CLASS": "软件工程（本）17-2", 
            "NAME": "李浩", 
            "TOTAL": 6,
            "AVGRESULT":99,       
            "data": [
                {
                "EXAMINATION_ID":3,
                "WEB-EXISTS": true, 
                "RESULT": 97, 
                "CONTENT":"实验完成情况良好",
                "UPDATE_DATE": "2020-04-30 19:38:05"
                }, 
                {
                ...其他实验
                }
            ] 
        }
 
- 返回参数说明：    
 
  |参数名称|说明|
  |:---------:|:--------------------------------------------------------|      
  |status|bool类型，true表示正确的返回，false表示有错误|
  |info|返回结果说明信息|
  |STUDENT_ID|学号|
  |GITHUB_USERNAME|学生的gitHub用户名|
  |CLASS|班级|
  |NAME|真实姓名|   
  |TOTAL|实验总数|
  |AVGRESULT|平时成绩|   
  |data|所有实验的成绩和评语|
  |EXAMINATION_ID|实验编号|
  |WEB-EXISTS|本实验的GitHub网页是否存在|
  |RESULT|本实验成绩，可以为空，为空表示没有批改，没有批改的实验不入平均成绩，为0分则要计入平均成绩，所以成绩为空和为0是不一样的。|
  |CONTENT|本实验老师的评价，可以为空|
  |UPDATE_DATE|本实验老师的批改日期，可以为空|


