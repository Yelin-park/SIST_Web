<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h3>ex01_ok_02.jsp</h3>
<!-- cars=kia
deptno=30 -->
<%
	String content = request.getParameter("content");
%>

<!-- ex01 파일에서 입력해서 전송을 하면 페이지소스에는 보이지만 웹브라우저 상에서는 보이지 않음 -->
하고 싶은 말 : 
<br>
<!-- input 태그에서 hidden을 사용하는 이유 중요하다. 나중에 알려주실 예정 -->
<input type="hidden" name="content" value="<%= content.replace("\r\n", "<br>") %>"> <!-- 홍길동이라는 값(value)을 숨기겠다(hidden) -->


<!-- 개행하는 코딩을 \r\n => <br>로 바꾸기 -->
</body>
</html>