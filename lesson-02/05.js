let passport = {
    name: "Petr",
    surname: "Petrov",
};

let clone = {...passport};
passport.name = 'Ivan';
console.log(passport.name);
console.log(clone.name);