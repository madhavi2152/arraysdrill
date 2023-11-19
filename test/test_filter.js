let array=require("../index.js");
let filter=require("../filter.js");

function cb(element)
{
    if(element%2===0)
    return true;
}

let even_array=filter(array,cb);
console.log(even_array);