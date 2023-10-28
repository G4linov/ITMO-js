import moment from "moment";

console.log(moment().format('DD.MM.YYYY HH:mm:ss'));

new Date().toISOString().split('T')[0].split('-').reverse().join('.')