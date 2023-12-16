let passport = {
    name: "Petr",
    surname: "Petrov",
};

let clone = {...passport};
clone.name = 'Ivan';
console.log(clone.name);
console.log(passport.name);