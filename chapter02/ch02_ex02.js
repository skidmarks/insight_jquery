var a;

console.log(typeof(a));

a = "hello world";

console.log(typeof(a));

a = 10000;

console.log(typeof(a));

a = null;
console.log(typeof(a));


a = [1, 2, 3];

console.log(typeof(a));

console.log(typeof(asdf));

/*
    모든 참조 타임은 object를 리턴한다.
    정의되지 않은 변수는 undefined를 리턴한다.

    배열 a 에 대해 typeof 연산자를 수행한 결과 object 리턴

    asdf라는 변수는 정의하지 않은 변수지만 typeof 연산자를 수행했을 때의 실행 결과는 
    var 키워드로 변수를 선언했지만 값을 부여하지 않은 경우와 동일하게 undefined를 리턴한다.

*/