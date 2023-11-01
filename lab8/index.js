function task(nam, fam, login = 'mylogin') { this.name = nam; this.familyname = fam; this.login = login; }
const z = new task('Galinov', 'Vyacheslav', 'salatt');
task.prototype
task.prototype.getFullName = z.name + z.familyname + '!';
console.log(z.getFullName)