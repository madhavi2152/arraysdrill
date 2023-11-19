//te only dif between te find and filter is tat te find function will leave after findin te first matc and returns only one element.
function find(array,cb)
{
    let i=0;
    let b=0;
    for(i=0;i<array.length;i++)
    {
        if(cb(array[i])===true){
            b=array[i];
            break;
        }
    }
    return b;
}
module.exports=find;