var input = process.argv.slice(2);
var input2 = input[0];
var t = JSON.stringify(input);

var n = t.length;
console.log( n);
if(n>12)
{
    console.log("too long");
}
else if (n<8)
{
    console.log("too short");
}
else 
{
    console.log("okay");
}