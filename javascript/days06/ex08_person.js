/**
 * export 내보내기
	1) Named
	2) Default
	두 가지 유형으로 내보내기를 할 수 있다
 */

// name과 age를 별도의 js 모듈로 내보내기 하겠다.
/*
export const name = "admin";
export const age = 20;
*/

// 위의 코딩으로 해도 되고 아래 코딩으로 해도된다.
// 변수 선언 후 내보내기
const name = "admin";
const age = 20;

export {name, age};