// TS 문자열
const str: string = 'hello'

// TS 숫자
const num: number = 10;

// TS 배열
const arr: number[] = [1,2,3];
const arr2: Array<number> = [1,2,3];
const heroes: Array<string> = ['Capt', 'Thor', 'Hulk']

// TS 튜플
const address: [string, string, number] = ['city', 'nation', 0] 

// TS 객체
const obj: object = {};
const person: object = {
    name: 'capt',
    age: 100,
};
const typedPerson: { name: string, age: number } = {
    name: 'capt',
    age: 100,    
}

// TS 진위값
const show: boolean = true;