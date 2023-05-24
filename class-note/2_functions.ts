// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b;
}

// 함수의 반환 값에 타입을 정의하는 방식
function add(a: number, b:number): number {
    return a + b;
}

// 함수에 타입을 정의하는 방식
function finalSum(a: number, b: number): number {
    return a + b;
}

// 함수의 Optional Properties
function optionalSum(a: number, b?: number): number {
    if(b !== undefined)
        return a + b;
    
    return a;
}

optionalSum(10);
optionalSum(10, 20);
