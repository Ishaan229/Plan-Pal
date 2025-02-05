// import { GoogleGenerativeAI } from "@google/generative-ai";


// const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-pro",
// });

// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "application/json",
// };


// export const chatSession = model.startChat({
//     generationConfig,
//     history: [
//         {
//             role: "user",
//             parts: [
//                 { text: "Generate Travel Plan for Location: Las Vega for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time tt travel each of the location for 3 days with each day plan with best time to visit in JSON format." },
//             ],
//         },
//         {
//             role: "model",
//             parts: [
//                 { text: "```json\n{\n  \"tripDetails\": {\n    \"destination\": \"Las Vegas, Nevada\",\n    \"duration\": \"3 Days\",\n    \"budget\": \"Budget-Friendly\",\n    \"travelers\": \"Couple\"\n  },\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$$ (Varies depending on dates and availability)\", \n      \"hotelImageUrl\": \"https://www.excalibur.com/content/dam/mgm/excalibur/property/hero-gallery/excalibur-las-vegas-strip-daytime-view.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0987,\n        \"longitude\": -115.175\n      },\n      \"rating\": \"3.5 stars\",\n      \"description\": \"Medieval-themed resort with affordable rooms, various dining options, and entertainment.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Las Vegas\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$$ (Varies depending on dates and availability)\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/content/dam/mgm/circuscircus/property/hero-gallery/circus-circus-las-vegas-exterior-night.jpg\", \n      \"geoCoordinates\": {\n        \"latitude\": 36.1226,\n        \"longitude\": -115.168\n      },\n      \"rating\": \"3 stars\",\n      \"description\": \"Family-friendly resort with a circus theme, free circus acts, Adventuredome theme park, and budget-friendly rooms.\"\n    },\n    {\n      \"hotelName\": \"The LINQ Hotel + Experience\",\n      \"hotelAddress\": \"3535 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$$ (Varies depending on dates and availability)\",\n      \"hotelImageUrl\": \"https://static.mltv.org/images/content/57321/1600x900.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1167,\n        \"longitude\": -115.171\n      },\n      \"rating\": \"4 stars\",\n      \"description\": \"Modern hotel with a lively atmosphere, the High Roller observation wheel, and various dining and entertainment options.\"\n    } \n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"bestTimeToVisit\": \"Afternoon/Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"Welcome to Las Vegas Sign\",\n          \"placeDetails\": \"Iconic landmark for photo opportunities.\",\n          \"placeImageUrl\": \"https://www.lasvegashowto.com/wp-content/uploads/2020/12/welcome-to-las-vegas-sign-night.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0815,\n            \"longitude\": -115.153\n          },\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"30 minutes (depending on traffic)\"\n        },\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Pedestrian mall with Viva Vision light shows, live music, and street performers.\",\n          \"placeImageUrl\": \"https://cdn.britannica.com/35/241235-050-74940053/Fremont-Street-Experience-Las-Vegas.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1696,\n            \"longitude\": -115.141\n          },\n          \"ticketPricing\": \"Free (some attractions have fees)\",\n          \"timeToTravel\": \"30 minutes (from Welcome Sign, depending on traffic)\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"bestTimeToVisit\": \"Daytime/Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"The Strip (Las Vegas Boulevard)\",\n          \"placeDetails\": \"Walk along the Strip, explore themed hotels and casinos, and see street performers.\",\n          \"placeImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/71/12/31/las-vegas-blvd-aka.jpg?w=1200&h=-1&s=1\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1146,\n            \"longitude\": -115.172\n          },\n          \"ticketPricing\": \"Free (unless entering attractions or shows)\",\n          \"timeToTravel\": \"Variable (depends on walking distance)\"\n        },\n        {\n          \"placeName\": \"High Roller Observation Wheel (at The LINQ)\",\n          \"placeDetails\": \"Giant Ferris wheel offering panoramic views of the city.\",\n          \"placeImageUrl\": \"https://www.caesars.com/-/media/Project/CR/Caesars-Rewards/Destinations/Las-Vegas/Things-To-Do/High-Roller/high-roller-night-hero.jpg?h=1080&la=en&w=1920&hash=DF82715371EAB4ED71594BC71776979A\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1167,\n            \"longitude\": -115.171\n          },\n          \"ticketPricing\": \"$$ (Check online for prices)\",\n          \"timeToTravel\": \"Walking distance from other Strip attractions\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"bestTimeToVisit\": \"Daytime\",\n      \"plan\": [\n        {\n          \"placeName\": \"Seven Magic Mountains\",\n          \"placeDetails\": \"Colorful art installation south of Las Vegas.\",\n          \"placeImageUrl\": \"https://www.sevenmagicmountains.com/wp-content/uploads/2020/07/seven-magic-mountains-daytime-overview-02-scaled.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 35.8404,\n            \"longitude\": -115.002\n          },\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"30-45 minutes (driving from the Strip)\" \n        },\n       {\n          \"placeName\": \"Valley of Fire State Park\",  \n          \"placeDetails\": \"Stunning red rock formations and hiking trails.\",\n          \"placeImageUrl\": \"https://www.parks.nv.gov/sites/default/files/ValleyOfFire_0.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.42,\n            \"longitude\": -114.52\n          },\n          \"ticketPricing\": \"$10 per vehicle\",\n          \"timeToTravel\": \"1 hour (driving from Seven Magic Mountains)\"\n        }\n      ]\n    }\n  }\n}\n\n\n```" },
//             ],
//         },
//     ],
// });


import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Generate a travel plan for Location: Las Vegas for 3 days for a couple with a cheap budget. 
                    Provide a list of hotels(atleast 5 hotel) with the following details: 
                    Hotel Name, Hotel Address, Price, Hotel Image URL, Geo Coordinates, Rating, and Description. 

                    Also, provide an itinerary in JSON format with a time-wise plan for each day and location. Give atleast 3-4 locations on each day. If the location does not have many tourist spots, then add places which are in outskirts or suggest a good cafe or restaurant.
                    For each location, include: 
                    - placeName
                    - placeDetails
                    - placeImageUrl
                    - geoCoordinates
                    - ticketPricing
                    - timeToTravel
                    - timeSlots (e.g., 10:00 AM - 12:00 PM) for each location in the itinerary.`
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `{
  "tripDetails": {
    "destination": "Las Vegas, Nevada",
    "duration": "3 Days",
    "budget": "Budget-Friendly",
    "travelers": "Couple"
  },
  "hotelOptions": [
    {
      "hotelName": "Excalibur Hotel & Casino",
      "hotelAddress": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",
      "price": "$$ (Varies depending on dates and availability)", 
      "hotelImageUrl": "https://www.excalibur.com/content/dam/mgm/excalibur/property/hero-gallery/excalibur-las-vegas-strip-daytime-view.jpg",
      "geoCoordinates": {
        "latitude": 36.0987,
        "longitude": -115.175
      },
      "rating": "3.5 stars",
      "description": "Medieval-themed resort with affordable rooms, various dining options, and entertainment."
    },
    ...
  ],
  "itinerary": {
    "day1": {
      "bestTimeToVisit": "Afternoon/Evening",
      "plan": [
        {
          "placeName": "Welcome to Las Vegas Sign",
          "placeDetails": "Iconic landmark for photo opportunities.",
          "placeImageUrl": "https://www.lasvegashowto.com/wp-content/uploads/2020/12/welcome-to-las-vegas-sign-night.jpg",
          "geoCoordinates": {
            "latitude": 36.0815,
            "longitude": -115.153
          },
          "ticketPricing": "Free",
          "timeToTravel": "30 minutes (depending on traffic)",
          "timeSlot": "10:00 AM - 11:00 AM"
        },
        {
          "placeName": "Fremont Street Experience",
          "placeDetails": "Pedestrian mall with Viva Vision light shows, live music, and street performers.",
          "placeImageUrl": "https://cdn.britannica.com/35/241235-050-74940053/Fremont-Street-Experience-Las-Vegas.jpg",
          "geoCoordinates": {
            "latitude": 36.1696,
            "longitude": -115.141
          },
          "ticketPricing": "Free (some attractions have fees)",
          "timeToTravel": "30 minutes (from Welcome Sign, depending on traffic)",
          "timeSlot": "12:00 PM - 1:30 PM"
        }
      ]
    },
    "day2": {
      "bestTimeToVisit": "Daytime/Evening",
      "plan": [
        {
          "placeName": "The Strip (Las Vegas Boulevard)",
          "placeDetails": "Walk along the Strip, explore themed hotels and casinos, and see street performers.",
          "placeImageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/71/12/31/las-vegas-blvd-aka.jpg?w=1200&h=-1&s=1",
          "geoCoordinates": {
            "latitude": 36.1146,
            "longitude": -115.172
          },
          "ticketPricing": "Free (unless entering attractions or shows)",
          "timeToTravel": "Variable (depends on walking distance)",
          "timeSlot": "9:00 AM - 12:00 PM"
        },
        ...
      ]
    },
    ...
  }
}`
        },
      ],
    },
  ],
});
