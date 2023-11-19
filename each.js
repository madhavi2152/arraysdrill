function feach(array,cb)
{
    let max=0;
    for(let i=0;i<array.length;i++)
    {
        max=cb(array[i],max);
    }
    return max;
}
module.exports=feach;