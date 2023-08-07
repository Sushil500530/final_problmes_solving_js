function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function nthPrime(n) {
    let count = 0;
    let num = 1;
    while (count < n) {
        num++;
        if (isPrime(num)) {
            count++;
        }
    }
    return num;
}

const n = parseInt(prompt("Enter the value of n:"));
console.log(`The ${n}th prime number is: ${nthPrime(n)}`);
