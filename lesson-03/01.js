const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter((e)=>{return e == 'черный'||e == 'красный'||e == 'желтый'}).join('-')
}

console.log(createColorString());
