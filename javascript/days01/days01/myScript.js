/**
 * 외부 자바 스크립트 파일 사용 장점
	1. html  코드와 분리할 수 있다.
	2. 유지, 보수, 확장 용이
	3. 캐싱 외부 스크립트 파일은 페이지 로드 속도를 높일 수 있다.
 */

document.write("홍길동 100<br>");

function myAlert(message){
	window.alert(message);	
}