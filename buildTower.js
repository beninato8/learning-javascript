var args = process.argv;
numFloors = 5;
if (args.length > 2)
{
    numFloors = args[2];
}

var x = towerBuilder(3);
for (var i = 0; i < x.length; i++) 
{
    console.log(x[i]);
}

function towerBuilder(nFloors)
{
    var floors = [];
    var maxStars = (nFloors * 2) - 1
    var numStars = 1;
    var numSpaces = (maxStars - numStars)/2
    var line = "";
    for (var i = 0; i < nFloors; i++)
    {
        for (var j = 0; j < numSpaces; j++)
        {
            line += " ";
        }
        for (var j = 0; j < numStars; j++)
        {
            line += "*"
        }
        for (var j = 0; j < numSpaces; j++)
        {
            line += " ";
        }
        floors.push(line);
        numStars += 2;
        numSpaces -= 1;
        line = "";
    }
    // console.log(floors);
    return floors
}