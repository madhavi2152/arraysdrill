let unique_array=[];
function map(array, cb)
{
    for(let i=0;i<array.length;i++)
    {
        if(cb(array.indexOf(array[i]),i)==true)
        unique_array.push(array[i]);
    }
    return unique_array;
}
module.exports= map;
