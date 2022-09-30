console.log(A1);

var A1 = "helllo";

A2 = "world";

console.log(A2);

/**
 * 위 코드의 경우 ex05.js 예제와는 달리 에러가 발생하지 않고 undefined가 출력된다.
 * 
 * <script>코드 블럭 내부의 코드가 실행되기도 전에 전역 실행컨텍스트가 생성되고, 
 * var 키워드가 포함된 변수가 미리 만들어졌기 때문에 A1변수는 이미 존재하는 상태이다.
 * 
 * 값이 할당되지 않았으므로 undefined 상태이긴 하지만 변수는 분명 존재한다.
 * 
 */