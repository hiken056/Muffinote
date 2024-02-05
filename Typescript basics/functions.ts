const calculateMyAge = (birthYear: number):
    number => {
        return new Date(Date.now()).getFullYear() - birthYear
}

const myAge: number = calculateMyAge(1994);

console.log(myAge);


function greetMe(userInfo: {name:string; age:number}) : string {
    return (
        userInfo.name + " its nice to know that yoy are " +
        userInfo.age + " years old"
    );
}

console.log(greetMe({name: "John", age: myAge}));