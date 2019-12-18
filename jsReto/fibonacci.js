const fibonacci = (num) => { //Secuencia fibonacci una cantidad de veces
  const arrNum = [];

  if (num >= 0) {
    for (let i = 0; i < num; i++) {

      if (i <= 1) arrNum.push(i);
      else arrNum.push(arrNum[i - 1] + arrNum[i - 2])

    }
    return arrNum;
  } else return 'El número debe ser mayor o igual a 0';

}

const fibonacci2 = (num) => { // Número fibonaci de n

  // Recursividad (se demora más tiempo)
  // if (num <= 1) return num;
  // else if (num > 1) return fibonacci2(num - 1) + fibonacci2(num - 2);

  let a = 1;
  let b = 0;

  if (num >= 0) {

    while (num >= 0) {
      b = b + a;
      a = b - a;
      num--;
    }
    return a;

  } else return 'El número debe ser mayor o igual a 0';
}


console.log(fibonacci(10))
console.log(fibonacci2(9))