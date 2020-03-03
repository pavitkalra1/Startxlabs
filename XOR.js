//QUESTION 2

// For each testcase, in the new line print "Odd" if the XOR in the range is odd, else print "Even".
// Sample Input:
//   4
//   1 4
//   2 6
//   3 3
//   2 3

// Sample Output:
//   Even
//   Even
//   Odd
//   Odd

    var num = prompt("Enter testcases", "<number of testcases>");
    var res=[];
    var arr=[];
    var arr1=[];
    for(var i=0;i<num;i++)
    {
      
        arr[i]=prompt("Entter first value","<enter strings here>");
        arr2[i]=prompt("Entter second value","<enter strings here>");
    }


    
for(var f=0;f<num;num++)
{
var x=arr[f];
    for(i=arr[f];i<=arr1[f];i++)
    {
        x=i^x;
    }
    if(x%2==0) 
    res[f]="even";

    else
    res[f]="odd";
    
   
}
for(var p=0;p<num;p++)
{
    console.log(res[p]);
}