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

// notes
//https://www.bbc.co.uk/bitesize/articles/z6gtng8#zhy2xbk

// Key points
// A prime number is a number that has exactly two
// factors
//  - itself and 1. There are an infinite number of prime numbers.

// Numbers that have more than two factors are called
// composite numbers
// . They can be expressed as a
// product
//  of prime numbers.

// The number 1 is not a prime number or a composite number. It is often referred to as a unit.

// The only even prime number is 2. All other even numbers can be divided by 2

// Knowledge of prime numbers helps in understanding of highest common factor (HCF), lowest common multiple (LCM) and product of prime factors.

// Knowledge of prime numbers is helpful in supporting understanding of highest common factor (HCF), lowest common multiple (LCM) and product of prime factors.

// definitions
// prime
// A whole number greater than 1 that has exactly two factors, itself and 1. Eg, 2 is a prime number (its factors are 2 and 1). 3 is a prime number (its factors are 3 and 1)

// factor
// A whole number that will divide into a selected number with no remainder.

// composite number
// A number that has more than two factors.

// product
// The result of multiplying one number by another, eg the product of 4 and 5 is 20 since 4 × 5 = 20

// highest common factor (HCF)
// The largest factor that will divide into the selected numbers. Eg, 10 is the highest common factor of 30 and 20. Highest common factor is written as HCF.

// lowest common multiple (LCM)
// The lowest multiple that is common to two or more numbers. The LCM of 15 and 12 is 60 because it is the lowest value in both of their multiplication tables. Also known as the least common multiple.

// product of prime factors
// The factors of 12 are 1, 2, 3, 4, 6 and 12. The prime factors of 12 are 2 and 3. 12 may be expressed as a product of its prime factors: 12 = 2 × 2 × 3
