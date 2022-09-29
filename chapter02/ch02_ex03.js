var p1 = {name: "홍길동", "age": 20}
var p2 = new Object();
p2.name = "이몽룡";
p2.age = 16;
p1.email = 'gdhong@gmail.com';
p2.email = 'mrlee@gmial.com';

console.table(p1);
console.table(p2);

console.dir(p1);
console.dir(p2);

console.log(p1);
console.log(p2);

/**
 * 자바스크립트에는 클래스가 존재하지 않는다.
 * 객체는 키와 값의 쌍들로 이루어진다.
 * 
 * 객체를 생성하는 방식에는
 * 생성자 함수를 이용하는 방식
 * 객체 리터럴을 사용하는 방식이 있다.
 * 
 * 
 */

/**
 * 상수(Constant)와 리터럴(Literal)은 비슷해 보이지만 개념이 완전히 다르다.
 * 상수는 변수의 일종으로 일단 값이 주어지면 변경할 수 없는 변수를 의미한다.
 * 변수나 상수를 메모리에 할당된 공간이라고 한다면 러터럴은 변수나 상수에 저장되는 값을 표현하는 방식을 의미한다.
 * 다르게 말해 값의 표기법이라고도 한다.
 * 
 * 예를 들어 자바스크립트에서 문자열 리터럴은 "hello", 'hello'와 같은 형태이며,
 * 숫자 리터럴은 123과 같은 형태이다.
 * 이와 같은 맥락으로 객체 리터럴 형태를 생각하면 된다. ex {....}
 * 
 */