"use strict";
//data :
//intitial amount 
//annual contribution
//expected return
//duration
function calculateInvestment(data) {
    const { initialAmout, annualContributaion, expectedReturn, duration } = data;
    if (initialAmout < 0) {
        return 'Initial investment amount must be at least zero ';
    }
    if (duration < 0) {
        return 'Duration must be at grater zero ';
    }
    if (expectedReturn < 0) {
        return 'Expected return must grater than zero  ';
    }
    let total = initialAmout;
    let totalContribution = 0;
    let totalIntrestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalIntrestEarned = total - totalContribution - initialAmout;
        totalContribution = totalContribution + annualContributaion;
        total = total + annualContributaion;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalIntrestEarned: totalIntrestEarned,
            totalContribution: totalContribution
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results == 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResults of results) {
        console.log(yearEndResults.year);
        console.log(`Total : ${yearEndResults.totalAmount.toFixed(0)}`);
        console.log(`Total Intrest Earned : ${yearEndResults.totalIntrestEarned.toFixed(0)}`);
        console.log('-------------------------------------');
    }
}
const investmentData = {
    initialAmout: 5000,
    annualContributaion: 500,
    expectedReturn: 0.08,
    duration: 10
};
const result = calculateInvestment(investmentData);
printResults(result);
