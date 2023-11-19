function flatten(array,cb)
{
    let output=[];
    for(let i=0;i<array.length;i++)
    {
        output=output.concat(Array.isArray(array[i])? cb(array[i]):array[i]);
    }
    return output;
}

module.exports=flatten;