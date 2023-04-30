const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};
// this function will calculate total with or without a subscription
function subscriptionFunction(pricePerRefill, refills, subscription) {
    let firstTotal = pricePerRefill * refills;
    let subscriptionTotal = firstTotal;
    if (subscription === true) { // If sub is true we will apply a 25% discount
        subscriptionTotal = firstTotal - (firstTotal * 0.25);
    }
    return subscriptionTotal;
};
// this function will calculate our total with or without a coupon
function couponFunction(subscriptionTotal, coupon) {
    let finalTotal = subscriptionTotal;
    if (coupon === true) { // If coupon is true we will remove $10 from our SubscriptionTotal
        finalTotal = subscriptionTotal - 10;
    }
    return finalTotal;
};
// this main function will use our two functions to calculate the final total in a string
function mainFunction(person) {
    let subscriptionTotal = subscriptionFunction( // Calculates subscription total
        person.pricePerRefill,
        person.refills,
        person.subscription
    );

 
    let finalTotal = couponFunction(subscriptionTotal, person.coupon); // Calculates final total
    console.log(`Your grand total is $${finalTotal}`);
};

mainFunction(timmy);
mainFunction(sarah);
mainFunction(rocky);
