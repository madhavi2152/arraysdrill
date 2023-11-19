let array=require("../index.js");
let each=require("../each.js");

function cb(element,max)
{
    return Math.max(element,max);
}


let max_ele=each(array,cb);
console.log(max_ele);