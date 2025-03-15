const fruits = ["Apple", "Banana", "Cherry"];

fruits.push("Grape");

console.log(fruits);

const randomThings: (string | number | boolean)[] = ["Tomato", 2, true];

console.log(randomThings)

// ---------------------------

function greet(name?: string): string {
  return `Hello, ${name ?? "Brother"}`;
}

console.log(greet("Kadek"))

// ---------------------------

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

// ---------------------------

// Generic Types
// enum
// type
// Omit
// Record
// satisfies
// any or unknown