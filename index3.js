function checkLI(a)
{
    let counter=0;
    const strArr=a.toLowerCase().split(' ');
    for (let i = strArr.length-1; i >= 0; i--) {
        if(strArr[i]==='lorem' && strArr[i+1]==='ipsum'){break;};
        counter++;
    }
    return strArr.length - counter;
}
console.log('Given string');
console.log("LoRem ipsum jsdknfg aedqwfgnsdjkg fjn fkdj askdjsajdn lorem ipsum jska dnasdl;asdkasld lOreM ipsum adospkasidksa oasijndjska");
console.log('');
console.log('Position of last lorem ipsum');
console.log(checkLI("LoRem ipsum jsdknfg aedqwfgnsdjkg fjn fkdj askdjsajdn lorem ipsum jska dnasdl;asdkasld lOreM ipsum adospkasidksa oasijndjska"));
console.log('');
