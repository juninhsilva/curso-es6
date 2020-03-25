let user = {
    name: 'Junior'
}

user.name = 'Juninh';
console.log(user);
user['name'] = 'Juninh Silva';
console.log(user);

const prop = 'name'
user[prop] = 'JuninhSilva14';

console.log(user);

function getProp(prop) {
    return user[prop];
}

console.log(getProp('name'));

user.lastName = 'Pereira';

console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.keys(user));
Object.assign(user, { fullName: user.name + ' Silva' });
console.log('Assign: ', user);
console.log('Novo objeto com assign: ', Object.assign({}, user, { age: 30 }));
console.log(user);
delete user.lastName;
console.log(user);
Object.freeze(user);
console.log(user);