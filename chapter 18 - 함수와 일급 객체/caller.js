// callee ? 함수 자신을 호출한 함수를 의미! 
function customer() {
    console.log('customer caller : ', customer.caller);
    server();
}

function server() {
    console.log('server caller :', server.caller);
}

console.log('customer() : ');
customer();
/**
customer caller :  [Function (anonymous)]
server caller : [Function: customer]
→ server 함수 내부에서 customer 정보가 출력되는 것을 확인할 수 있다
 */

console.log('\nserver() : ');
server();  // server caller : [Function (anonymous)] → server 함수 내부에서 익명 함수 정보가 출력되는 것이 확인됨 (node 환경이기에)

// ※ ESM 사양에 포함되어 있지 않은 비표준의 property이기에 알아두기만 하자