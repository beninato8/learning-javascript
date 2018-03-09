var args = process.argv;
arr = [];
if (args.length > 2)
{
    for (var i = 2; i < args.length; i++)
    {
        arr.push(parseInt(args[i]));
    }
}

console.log(arr);
console.log(removeSmallest(arr));

function removeSmallest(numbers) 
{
    if (numbers.length == 0)
    {
        return [];
    }
    mindex = numbers.indexOf(Math.min(...numbers));
    numbers.splice(mindex, 1);
    return numbers
}