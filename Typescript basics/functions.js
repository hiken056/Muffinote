var calculateMyAge = function (birthYear) {
    return new Date(Date.now()).getFullYear() - birthYear;
};
var myAge = calculateMyAge(1994);
console.log(myAge);
function greetMe(userInfo) {
    return (userInfo.name + " its nice to know that yoy are " +
        userInfo.age + " years old");
}
console.log(greetMe({ name: "John", age: myAge }));
