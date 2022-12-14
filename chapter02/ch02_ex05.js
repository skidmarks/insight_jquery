console.log(A1);

/**
 * 전역 실행 컨텍스트와  var 키워드
 * 
 * 실행 컨텍스트(Execution Context)는 "자바스크립트 코드가 실행되는 환경"이라고 정의할 수 있으며 일종의 객체이다. 
 * 
 * 처음 자바스크립트 코드가 실행될 때 전역 실행 컨텍스트(Global Execution Context)에시 실행되며, 함수가 호출될 때마다
 * 새로운 실행 컨텍스트가 생성되어 스택(Stack)에 추가되고, 제어권은 새롭게 생성된 컨텍스트로 이동한다.
 * 
 * 자바스크립트 코드가 실행되면 가장 먼저 전역 실행 컨텍스트가 만들어진다. 이어서 선언적 방식의 함수가 먼저 실행 컨텍스트의 메서드
 * 형태로 만들어지고, 그 이후 var 키워드가 사용된 변수가 미리 만들어진다. 이 과정을 호이스팅(Hoisting)이라 부른다.
 */

/**
 * 간단한 한 줄 코드를 실행하면 A1 is not defined라는 애러를 발생한다.
 * 
 * 
 */