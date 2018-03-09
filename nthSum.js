var args = process.argv;
num = 5;
if (args.length > 2)
{
    num = args[2];
}

console.log(SeriesSum(num));

function SeriesSum(n)
{
    numer = 1;
    denom = 1;
    var sum = 0;
    for (var i = 0; i < n; i++) 
    {
        sum += (numer/denom);
        denom += 3;
    }
    sum = sum.toFixed(2);
    return sum.toString();
}