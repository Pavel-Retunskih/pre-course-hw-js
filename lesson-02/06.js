let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

function getClone(object){
    let clone={};
    for (const key in object) {
        if (typeof(object[key]) =='object'){
            clone[key] = getClone(object[key]);            
        } else clone[key] = object[key]
    }
    return clone;
}
let result = getClone(passportWithAddress);
result.address.city = 'Bobryisk'

console.log(passportWithAddress.address.city);
console.log(result.address.city);