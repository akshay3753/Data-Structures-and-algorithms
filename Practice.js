let obj1 = {
    name_1 : "Akshay",
    degree: "Btech",
    food: "Pizza"
}

delete obj1.name_1;
let {degree, ...remainingproperties} = obj1;
console.log(obj1.degree !== undefined);
