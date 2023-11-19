function reduce(array,cb)
{
    let output=[];
    for(let i=0;i<array.length;i++)
    {
        if(cb(array[i],i))
        {
            let element=0;
            let index=i;
            output.push({element,index});
        }
        else 
        continue;
    }   
    return output;
}
module.exports=reduce;