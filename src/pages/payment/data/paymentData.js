export const cities = ["Baku", "Ganja", "Sumqayit"]
export const times = ["10:00", "12:00", "03:00"]
export const pickupDates = ["12 March 2026", "13 March 2026", "14 March 2026"]
export const dropoffDates = ["14 March 2026", "15 March 2026", "16 March 2026"]

export const billingFields = [
    { label: "Name", placeholder: "Your name" },
    { label: "Address", placeholder: "Address" },
    { label: "Phone Number", placeholder: "Phone number" },
    { label: "Town / City", placeholder: "Town or city" },
]

export const cardFields = [
    { label: "Card Number", placeholder: "Card number" },
    { label: "Card Holder", placeholder: "Card holder" },
    { label: "Expiration Date", placeholder: "DD / MM / YY" },
    { label: "CVC", placeholder: "CVC" },
]

export const paymentMethods = [
    { name: "PayPal", brandClass: "paypal-brand", brandText: "PayPal" },
    { name: "Bitcoin", brandClass: "bitcoin-brand", brandText: "bitcoin" },
]

export const confirmTexts = [
    "I agree with sending an Marketing and newsletter emails. No spam, promised!",
    "I agree with our terms and conditions and privacy policy.",
]

export const paymentSteps = {
    billing: {
        title: "Billing Info",
        description: "Please enter your billing info",
        step: "Step 1 of 4",
    },
    rental: {
        title: "Rental Info",
        description: "Please select your rental date",
        step: "Step 2 of 4",
    },
    method: {
        title: "Payment Method",
        description: "Please enter your payment method",
        step: "Step 3 of 4",
    },
    confirmation: {
        title: "Confirmation",
        description: "We are getting to the end. Just few clicks and your rental is ready!",
        step: "Step 4 of 4",
    },
}
