function primeNumberChecker(number) {
    let n = 2;
    let isPrime = false;
    for (i = 2; i < number; i++) {
        if ( number % n === 0) {
            isPrime = true;
            break;
        }
        n++;
    }
    if (isPrime) {
        console.log(false);
    } else {
        console.log(true);
    }
}
primeNumberChecker(7);
primeNumberChecker(8);