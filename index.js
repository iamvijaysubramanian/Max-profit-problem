function calculateEarnings(timeUnit) {
  const maxTheatres = Math.floor(timeUnit / 5);
  const maxPubs = Math.floor(timeUnit / 4);

  let maxEarnings = 0;
  let optimalSolution = "";

  let t = maxTheatres;
  let p = 0;
  let c = 0;

  while (t >= 0) {
    const totalTime = t * 5 + p * 4 + c * 10;

    if (totalTime <= timeUnit) {
      const earnings = t * 1500 + p * 1000 + c * 3000;

      if (earnings > maxEarnings) {
        maxEarnings = earnings;
        optimalSolution = `T: ${t} P: ${p} C: ${c}`;
      }
    }

    if (p < maxPubs) {
      p++;
    } else {
      t--;
      p = 0;
      c = Math.floor((timeUnit - t * 5) / 10);
    }
  }

  return { maxEarnings, optimalSolution };
}

// Test case 1
const timeUnit1 = 7;
const { maxEarnings: earnings1, optimalSolution: solution1 } =
  calculateEarnings(timeUnit1);
console.log(`Test Case 1 - Time Unit: ${timeUnit1}`);
console.log(`Earnings: $${earnings1}`);
console.log(`Solution: ${solution1}\n`);

// Test case 2
const timeUnit2 = 8;
const { maxEarnings: earnings2, optimalSolution: solution2 } =
  calculateEarnings(timeUnit2);
console.log(`Test Case 2 - Time Unit: ${timeUnit2}`);
console.log(`Earnings: $${earnings2}`);
console.log(`Solution: ${solution2}\n`);

// Test case 3
const timeUnit3 = 13;
const { maxEarnings: earnings3, optimalSolution: solution3 } =
  calculateEarnings(timeUnit3);
console.log(`Test Case 3 - Time Unit: ${timeUnit3}`);
console.log(`Earnings: $${earnings3}`);
console.log(`Solution: ${solution3}`);
