import React from 'react';
import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';

export const metadata = {
    title: `Terms of Service - ${siteDetails.siteName}`,
    description: `Terms of Service for ${siteDetails.siteName}`,
};

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 manrope">
                        Terms of Service
                    </h1>
                    <p className="text-foreground-accent mb-8">
                        Last updated: March 14, 2026
                    </p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">1. Acceptance of Terms</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                By accessing and using <strong>{siteDetails.siteName}</strong> (the &quot;App&quot;), you accept and agree to be bound by the terms and provisions of this agreement. These Terms apply to all visitors, users, and others who access or use the App. If you do not agree to these Terms of Service, please do not use the App.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">2. Description of Service</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                {siteDetails.siteName} is a mobile application that enables collaborative trip planning and real-time coordination among travel companions. The App allows users to create and manage trips, build itineraries, organize subgroups (circles), share real-time locations, and communicate via in-app group chat.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">3. Use License</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Permission is granted to download and use one copy of the App for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>Modify, copy, or create derivative works based on the App</li>
                                <li>Use the App for any commercial purpose or for any public display</li>
                                <li>Attempt to decompile, reverse engineer, or extract the source code of any software contained in the App</li>
                                <li>Remove any copyright or other proprietary notations from the App</li>
                                <li>Transfer, sublicense, or &quot;mirror&quot; the App or its content on any other server</li>
                                <li>Use the App to develop a competing service</li>
                            </ul>
                            <p className="text-foreground-accent leading-relaxed mt-4">
                                This license shall automatically terminate if you violate any of these restrictions and may be terminated by {siteDetails.siteName} at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">4. User Accounts</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                            </p>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                You are responsible for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent mb-4">
                                <li>Safeguarding the password you use to access the App</li>
                                <li>All activities and actions that occur under your account</li>
                                <li>Notifying us immediately upon becoming aware of any breach of security or unauthorized use of your account</li>
                            </ul>
                            <p className="text-foreground-accent leading-relaxed">
                                You agree not to disclose your password to any third party. We cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">5. Age Requirements</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Our App is rated <strong>4+</strong> and is suitable for all ages. However, if you are under the age of 13 (or the applicable age of consent in your jurisdiction), you must have your parent or guardian&apos;s permission to use the App and to create an account.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                We comply with the Children&apos;s Online Privacy Protection Act (COPPA) and similar laws worldwide. Parents and guardians are responsible for monitoring their children&apos;s use of the App. For more information about how we handle children&apos;s data, please refer to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">6. Trip Participation and User Conduct</h2>

                            <h3 className="text-xl font-semibold mb-3 manrope">6.1 Creating and Joining Trips</h3>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                As a user, you may create trips, invite other users to join via invite codes, and participate in trips created by others. You are responsible for any content you create within a trip, including itinerary items, chat messages, and circle (subgroup) information.
                            </p>

                            <h3 className="text-xl font-semibold mb-3 manrope">6.2 Location Sharing</h3>
                            <p className="text-foreground-accent leading-relaxed">
                                The App offers optional real-time location sharing with trip members. By enabling location sharing, you consent to your location being visible to other members of your trip(s) according to the mode you select (Trip Only or All Trips). You may disable location sharing at any time. For more details on how location data is handled, please refer to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">7. Prohibited Activities</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                You agree not to engage in any of the following prohibited activities:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>Violating any applicable laws, regulations, or third-party rights</li>
                                <li>Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity</li>
                                <li>Interfering with or disrupting the App, servers, or networks connected to the App</li>
                                <li>Using the App to transmit any harmful code, viruses, or malware</li>
                                <li>Attempting to gain unauthorized access to any portion of the App or any other systems or networks</li>
                                <li>Using the App for any illegal or unauthorized purpose</li>
                                <li>Harassing, abusing, threatening, or harming another person through the App</li>
                                <li>Collecting or storing personal data about other users without their consent</li>
                                <li>Sending spam, unsolicited messages, or abusive content through in-app chat</li>
                                <li>Sharing invite codes publicly with the intent to disrupt trips or communities</li>
                                <li>Using automated scripts, bots, or crawlers to access or interact with the App</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">8. User Content</h2>

                            <h3 className="text-xl font-semibold mb-3 manrope">8.1 Ownership</h3>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                You retain all rights to any content you submit, post, or display on or through the App, including trip details, itinerary items, chat messages, and profile information.
                            </p>

                            <h3 className="text-xl font-semibold mb-3 manrope">8.2 License Grant</h3>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                By submitting, posting, or displaying content on the App, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, process, and distribute such content solely in connection with operating and providing the App&apos;s services (e.g., displaying your messages to other trip members, showing itinerary items to your group).
                            </p>

                            <h3 className="text-xl font-semibold mb-3 manrope">8.3 Your Responsibilities</h3>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                You represent and warrant that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>You own or have the necessary rights to use and authorize us to use all content you submit</li>
                                <li>Your content does not violate any third-party rights, including intellectual property or privacy rights</li>
                                <li>Your content does not contain illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable material</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">9. Intellectual Property</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                The App and its original content, features, and functionality (excluding user-provided content) are and will remain the exclusive property of {siteDetails.siteName} and its licensors. The App is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of {siteDetails.siteName}.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">10. Third-Party Services</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                The App relies on <strong>Supabase</strong> for database hosting, user authentication, real-time data sync, and file storage. By using the App, you acknowledge that your data will be processed by Supabase in accordance with their terms and our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services that may be linked from or integrated with the App. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such third-party services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">11. Push Notifications</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                The App may send you push notifications regarding trip invitations, trip updates, alerts, and other relevant information. You can manage your notification preferences through your device settings at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">12. Termination</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                            </p>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Upon termination:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent mb-4">
                                <li>Your right to use the App will immediately cease</li>
                                <li>We may delete your account data in accordance with our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a></li>
                            </ul>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                If you wish to terminate your account, you may simply discontinue using the App or contact us to request account deletion.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">13. Disclaimer of Warranties</h2>
                            <div className="bg-hero-background p-6 rounded-lg">
                                <p className="text-foreground-accent leading-relaxed mb-3">
                                    THE APP IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. {siteDetails.siteName.toUpperCase()} AND ITS SUPPLIERS AND LICENSORS HEREBY DISCLAIM ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                                </p>
                                <p className="text-foreground-accent leading-relaxed mb-3">
                                    NEITHER {siteDetails.siteName.toUpperCase()} NOR ITS SUPPLIERS AND LICENSORS MAKES ANY WARRANTY THAT THE APP WILL BE ERROR FREE, THAT ACCESS THERETO WILL BE CONTINUOUS OR UNINTERRUPTED, OR THAT DEFECTS WILL BE CORRECTED.
                                </p>
                                <p className="text-foreground-accent leading-relaxed">
                                    YOU ACKNOWLEDGE THAT THE APP PROVIDES TOOLS FOR TRIP PLANNING AND COORDINATION, BUT DOES NOT GUARANTEE THE ACCURACY OF ANY TRAVEL-RELATED INFORMATION, ITINERARY SUGGESTIONS, OR LOCATION DATA.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">14. Limitation of Liability</h2>
                            <div className="bg-hero-background p-6 rounded-lg">
                                <p className="text-foreground-accent leading-relaxed mb-3">
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL {siteDetails.siteName.toUpperCase()}, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                    <li>Errors, mistakes, or inaccuracies of content</li>
                                    <li>Personal injury or property damage resulting from your access to and use of the App</li>
                                    <li>Unauthorized access to or use of our secure servers and/or any personal information stored therein</li>
                                    <li>Interruption or cessation of transmission to or from the App</li>
                                    <li>Bugs, viruses, or the like that may be transmitted through the App by any third party</li>
                                    <li>Errors or omissions in any content, or any loss or damage incurred as a result of the use of any content posted, transmitted, or otherwise made available through the App</li>
                                    <li>Reliance on location data, itinerary information, or any travel-related content within the App</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">15. Indemnification</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                You agree to defend, indemnify, and hold harmless {siteDetails.siteName}, its officers, directors, employees, and agents, from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney&apos;s fees) arising from:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2 text-foreground-accent">
                                <li>Your use of and access to the App</li>
                                <li>Your violation of any term of these Terms</li>
                                <li>Your violation of any third-party right, including any copyright, property, or privacy right</li>
                                <li>Any claim that your content caused damage to a third party</li>
                                <li>Your use of location sharing features and any consequences thereof</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">16. Governing Law</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">17. Changes to Terms</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least <strong>30 days&apos; notice</strong> prior to any new terms taking effect by posting an update within the App.
                            </p>
                            <p className="text-foreground-accent leading-relaxed">
                                By continuing to access or use our App after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the App.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">18. Contact Information</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                If you have any questions about these Terms, please contact us:
                            </p>
                            <div className="bg-hero-background p-6 rounded-lg">
                                <p className="text-foreground-accent mb-2">
                                    <strong>Email:</strong> <a href="mailto:tripsync.humankit@gmail.com" className="text-primary hover:underline">tripsync.humankit@gmail.com</a>
                                </p>
                                <p className="text-foreground-accent">
                                    <strong>Response Time:</strong> We aim to respond to all inquiries within <strong>48 hours</strong>
                                </p>
                            </div>
                        </section>

                        <section className="mt-8 p-6 bg-hero-background rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 manrope">Acknowledgment</h3>
                            <p className="text-foreground-accent leading-relaxed">
                                BY USING THE APP, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
                            </p>
                        </section>

                        <section className="text-center mt-4">
                            <p className="text-foreground-accent italic">
                                {siteDetails.siteName}
                            </p>
                            <p className="text-foreground-accent italic">
                                Stay Connected, Wherever You Wander
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TermsOfService;
