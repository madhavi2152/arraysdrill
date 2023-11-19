let array=require("../index.js");
let reduce=require("../reduce.js");

function cb(element,index)
{
    if(element%2===0)
    {
        return true;
    }
        else 
        return false;

}

let even_number=reduce(array,cb);
console.log(even_number);