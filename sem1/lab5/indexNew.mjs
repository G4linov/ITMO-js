import { task } from './index.mjs';
console.log(await task(0)); // date
console.log(await task(4)); // yes
console.log(await task(15)); // yes

try {
    console.log(await task(18)); // no
   } catch (e) {
    console.log(e);
   } 