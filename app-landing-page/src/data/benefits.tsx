import { FiClock, FiMap, FiMenu, FiMessageCircle, FiMousePointer } from "react-icons/fi";
import { IBenefit } from "@/types"
import { BsHeart, BsPeople } from "react-icons/bs";

export const benefits: IBenefit[] = [
    {
        title: "Collaborative Itinerary Planning",
        description: "Plan your trips together with friends and family ensuring everyone is on the same page for an unforgettable travel experience.",
        bullets: [
            {
                title: "Real-Time Sync",
                description: "No more screenshots in group chats — your itinerary is always live and up to date.",
                icon: <FiClock size={26} />
            },
            {
                title: "My Itinerary",
                description: "Not every stop is for everyone. Swipe to save the activities you're interested in to your own curated timeline.",
                icon: <BsHeart size={26} />
            },
            {
                title: "Circle-Based Planning",
                description: "Organize stops by subgroups (Circles) so the foodies can plan their restaurant crawl while the adventurers chart their hiking trail.",
                icon: <BsPeople size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Live Group Map",
        description: "A real-time map that shows your entire group's location so you can find each other in a foreign city with zero stress.",
        bullets: [
            {
                title: "Live Location Sharing",
                description: "Each member appears as a pin on the map with a live indicator so you always know who's nearby.",
                icon: <FiMap size={26} />
            },
            {
                title: "Filter by Circle",
                description: "Traveling in subgroups? Switch to specific Circles to focus the map on just the people you're with — no clutter, no confusion.",
                icon: <BsPeople size={26} />
            },
            {
                title: "One-Tap Focus",
                description: "Tap a member to zoom into their location, or focus to see everyone at once.",
                icon: <FiMousePointer size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Trip Chat",
        description: "A general chat for the whole group, plus Circle chats for subgroup planning — no more juggling different apps.",
        bullets: [
            {
                title: "General Chat",
                description: "A main chat keeps the entire group connected. Share updates, coordinate meetups, and make group decisions.",
                icon: <FiMessageCircle size={26} />
            },
            {
                title: "Circle Chats",
                description: "Dedicated chats for each Circle let subgroups coordinate independently.",
                icon: <BsPeople size={26} />
            },
            {
                title: "Always in Context",
                description: "Every conversation lives inside the trip, right alongside the itinerary and map.",
                icon: <FiMenu size={26} />
            }
        ],
        imageSrc: "/images/mockup-3.webp"

//         Feature Title: Trip Chat
// Feature Description: One place for all trip conversations. A general chat for the whole group, plus private Circle chats for subgroup planning — no more juggling five different messaging apps.

// Bullet 1 — General + Circle Chats
// A main chat keeps the whole group connected, while dedicated Circle chats let subgroups coordinate independently — foodies discuss dinner spots without spamming the adventure crew.

// Bullet 2 — Reactions & Rich Media
// React to messages with emojis, share images, and post announcements. Keep conversations engaging and expressive without leaving the app.

// Bullet 3 — Always in Context
// Every conversation lives inside the trip, right alongside the itinerary and map. No more searching through random group chats to find that restaurant link someone shared.
    },
]