## What you need understand before learn TypeScript

1. JavaScript Basics
2. Node.js Environment
3. Package Manager (npm/pnpm)
4. Familiar working with terminal

## How to create a new project with TypeScript:

1. Create new folder for the project.
2. In that folder, install TypeScript dependencies:

```
npm install typescript
```

3. Initiate a TypeScript project:

```
npx tsc --init
```

4. Create a new `.ts` file in the `src/` folder via terminal or via UI:

```
mkdir src
touch src/index.ts
```

5. Open the the project in your code editor, and update the `package.json` file with a new script:

```json
{
  "scripts": {
    "dev": "tsc && node ./build/index.js"
  },
  "devDependencies": {
    ...
  }
}
```

6. Configure the `tsconfig.json` file, add `"outDir": "./build"` to specify where the compiled JavaScript files should be placed. Also, set `"rootDir": "./src"` to indicate the root directory of your source files.

```json
{
  "compilerOptions": {
    ...
    "rootDir": "./src",
    ...
    "outDir": "./build",
    ...
  }
}
```

7. Try edit the `src/index.ts`, add several JavaScript code you know for testing the environment.

```ts
const myName = "Alfonso";
console.log(myName);
console.log("Hello World");
```

8. If you want build and run the project, execute the build script in terminal to compile TypeScript code into JavaScript:

```
npm run dev
```

9. Happy Coding.
