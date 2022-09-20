var str =prompt("enter a word");
var a = str.length;
count = 0;
for(i=0;i<a;i++)
{
    if(str[i]=='a '|| str[i]== 'e' || str[i]=='i' || str[i]== 'o' || str[i]== 'u')
{
    count++
}
}
console.log(count)