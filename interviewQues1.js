/**
 * Question: Print 10 fibonacci numbers in the console?
 * Given: firstNum = 0, secondNum = 1
 * output : 0,1,1,2,3,5,8,13,21,34
 */

const printFabNums = () =>{
  const fabNums = [0,1];
  fabNums.forEach(num=>{
    console.log(num);
  })
  for (let i = 2; i < 10; i++) {
    const element = fabNums[i-2] + fabNums[i-1]; //0+1
    fabNums.push(element);
    console.log(element);
  }
}

printFabNums();