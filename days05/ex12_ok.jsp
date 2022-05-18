<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h3>ex12_ok.jsp 파일</h3>
<!-- ex12.html에서 입력한 fname과 lname을 전송받았다.
fname/lname jsp 파일로 전송 -> DB 처리 또는 응답 -->
<%
	// ?fname=aa&lname=bb
	// java 코딩
	String fname = request.getParameter("fname");
	String lname = request.getParameter("lname");
%>

ex12.html 입력한 first name = <%= fname %><br>
ex12.html 입력한 last name = <%= lname %><br>
</body>
</html>