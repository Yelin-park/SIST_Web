/**
 * 
 */
function getAllCookies(){
	var cookies = document.cookie;
	return cookies;
}

function setCookie(cname, cvalue, expdays){
		// 만료시점
	    var now = new Date();
	    var day = now.getDate() + expdays;
	    now.setDate(day);
	
	    // 쿠키저장
	    document.cookie = cname + "=" + escape(cvalue) + "; expires="+now.toUTCString();
}

function getCookie(cname){
		var cookies = document.cookie; // 모든 쿠키 정보
		var pattern=/;\s/;
	    var cookieArray = cookies.split(pattern);
	    
	    for (var i = 0; i < cookieArray.length; i++) {
	    	 var cnv = cookieArray[i].split("=");
	         cn = cnv[0];
	         cv = cnv[1];
	         if(cn == cname){
	             return unescape(cv); // 해당하는 쿠키명의 쿠키값을 돌려줌
	         } // if
		} // for
		return null; // 해당하는 쿠기가 없을 때 null 반환
}

function delCookie(cname){
		// 만료시점
	    var now = new Date();
	    var day = now.getDate() - 10;
	    now.setDate(day);
	 
	    // 쿠키저장
	    document.cookie = cname+"=;expires="+ now.toUTCString();
}