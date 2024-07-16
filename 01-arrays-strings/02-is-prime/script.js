console.log("hello 2");

function isPrime(num) {
  let isPrime = true;
  if (num < 2) {
    isPrime = false;
    console.log(num, isPrime);

    return isPrime;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;

      console.log(num, isPrime);
      return isPrime;
    }
  }
  console.log(num, isPrime);
  return isPrime;
}

isPrime(1); // -> true
isPrime(3); // -> true
isPrime(4); // -> false
isPrime(5); // -> true
isPrime(6); // -> false
isPrime(8); // -> false
isPrime(25); // -> false
isPrime(31); // -> true
isPrime(2017); // -> true
isPrime(2048); // -> false
isPrime(1); // -> false
isPrime(713); // -> false
