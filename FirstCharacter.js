
// QUESTION 3

// You are given with T number of strings. You need to sort the strings according to their first character.
// Input :
// 4
// “AXXX”
// “UVVVV”
// “PGGGG”
// “BOOUU”

// Output :
// “AXXX”
// “BOOUU”
// “PGGGG”
// “UVVVV”
   

    var num = prompt("Enter number of strings", "<number of strings>");
    
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr[i]=prompt("Entter the strings","<enter strings here>");
    }
    
    for(var j=0;j<num;j++)
    {
        for(var k=j;k<num;k++)
        {
             if(arr[j].charAt(0)>arr[k].charAt(0))
             {
                 var temp=arr[j];
                 arr[j]=arr[k];
                 arr[k]=temp;
             }
        }
    }
    for(var p=0;p<num;p++)
    {
        console.log(arr[p]);
    }
    
