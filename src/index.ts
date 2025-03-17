// #region Basic Type and Variable

let myName: string = "Ketut";

let myAge: number = 25;

let isStudent: boolean = true;

console.log(myName); // Output: Ketut
console.log(myAge); // Output: 25
console.log(isStudent); // Output: true

let myAnyVar: any = "Hello";

myAnyVar = 123;

myAnyVar = true;

console.log(myAnyVar); // Output: true


// #endregion

// #region Basic Enum

type TRGB = "Red" | "Green" | "Blue";

enum RGB {
  Red = "Red",
  Green = "Green",
  Blue = "Blue"
}

// let myFavoriteColor: TRGB = "Yellow"; // Error: Type '"Yellow"' is not assignable to type 'TRGB'.

const myFavoriteColorEnum: TRGB = "Green";
console.log(myFavoriteColorEnum); // Output: Red

console.log(RGB.Blue); // Output: 0

// #endregion

// #region Basic Array

const fruits = ["Apple", "Banana", "Cherry"];

fruits.push("Grape");

console.log(fruits);

const randomThings: (string | number | boolean)[] = ["Tomato", 2, true];

console.log(randomThings)

// #endregion

// #region Basic Object

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

// #endregion

// #region Basic Record

type FruitCount = Record<string, number>;

const fruitCount: FruitCount = {
  apple: 10,
  banana: 5,
  orange: 7,
};

console.log(fruitCount)

type FruitCountDetail = Record<string, { count: number; price: number }>;

const fruitCountDetail: FruitCountDetail = {
  apple: { count: 10, price: 1 },
  banana: { count: 5, price: 0.5 },
  orange: { count: 7, price: 0.8 },
};

console.log(fruitCountDetail)

type FruitEnum = "apple" | "banana" | "orange";

type FruitCountDetailWithEnum = Record<FruitEnum, { count: number; price: number }>;

const fruitCountDetailWithEnum: FruitCountDetailWithEnum = {
  apple: { count: 10, price: 1 },
  banana: { count: 5, price: 0.5 },
  orange: { count: 7, price: 0.8 },
  // peach: { count: 3, price: 0.7 } // Error: Type '"peach"' is not assignable to type '"apple" | "banana" | "orange"'
};

console.log(fruitCountDetailWithEnum.orange)

// #endregion

// #region Basic Omit

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string;
};

type UserWithoutPassword = Omit<User, "password">;

const user: UserWithoutPassword = {
  id: 1,
  name: "John",
  email: "john@example.com",
  age: 30,
  // password: "password123" // Error: Type 'string' is not assignable to type 'never'.
};

type UserWithoutPasswordAndEmail = Omit<User, "password" | "email">;

const user2: UserWithoutPasswordAndEmail = {
  id: 1,
  name: "John",
  age: 30,
  // password: "password123" // Error: Type 'string' is not assignable to type 'never'.
  // email: "john@example.com" // Error: Type 'string' is not assignable to type 'never'.
}

console.log(user2)

// #endregion

// #region Basic Function

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

// #endregion

// #region Basic Class

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

// #endregion



// -----------------------------------------------------------------------------------

// Generic Types
// type vs interface // I am not sure if this is needed for basic, but for now, I will use type for consistency.
// satisfies
// any or unknown