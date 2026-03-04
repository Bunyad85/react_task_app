const reviewTemplates = [
    {
        id: "r1",
        name: "Alex Stanton",
        role: "CEO at Bukalapak",
        text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        rating: "4.8",
    },
    {
        id: "r2",
        name: "Skylar Dias",
        role: "CEO at Amazon",
        text: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
        rating: "4.7",
    },
]

export const reviews = Array.from({ length: 12 }, (_, index) => {
    const base = reviewTemplates[index % reviewTemplates.length]
    return { ...base, id: `${base.id}-${index + 1}` }
})
