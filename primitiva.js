// App que itera un millón de veces la peticion de dar 6 números de manera random del 1 al 49 y deveulve los 6 números que más se han repetido.
//  Para que servira esta app? 😛🎰

const iterations = 1000000;
const numbers = new Array(49).fill(0);

for (let i = 0; i < iterations; i++) {
  const sixNumbers = new Set();
  
  while (sixNumbers.size < 6) {
    sixNumbers.add(Math.floor(Math.random() * 49) + 1);
  }
  
  for (const num of sixNumbers) {
    numbers[num - 1]++;
  }
}

const sortedNumbers = numbers.map((count, num) => [num + 1, count])
  .sort((a, b) => b[1] - a[1]);

console.log(sortedNumbers.slice(0, 6));
