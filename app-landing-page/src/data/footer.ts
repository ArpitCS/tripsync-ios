import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    socials: ISocials;
} = {
    subheading: "Stay Connected, Wherever You Wander with TripSync - Travel Companion",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Contact",
            url: "/contact"
        },
        {
            text: "Privacy Policy",
            url: "/privacy"
        },
        {
            text: "Terms of Service",
            url: "/terms"
        }
    ],
    email: 'tripsync.humankit@gmail.com',
    socials: {
        github: 'https://github.com/proSamik/lighteweight-starter-kit-ios-app',
        x: 'https://x.com/',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}