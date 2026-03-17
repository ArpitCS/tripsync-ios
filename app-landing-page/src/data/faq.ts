import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: 'Is TripSync free to use?',
        answer: 'Yes! TripSync is completely free to download and use. Create unlimited trips, invite your friends, and plan your adventures without any cost.',
    },
    {
        question: 'How do I invite people to my trip?',
        answer: 'Every trip gets a unique invite code. Share this code with your travel companions and they can instantly join the trip from the app. You can also send direct invitations to specific users.',
    },
    {
        question: 'What are Circles?',
        answer: 'Circles are subgroups within a trip. They let smaller groups coordinate independently — for example, a "Foodies" circle for restaurant lovers or an "Adventure" circle for hikers — each with their own chat and itinerary items.'
    },
    {
        question: 'Does the app share my location all the time?',
        answer: 'No. Location sharing is entirely in your control. You can choose to share your location only during specific trips, turn it off at any time, or set it to expire after a duration you choose.',
    },
    {
        question: 'Can I use TripSync without an internet connection?',
        answer: 'You can browse your saved itinerary and trip details offline. However, features like live chat, real-time location sharing, and syncing new changes require an active internet connection.'
    }
];
