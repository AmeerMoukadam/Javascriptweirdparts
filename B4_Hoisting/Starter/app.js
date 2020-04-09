b();
console.log(a);


var a = 'Hello World!';

function b() {
    console.log('Called b!');
}
// the code above will run fine, however due to hoisting,
// the value of the variable will be undefined but the function
// will run fine so it is better to write like this below



var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

b();
console.log(a);