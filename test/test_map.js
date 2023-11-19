let items=require("../index.js");
let map=require("../map.js");

function cb(first_occurance, index)
{
    if(first_occurance===index)
    return true;
}
let uniquearray=map(items,cb);
console.log(uniquearray);
