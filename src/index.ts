// Basic Type and Variable

let myName: string = "Ketut";

let myAge: number = 25;

let isStudent: boolean = true;



// Basic Array

const fruits = ["Apple", "Banana", "Cherry"];

fruits.push("Grape");

console.log(fruits);

const randomThings: (string | number | boolean)[] = ["Tomato", 2, true];

console.log(randomThings)



// Basic Object

type PersonalInfo = {
  name: string;
  age?: number;
  isStudent?: boolean;
}

const personalInfo: PersonalInfo = {
  name: "Ketut",
  age: 25,
  isStudent: true
};

personalInfo.age = 26;

console.log(personalInfo);

const myPersonalInfo: PersonalInfo = {
  name: "Putut",
  age: 31,
  isStudent: true
}

myPersonalInfo.name = "Putu"
myPersonalInfo.age = 30

console.log(myPersonalInfo)



// Basic Function

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3))

function greet(name?: string): string {
  return `Hello, ${name ?? "Brother"}`;
}

console.log(greet("Kadek"))

function stringToWordArray(str: string): string[] {
  return str.split(" ");
}

console.log(stringToWordArray("Hello World"))

function wordArrayToString(arr: string[]): string {
  return arr.join(" ");
}

console.log(wordArrayToString(["Hello", "World"]))



// Basic Class

// class Person {
//   name: string;
//   age?: number;
//   constructor(name: string, age?: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet(): string {
//     return `Hello, my name is ${this.name}`;
//   }
// }


// ---------------------------

// Generic Types
// enum
// type
// Omit
// Record
// satisfies
// any or unknown