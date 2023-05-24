interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
const seho: User = {
    age: 10,
    name: 'seho',
}

// 함수에 인터페이스 활용
function getUesr(user: User) {
    console.log(user);
}
getUesr({
    age: 10,
    name: 'seho',
    // school: 'buyeo' // error
})
const seongdae = {
    age: 10,
    name: 'seongdae',
    gender: 'male'
}
getUesr(seongdae);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number
}

const sum: SumFunction = function(a: number, b: number) {
    return a + b;
}

// 인덱싱 방식을 정의하는 인터페이스
    // 속성을 미리 부여하지 않고, 사용할 때 부여해서 활용하는 방식 ?
    // string : 배열의 요소의 타입 정의
interface StringArray {
    [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c']
// arr[0] = 10; error
arr[0] = 'd';

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}
const obj: StringRegexDictionary = {
    cssFile: /\.css%/
}
// obj['cssFile'] = 'a' // error

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

const capt: Developer = {
    name: 'capt',
    age: 20,
    language: 'ts'
}