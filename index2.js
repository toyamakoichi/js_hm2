function foo(array)
{
    const newArray=[];
    for(let i=0;i<array.length;i++)
    {
       
        if(array[i]%2===0){
            if(array[i]%13===0){
                array[i]-=5;
            }
            newArray.push(array[i]*2);
        }
        else{
            if(array[i]%13===0){
                array[i]-=5;
            }
            newArray.push(array[i]/2);
        }
    }
    return newArray;
}
const arr=[];
for(let i=0;i<10;i++)
{
    arr[i]=Math.floor(Math.random()*100)+1;
}
console.log('Random array [1;100]');
console.log(arr);
console.log('');
console.log('New array');
console.log(foo(arr));
console.log('');