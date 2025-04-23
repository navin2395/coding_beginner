
const name={
    name: "Dell",
    cpu: "i7",
}

const name2={
    name: "HP",
    cpu: "i9",
}

 console.log(Object.keys(name));
// // console.log(Object.values(name));

 Object.keys(name).forEach((key) => name2.hasOwnProperty(key) && name2[key] === name[key] ? console.log("The two objects are equivalent.") : console.log("The two objects are not equivalent."));
