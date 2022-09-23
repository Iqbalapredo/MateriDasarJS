function saySomething(message){
    console.log(message);
}
function sayHi(message, callback){
    callback(message);
}
sayHi("Hello semua", saySomething);

function sayHi2(message){
    saySomething(message);
}
sayHi2("Hallo");

const array = [1,2,3,4,5];
array.map((value, index) => {
    console.log(`Value ke ${value}, index ke ${index}`);
});

const callbackFn = (value, index) => {
    console.log(`Value ke ${value}, index ke ${index}`);
};
array.map(callbackFn);