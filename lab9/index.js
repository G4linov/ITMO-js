let digit = Number(0);
function task(newtask) {
    if (newtask !== null) {
        if (Object.getPrototypeOf(newtask) !== null) {
            digit = digit + 1;
            return task(Object.getPrototypeOf(newtask)); }
        else {
            return digit }
        }
    else {
        return new Date().toISOString().split('T')[0].split('-').reverse().join('.');
    }
}

const newtt = {'Vyacheslav': '25'}
console.log(task(newtt))