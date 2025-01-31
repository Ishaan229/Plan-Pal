export const SelectTravellerList = [
    {
        id: 1,
        title: 'Just me',
        desc: 'A solo curious traveller',
        icon: '🏍',
        people: '1'
    },
    {
        id: 2,
        title: 'Couple',
        desc: "Two's always better, right?",
        icon: '🚗',
        people: '2'
    },
    {
        id: 3,
        title: 'Family/Friends',
        desc: "Wholesome",
        icon: '🚐',
        people: '3 to 5 people'
    },
    {
        id: 4,
        title: 'Large Group',
        desc: "The whole gang?",
        icon: '🚃',
        people: '5 to 10 people'
    }
]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'A tight budget trip',
        icon: '🪙'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: "Average cost always",
        icon: '💰💰'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: "No worry of costs ",
        icon: '💰💰💰'
    }
]


export const AI_PROMPT = 'Generate Travel Plan for Location: {location} for {totalDays} Days for {traveller} with a {budgetType} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.'
