import React from 'react';
import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';

export const metadata = {
    title: `Privacy Policy - ${siteDetails.siteName}`,
    description: `Privacy Policy for ${siteDetails.siteName}`,
};

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-20">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 manrope">
                        Privacy Policy
                    </h1>
                    <p className="text-foreground-accent mb-8">
                        Last updated: March 14, 2026
                    </p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        {/* Section 1: Introduction */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">1. Introduction</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                Welcome to <strong>TripSync – Travel Companion</strong> (&quot;TripSync&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your privacy and the privacy of all our users, including children. This privacy policy explains how we collect, use, store, and protect your personal information when you use our mobile application.
                            </p>
                            <p className="text-foreground-accent leading-relaxed mt-3">
                                Our app is rated <strong>4+</strong> and is suitable for all ages. We take special care to ensure compliance with children&apos;s privacy laws, including the Children&apos;s Online Privacy Protection Act (COPPA) in the United States and similar laws worldwide.
                            </p>
                        </section>

                        {/* Section 2: Information We Collect */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">2. Information We Collect</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We collect only the minimal information necessary to provide our service. Below is a summary of the data we collect and how it is linked to your identity.
                            </p>

                            {/* 2.1 Account Information */}
                            <div className="bg-hero-background p-6 rounded-lg mb-4">
                                <h3 className="text-xl font-semibold mb-3 manrope">2.1 Account Information</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-foreground-accent">
                                        <thead>
                                            <tr className="border-b border-foreground/10">
                                                <th className="text-left py-2 pr-4 font-semibold">Data Type</th>
                                                <th className="text-left py-2 font-semibold">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Full Name</strong></td>
                                                <td className="py-2">Account creation, personalization, and display to trip members</td>
                                            </tr>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Email Address</strong></td>
                                                <td className="py-2">Account creation, authentication, password reset, and essential communications</td>
                                            </tr>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Password</strong></td>
                                                <td className="py-2">Account authentication (stored securely via Supabase Auth; we never store plaintext passwords)</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 pr-4"><strong>Profile Avatar</strong></td>
                                                <td className="py-2">Optional profile photo to personalize your account</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 2.2 Trip & Activity Data */}
                            <div className="bg-hero-background p-6 rounded-lg mb-4">
                                <h3 className="text-xl font-semibold mb-3 manrope">2.2 Trip &amp; Activity Data</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-foreground-accent">
                                        <thead>
                                            <tr className="border-b border-foreground/10">
                                                <th className="text-left py-2 pr-4 font-semibold">Data Type</th>
                                                <th className="text-left py-2 font-semibold">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Trip Details</strong></td>
                                                <td className="py-2">Trip name, destination, dates, and cover image – created and managed by you</td>
                                            </tr>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Itinerary Items</strong></td>
                                                <td className="py-2">Stops, places, and activities you add to your trip itinerary</td>
                                            </tr>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Circle/Subgroup Data</strong></td>
                                                <td className="py-2">Groups within a trip that you create or join</td>
                                            </tr>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Chat Messages</strong></td>
                                                <td className="py-2">Messages you send within trip group chats</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 pr-4"><strong>Invitations</strong></td>
                                                <td className="py-2">Invite codes and invitation records for trip collaboration</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 2.3 Location Data */}
                            <div className="bg-hero-background p-6 rounded-lg mb-4">
                                <h3 className="text-xl font-semibold mb-3 manrope">2.3 Location Data (Opt-In Only)</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-foreground-accent mb-4">
                                        <thead>
                                            <tr className="border-b border-foreground/10">
                                                <th className="text-left py-2 pr-4 font-semibold">Data Type</th>
                                                <th className="text-left py-2 font-semibold">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 pr-4"><strong>GPS Coordinates</strong></td>
                                                <td className="py-2">Real-time location sharing with trip members (latitude, longitude, accuracy)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="border-l-4 border-primary pl-4 mt-3">
                                    <p className="text-foreground-accent leading-relaxed">
                                        <strong>Important:</strong> Location data is collected <strong>only when you explicitly enable location sharing</strong>. You have full control over this feature with three modes:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1 text-foreground-accent mt-2">
                                        <li><strong>Off</strong> – No location data is collected (default)</li>
                                        <li><strong>Trip Only</strong> – Share your location with members of a specific trip</li>
                                        <li><strong>All Trips</strong> – Share your location across all your active trips</li>
                                    </ul>
                                    <p className="text-foreground-accent leading-relaxed mt-2">
                                        You can also set a <strong>time-limited duration</strong> for location sharing, after which it automatically stops. You may disable location sharing at any time.
                                    </p>
                                </div>
                            </div>

                            {/* 2.4 Device Information */}
                            <div className="bg-hero-background p-6 rounded-lg mb-4">
                                <h3 className="text-xl font-semibold mb-3 manrope">2.4 Device Information</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-foreground-accent">
                                        <thead>
                                            <tr className="border-b border-foreground/10">
                                                <th className="text-left py-2 pr-4 font-semibold">Data Type</th>
                                                <th className="text-left py-2 font-semibold">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Push Notification Token</strong></td>
                                                <td className="py-2">Delivering push notifications for trip updates, invitations, and alerts</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 pr-4"><strong>Face ID / Biometric Capability</strong></td>
                                                <td className="py-2">Used locally on your device for app unlock; biometric data is <strong>never</strong> transmitted to our servers</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 2.5 Information We Do NOT Collect */}
                            <h3 className="text-xl font-semibold mb-3 manrope">2.5 Information We Do NOT Collect</h3>
                            <p className="text-foreground-accent leading-relaxed mb-2">
                                We do <strong>not</strong> collect:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>Physical addresses or phone numbers</li>
                                <li>Payment or financial information</li>
                                <li>Browsing or search history</li>
                                <li>Photos or videos (beyond your optional profile avatar)</li>
                                <li>Health or fitness data</li>
                                <li>Contacts or social graph information</li>
                                <li>Advertising identifiers</li>
                                <li>Third-party analytics or tracking data</li>
                            </ul>
                        </section>

                        {/* Section 3: How We Collect Information */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">3. How We Collect Information</h2>

                            <h3 className="text-xl font-semibold mb-3 manrope">3.1 Authentication</h3>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We use <strong>email and password authentication</strong> powered by Supabase Auth. When you sign up, you provide your full name, email address, and password. We do not use social sign-in providers (e.g., Apple or Google Sign-In).
                            </p>

                            <h3 className="text-xl font-semibold mb-3 manrope mt-6">3.2 User-Provided Data</h3>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                All trip details, itinerary items, messages, and profile information are provided directly by you through the app interface.
                            </p>

                            <h3 className="text-xl font-semibold mb-3 manrope mt-6">3.3 Automatic Collection</h3>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li><strong>Push notification tokens</strong> are collected automatically when you grant notification permissions.</li>
                                <li><strong>Location data</strong> is collected automatically only after you explicitly enable location sharing via the app&apos;s settings.</li>
                            </ul>
                        </section>

                        {/* Section 4: How We Use Your Information */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">4. How We Use Your Information</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We use the information we collect <strong>solely for app functionality</strong>:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>To create and manage your account</li>
                                <li>To enable trip planning, collaboration, and coordination with other members</li>
                                <li>To display itineraries, subgroups, and chat within your trips</li>
                                <li>To share your real-time location with trip members (only when you opt in)</li>
                                <li>To deliver push notifications about trip invitations, updates, and alerts</li>
                                <li>To provide customer support when you contact us</li>
                                <li>To improve our app and develop new features</li>
                            </ul>
                            <p className="text-foreground-accent leading-relaxed mt-4">
                                We do <strong>not</strong> use your information for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>Third-party advertising or behavioural tracking</li>
                                <li>Selling or sharing your data with third parties for marketing purposes</li>
                                <li>Profiling or automated decision-making</li>
                            </ul>
                        </section>

                        {/* Section 5: Children's Privacy */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">5. Children&apos;s Privacy</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Our app is designed to be safe for users of all ages, including children under 13. We are committed to complying with the Children&apos;s Online Privacy Protection Act (COPPA) and similar laws worldwide.
                            </p>

                            <div className="bg-hero-background p-6 rounded-lg mb-4">
                                <h3 className="text-xl font-semibold mb-3 manrope">For Parents and Guardians</h3>
                                <p className="text-foreground-accent leading-relaxed mb-3">
                                    If your child is under 13 (or the applicable age of consent in your jurisdiction), we require verifiable parental consent before collecting any personal information.
                                </p>
                                <p className="text-foreground-accent leading-relaxed">
                                    Parents and guardians have the right to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-foreground-accent mt-2">
                                    <li>Review the personal information collected from their child</li>
                                    <li>Request deletion of their child&apos;s personal information</li>
                                    <li>Refuse to allow further collection of their child&apos;s information</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                            </div>

                            <p className="text-foreground-accent leading-relaxed mb-3">
                                <strong>What We Collect from Children:</strong> Only the minimal information described in Section 2 (name and email address) is collected for app functionality. We do not collect any additional information beyond what is described above.
                            </p>

                            <p className="text-foreground-accent leading-relaxed mb-3">
                                <strong>Third-Party Services:</strong> We do not enable third-party analytics, advertising, or any services that track children in our app.
                            </p>

                            <p className="text-foreground-accent leading-relaxed">
                                To exercise any of these rights or if you have questions about your child&apos;s data, please contact us at the email address provided in Section 12.
                            </p>
                        </section>

                        {/* Section 6: Data Sharing and Third Parties */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">6. Data Sharing and Third Parties</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We do <strong>not</strong> sell, rent, or share your personal information with third parties for their marketing purposes. We only share data with the following service provider, which helps us operate the app:
                            </p>

                            <div className="bg-hero-background p-6 rounded-lg mb-4">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-foreground-accent">
                                        <thead>
                                            <tr className="border-b border-foreground/10">
                                                <th className="text-left py-2 pr-4 font-semibold">Service Provider</th>
                                                <th className="text-left py-2 font-semibold">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 pr-4"><strong>Supabase</strong></td>
                                                <td className="py-2">Database hosting, user authentication, real-time data sync, and file storage (processes data on our behalf)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p className="text-foreground-accent leading-relaxed">
                                Supabase is bound by contractual obligations to keep your information confidential and use it only for the purposes we specify. Supabase is compliant with major privacy regulations, including GDPR.
                            </p>
                            <p className="text-foreground-accent leading-relaxed mt-3">
                                We do <strong>not</strong> integrate any third-party analytics, advertising networks, or tracking SDKs.
                            </p>
                        </section>

                        {/* Section 7: Data Storage and Security */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">7. Data Storage and Security</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We take the security of your personal information seriously and implement industry-standard security measures:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li>All data transmission is encrypted using <strong>TLS/SSL</strong> protocols</li>
                                <li>Data at rest is encrypted in Supabase&apos;s secure database infrastructure</li>
                                <li>Passwords are securely hashed through Supabase Auth — we never store or access plaintext passwords</li>
                                <li>Access to personal data is restricted to authorized personnel only</li>
                                <li><strong>Face ID / biometric data</strong> is processed entirely on your device using Apple&apos;s Local Authentication framework and is <strong>never</strong> transmitted to or stored on our servers</li>
                                <li>We regularly review and update our security practices</li>
                            </ul>
                            <p className="text-foreground-accent leading-relaxed mt-4">
                                While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data to the best of our ability.
                            </p>
                        </section>

                        {/* Section 8: Data Retention */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">8. Data Retention</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                We retain your personal information only for as long as necessary to provide you with our services and as described in this privacy policy.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li><strong>Location data</strong> is retained only while location sharing is active and is automatically disassociated when sharing is turned off or expires.</li>
                                <li>When you <strong>delete your account</strong>, we will delete your personal information within <strong>30 days</strong>, except where we are required to retain it by law or for legitimate business purposes (such as fraud prevention or record-keeping requirements).</li>
                            </ul>
                        </section>

                        {/* Section 9: Your Rights and Choices */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">9. Your Rights and Choices</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>

                            <div className="bg-hero-background p-6 rounded-lg mb-4">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-foreground-accent">
                                        <thead>
                                            <tr className="border-b border-foreground/10">
                                                <th className="text-left py-2 pr-4 font-semibold">Right</th>
                                                <th className="text-left py-2 font-semibold">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Access</strong></td>
                                                <td className="py-2">Request a copy of the personal information we hold about you</td>
                                            </tr>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Correction</strong></td>
                                                <td className="py-2">Request correction of inaccurate or incomplete information</td>
                                            </tr>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Deletion</strong></td>
                                                <td className="py-2">Request deletion of your personal information</td>
                                            </tr>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Data Portability</strong></td>
                                                <td className="py-2">Request a copy of your data in a structured, machine-readable format</td>
                                            </tr>
                                            <tr className="border-b border-foreground/5">
                                                <td className="py-2 pr-4"><strong>Withdraw Consent</strong></td>
                                                <td className="py-2">Withdraw your consent to data processing at any time</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 pr-4"><strong>Object</strong></td>
                                                <td className="py-2">Object to certain types of data processing</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p className="text-foreground-accent leading-relaxed mb-3">
                                <strong>In-app controls you have right now:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-foreground-accent">
                                <li><strong>Location sharing:</strong> Toggle on/off at any time; set time-limited durations</li>
                                <li><strong>Push notifications:</strong> Manage via your device settings</li>
                                <li><strong>Profile information:</strong> Edit your name and avatar directly in the app</li>
                            </ul>

                            <p className="text-foreground-accent leading-relaxed mt-4">
                                To exercise any of these rights, please contact us using the information in Section 12. We will respond to your request within <strong>30 days</strong>.
                            </p>
                        </section>

                        {/* Section 10: International Data Transfers */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">10. International Data Transfers</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer your data internationally, we ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy and applicable laws.
                            </p>
                        </section>

                        {/* Section 11: Changes to This Privacy Policy */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">11. Changes to This Privacy Policy</h2>
                            <p className="text-foreground-accent leading-relaxed">
                                We may update this privacy policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new privacy policy in the app and updating the &quot;Last updated&quot; date at the top of this policy. We encourage you to review this policy periodically.
                            </p>
                        </section>

                        {/* Section 12: Contact Us */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 manrope">12. Contact Us</h2>
                            <p className="text-foreground-accent leading-relaxed mb-4">
                                If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
                            </p>
                            <div className="bg-hero-background p-6 rounded-lg">
                                <p className="text-foreground-accent mb-2">
                                    <strong>Email:</strong> <a href="mailto:tripsync.humankit@gmail.com" className="text-primary hover:underline">tripsync.humankit@gmail.com</a>
                                </p>
                                <p className="text-foreground-accent mb-2">
                                    <strong>Response Time:</strong> We aim to respond to all inquiries within <strong>48 hours</strong>.
                                </p>
                                <p className="text-foreground-accent">
                                    <strong>For Parental Consent Requests:</strong> Please include &quot;Parental Consent&quot; in the email subject line.
                                </p>
                            </div>
                        </section>

                        {/* Compliance Section */}
                        <section className="mt-8 p-6 bg-hero-background rounded-lg">
                            <h3 className="text-xl font-semibold mb-3 manrope">Compliance</h3>
                            <p className="text-foreground-accent leading-relaxed">
                                This privacy policy complies with:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-foreground-accent mt-2">
                                <li>Apple App Store Review Guidelines (Section 5.1 – Privacy)</li>
                                <li>Children&apos;s Online Privacy Protection Act (COPPA)</li>
                                <li>General Data Protection Regulation (GDPR)</li>
                                <li>California Consumer Privacy Act (CCPA)</li>
                            </ul>
                        </section>

                        {/* Footer tagline */}
                        <section className="text-center mt-8">
                            <p className="text-foreground-accent italic">
                                TripSync – Travel Companion
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

export default PrivacyPolicy;
