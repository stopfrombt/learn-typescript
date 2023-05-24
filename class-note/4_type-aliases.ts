// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

const seho: Person = {
    name: '세호',
    age: 30
}

type MyString = string;
const str: MyString = 'hello';

// 인터페이스와 타입 별칭의 차이점
    // 타입 별칭은 확장 불가
    // 인터페이스는 확장 가능
    // 가능한한 type 보다는 interface 로 선언해서 사용하는 것을 추천