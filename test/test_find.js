let array=require("../index.js");
let find=require("../find.js");

function cb(element)
{
    if(element%2==0)
    return true;
}

let first_even_number=find(array,cb);
console.log(first_even_number);