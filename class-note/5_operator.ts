// 유니온 타입
function logMessage(value: string | number) {
    console.log(value);
}
logMessage('hello')
logMessage(100)

// 유니온 타입의 장점
    // 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 과정
function logMessage2(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString();
    } 

    if(typeof value === 'string') {
        value.toString();
    }

    throw new Error(`value must be string or number`)
}
logMessage('hello')
logMessage2(100)

// 유니온 타입의 특징
    // 유니온 타입 멤버들의 공통 속성에만 접근 가능
interface brand {
    name: string;
    rank: number;
}
interface prada {
    name: string;
    type: string;
}

function getBrand(brand: brand | prada) {
    brand.name;
    // brand.rank; // error
    // brand.type; // error
}
getBrand({name: '브랜드', rank: 1})
getBrand({name: '프라다', type: '가방'})

// 인터섹션 타입
    // 인터섹션 타입의 멤버를 모두 만족하는 하나의 타입을 의미
    // 즉, 인터섹션 타입의 멤버들의 속성을 모두 접근할 수 있는 타입으로 취급
    // 따라서, 모든 속성에 접근 가능
type wholeBrand = brand & prada;

function getBrand2(brand: wholeBrand) {
    brand.name;
    brand.rank;
    brand.type;
}
getBrand2({name: '브랜드프라다', rank:1, type: '가방'})
// getBrand2({name: '브랜드', rank: 1}) // error
// getBrand2({name: '프라다', type: '가방'}) // error