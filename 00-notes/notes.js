// ##########################
// Big O Basics
// ##########################

// notation used to describe the performance of algorithms
//  emphasis on how performance scales with the input size
// approximation

// why use Big-O?
//  allows us to compare performance of algorithms
// prefer algorithms that use less time/less memory
// doesnt rely on the environment (language, hardware etc)

// Big-O simplification rules
// drop any constant factors O(4n) -> O(n)
// trying to describe behaviour as input size grows so we can drop constants
// O(n/2) -> O(n)

// drop smaller terms in a sum of multiple terms:
// O(n**2 + n) -> O(n**2)
// O(n + n**4 + n**2) -> O(n**4)
// O(n**4 - n**3) -> O(n**4)

// O(4n**2 + n + 5) -> drop constants O(n**2 + n + 5) -> drop small terms O(n**2)

// in an interview situation you would give simplified O notation so its easy to compare your algorithm

// classifications
// worse = more memory/time

// O(n!) -> 8! = 8*7*6*5..*1 = 40320 = factorial
// O(c**n) -> O(2**n), O(3**n) = exponential
// O(n**c) -> e.g. O(n**2), O(n**3) = polynomial
// O(n) = linear
// O(log(n)) -> 2**5 =32 -> log_base_2(32)=5 (you have to divide 32 by 2 , 5 times to get to 1) = logarithmic
// O(1) = constant -> performance does not scale with the input size

// better = less memory/time
