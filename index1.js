function checkLorem(a) {
    let counter = 0;
    const strArray = a.toLowerCase().split(' ');
    for (let i = 0; i < strArray.length; i++) {
        counter++;
        if (strArray[i] === 'lorem') { break; }
        
    }
    return counter;
}
const str = "asdasd ipsum dolor sit, amet consectetur adipisicing elit. Qui fugiat illo sunt dolores sed sint voluptatem consequatur Lorem rem cupiditate ipsa dignissimos excepturi hic beatae vel laudantium porro, voluptate obcaecati est.";
console.log('Given string');
console.log(str);
console.log('');
console.log('Position of first lorem');
console.log(checkLorem(str));
console.log('');
