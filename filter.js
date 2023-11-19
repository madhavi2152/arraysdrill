let even_array=[];
function filter(array,cb)
{
    for(let index=0;index<array.length;index++)
    {
        if(cb(array[index])===true)
        {
            even_array.push(array[index]);
        }
        else continue;
    }
    return(even_array);

}
module.exports=filter;