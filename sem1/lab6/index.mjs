import { task } from './func.mjs';
const x = { name: Promise.resolve('Champion')};
console.log(await task(x));