﻿<!-- markdownlint-disable MD033-->
<!-- 禁止MD033类型的警告 https://www.npmjs.com/package/markdownlint -->

# 接口：getStudents  [返回](../README.md)
用例： [学生列表](../用例/stu_list.md)

- 权限：
    学生：不能看到RESULT_SUM，WEB_SUM
    老师：可以看到RESULT_SUM，WEB_SUM。

- 功能：
    返回所有学生的列表。

- API请求地址：
   接口基本地址/sys/api/getStudents

- 请求方式 ：
    GET

- 请求参数说明:
    无

- 返回实例：

        {
            "status": true,
            "info": null,
            "total": 100,
            "data": [
                {"WEB_SUM": "Y,Y,Y,Y,Y,N",
                "RESULT_SUM": "90，90，88，80，N",
                "GITHUB_USERNAME": "jiangnhao",
                "STUDENT_ID": "20171041",
                "CLASS": "软件工程（本）17-2",
                "NAME": "李浩",
                "UPDATE_DATE": "2020-03-02 18:28:31"},
                {
                ...其他学生
                }
            ]
        }

- 返回参数说明：

  |参数名称|说明|
  |:---------:|:--------------------------------------------------------|
  |status|bool类型，true表示正确的返回，false表示有错误|
  |info|返回结果说明信息|
  |total|返回学生人数|
  |data|所有学生的数组|
  |WEB_SUM|网址是否正确的汇总|
  |RESULT_SUM|成绩的汇总|
  |GITHUB_USERNAME|GITHUB 用户名|
  |STUDENT_ID|学号|
  |CLASS|班级|
  |SEX|性别|
  |NAME|真实姓名|
  |UPDATE_DATE|GitHUB用户名修改日期|
  