import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AppPrivacyPage() {
  return (
    <div className="min-h-screen text-white bg-[#09090b]">
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-3">
          <Link href="/app" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <ArrowLeft className="size-4" />
            <span className="text-sm">Back to ORBA</span>
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-zinc-500 text-sm mb-8">Effective Date: May 1, 2026 · Last Updated: May 1, 2026</p>
        
        <div className="prose prose-invert prose-sm max-w-none text-zinc-300 space-y-6">
          <p>
            This Privacy Policy explains how NUXELA LTD (&quot;NUXELA&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, and protects personal information when you use ORBA: Mood & Balance Tracker (&quot;ORBA&quot;, the &quot;App&quot;) and our related website and services.
          </p>
          <p>
            If you have questions or privacy requests, please contact us through the form at <Link href="https://nuxela.com/app" className="text-violet-400 hover:underline">https://nuxela.com/app</Link>. You may also email us at <a href="mailto:contact@nuxela.com" className="text-violet-400 hover:underline">contact@nuxela.com</a>.
          </p>
          <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-800">
            <p className="font-medium">NUXELA LTD</p>
            <p className="text-zinc-400">Unit A, 82 James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE</p>
            <p className="text-zinc-400">Company number 16403238</p>
          </div>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">1. What ORBA Is</h2>
          <p>ORBA is a mood, balance, journaling, and personal wellbeing tracking app. The App may let you record mood, wellbeing signals, tracked categories, notes, journal entries, photos, videos, audio, contacts or friends, and related reflections.</p>
          <p>ORBA is not a medical device and does not provide medical advice, diagnosis, treatment, emergency support, or clinical care.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">2. Information We Collect</h2>
          <p>Depending on how you use ORBA, we may collect the following categories of information.</p>

          <h3 className="text-base font-medium text-zinc-200 mt-4 mb-2">Contact Information</h3>
          <p>We may collect your name, display name, and email address when you create an account, sign in, contact us, or use account-based features.</p>

          <h3 className="text-base font-medium text-zinc-200 mt-4 mb-2">Health and Wellbeing Information</h3>
          <p>We may collect information you choose to enter about your mood, emotional state, balance, habits, wellbeing signals, tracked categories, symptoms, reflections, and related personal patterns. Some of this information may be considered health data, sensitive personal information, or special category data under applicable laws.</p>

          <h3 className="text-base font-medium text-zinc-200 mt-4 mb-2">User Content</h3>
          <p>We may collect content you create or upload in ORBA, including journal entries, notes, reflections, photos, videos, audio recordings, attachments, and other user-generated content.</p>

          <h3 className="text-base font-medium text-zinc-200 mt-4 mb-2">Contacts and Social Features</h3>
          <p>If you use friend, contact, sharing, or social features in ORBA, we may collect information necessary to operate those features, such as friend connections or app-based social graph information. We do not collect your device contacts unless you grant permission and the feature requires it.</p>

          <h3 className="text-base font-medium text-zinc-200 mt-4 mb-2">Identifiers</h3>
          <p>We may collect account identifiers, user IDs, customer IDs, installation IDs, device identifiers, and similar identifiers used to operate the App, keep you signed in, sync data, manage subscriptions, prevent abuse, and understand app performance.</p>

          <h3 className="text-base font-medium text-zinc-200 mt-4 mb-2">Purchases and Subscriptions</h3>
          <p>If you purchase a subscription or other in-app purchase, Apple processes your payment. We do not receive your full payment card number or banking information. We may receive purchase history, subscription status, entitlement status, product identifier, trial status, renewal status, and related transaction information from Apple and our subscription infrastructure provider.</p>

          <h3 className="text-base font-medium text-zinc-200 mt-4 mb-2">Usage Data</h3>
          <p>We may collect information about how you interact with ORBA, such as app launches, onboarding steps, taps, feature usage, paywall views, subscription funnel events, settings changes, and other app interaction data.</p>

          <h3 className="text-base font-medium text-zinc-200 mt-4 mb-2">Diagnostics</h3>
          <p>We may collect crash logs, performance data, device/app diagnostics, error logs, and similar technical information to keep ORBA reliable, secure, and performant. Diagnostic data is intended to be used without linking it to your identity where technically possible.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">3. How We Use Information</h2>
          <p>We use information for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and operate ORBA.</li>
            <li>To create and manage your account.</li>
            <li>To sync, store, and restore your journal, mood, media, and settings data.</li>
            <li>To personalize your in-app experience, insights, tracked categories, reminders, and wellbeing features.</li>
            <li>To manage subscriptions, trials, purchases, and premium access.</li>
            <li>To provide customer support.</li>
            <li>To maintain security, prevent abuse, and protect the App.</li>
            <li>To analyze feature usage and improve ORBA.</li>
            <li>To diagnose crashes, bugs, and performance issues.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p>We do not use your information for third-party advertising. We do not sell your personal information. We do not share your personal information with advertising networks for cross-app or cross-site tracking.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">4. Analytics and Product Improvement</h2>
          <p>ORBA may use analytics to understand how people use the App and to improve onboarding, features, subscriptions, and reliability. Analytics may include app interaction events, paywall views, subscription funnel events, device/app information, and user or device identifiers.</p>
          <p>We do not use analytics to track you across other companies&apos; apps or websites for advertising. We do not use advertising networks for tracking. We do not share your journal text, raw photos, raw videos, or raw audio recordings with advertising networks.</p>
          <p>Where required by law, we will rely on consent or provide controls for non-essential analytics.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">5. Adapty and Subscription Infrastructure</h2>
          <p>We use Adapty to manage in-app subscriptions, purchase validation, paywalls, entitlement status, subscription analytics, and subscription-related product optimization.</p>
          <p>Adapty may process information such as user ID, customer user ID, device or installation identifiers, purchase history, subscription status, trial status, paywall views, purchase events, and related app events.</p>
          <p>We use Adapty as a service provider/processor for app functionality, analytics, and product personalization related to subscriptions. We do not use Adapty for advertising tracking, and we do not connect Adapty data to third-party advertising networks or data brokers.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">6. Apple In-App Purchases</h2>
          <p>If you subscribe through Apple, your payment is processed by Apple under Apple&apos;s terms and privacy policy. We receive information needed to confirm your subscription and provide access to paid features, but we do not receive your full payment card details.</p>
          <p>You can manage or cancel your subscription through your Apple ID subscription settings.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">7. Service Providers</h2>
          <p>We may use trusted service providers to operate ORBA, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Apple, for App Store distribution, in-app purchases, subscription management, and Apple platform services.</li>
            <li>Adapty, for subscription infrastructure, purchase validation, paywall management, and subscription analytics.</li>
            <li>Google Firebase / Google Cloud services, for authentication, cloud database, storage, analytics, diagnostics, security, and app infrastructure, as configured in ORBA.</li>
            <li>Hosting, email, support, and security providers needed to operate our website and support channels.</li>
          </ul>
          <p>These service providers may process personal information only as needed to provide services to us, comply with law, protect security, or fulfill contractual obligations.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">8. No Advertising Tracking</h2>
          <p>ORBA does not use your personal information for third-party advertising tracking. We do not sell personal information. We do not share personal information with data brokers. We do not use advertising networks to track users across apps or websites.</p>
          <p>If this changes in the future, we will update this Privacy Policy, update App Store privacy disclosures, and request any permissions required by Apple or applicable law.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">9. Health and Sensitive Information</h2>
          <p>Mood, wellbeing, journal, and related personal data may be sensitive. We use this information only to provide ORBA, personalize your experience, operate app features, improve the App, and provide support where requested.</p>
          <p>You should not use ORBA as a substitute for medical, mental health, therapeutic, or emergency services. If you believe you may be experiencing a medical or mental health emergency, contact local emergency services or a qualified professional immediately.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">10. Legal Bases for Users in the EEA, UK, and Similar Regions</h2>
          <p>Where GDPR, UK GDPR, or similar laws apply, we process personal data under the following legal bases:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contract: to provide ORBA, account features, subscriptions, sync, and customer support.</li>
            <li>Consent: for health or sensitive wellbeing information where required, and for non-essential analytics where required.</li>
            <li>Legitimate interests: to maintain security, prevent abuse, fix bugs, improve reliability, and understand product performance, where those interests are not overridden by your rights.</li>
            <li>Legal obligation: to comply with tax, accounting, consumer protection, legal, and regulatory obligations.</li>
          </ul>
          <p>You may withdraw consent where processing is based on consent. Withdrawal will not affect processing that occurred before withdrawal.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">11. International Transfers</h2>
          <p>We may process and store information in countries other than where you live, including the United States, United Kingdom, European Economic Area, and other locations where our service providers operate.</p>
          <p>Where required, we use appropriate safeguards such as data processing agreements, standard contractual clauses, or other lawful transfer mechanisms.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">12. Data Retention</h2>
          <p>We keep information only as long as reasonably necessary for the purposes described in this Privacy Policy.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Account data is generally kept while your account is active.</li>
            <li>Journal, mood, media, and user content are kept while your account is active or until you delete them.</li>
            <li>Subscription and purchase records may be kept as needed for access, accounting, fraud prevention, legal compliance, and dispute resolution.</li>
            <li>Analytics and diagnostics may be retained in aggregated, de-identified, or limited form to improve the App.</li>
            <li>Backups may retain deleted data for a limited period before permanent deletion.</li>
          </ul>
          <p>When you delete your account, we will delete or de-identify associated personal data, unless retention is required for legal, security, fraud prevention, accounting, dispute resolution, or legitimate business purposes.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">13. Account Deletion</h2>
          <p>If ORBA allows account creation, you can request deletion of your account from within the App or by contacting us through <Link href="https://nuxela.com/app" className="text-violet-400 hover:underline">https://nuxela.com/app</Link>.</p>
          <p>Deleting your ORBA account does not automatically cancel an Apple subscription. If you have an active Apple subscription, you must cancel it through your Apple ID subscription settings.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">14. Your Privacy Rights</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access your personal information.</li>
            <li>Correct inaccurate information.</li>
            <li>Delete your information.</li>
            <li>Export or receive a copy of your information.</li>
            <li>Object to or restrict certain processing.</li>
            <li>Withdraw consent.</li>
            <li>Opt out of sale or sharing, where applicable.</li>
            <li>Limit use of sensitive personal information, where applicable.</li>
            <li>Lodge a complaint with a data protection authority.</li>
          </ul>
          <p>To exercise rights, contact us through <Link href="https://nuxela.com/app" className="text-violet-400 hover:underline">https://nuxela.com/app</Link> or email <a href="mailto:contact@nuxela.com" className="text-violet-400 hover:underline">contact@nuxela.com</a>.</p>
          <p>We may need to verify your request before acting on it.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">15. California Privacy Notice</h2>
          <p>This section applies to California residents.</p>
          <p>In the past 12 months, ORBA may have collected the following categories of personal information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identifiers, such as user ID, device ID, account ID, and email address.</li>
            <li>Personal information categories, such as name and contact information.</li>
            <li>Commercial information, such as purchase history and subscription status.</li>
            <li>Internet or electronic network activity, such as app usage and product interaction.</li>
            <li>Audio, visual, and similar information, if you upload audio, photos, or videos.</li>
            <li>Sensitive personal information, such as health, mood, wellbeing, or journal information you choose to provide.</li>
            <li>Inferences or personalization information generated from your use of ORBA.</li>
            <li>Diagnostics, crash, and performance information.</li>
          </ul>
          <p>We collect this information from you, your device, Apple, and our service providers. We use it for app functionality, subscriptions, analytics, personalization, diagnostics, security, support, and legal compliance.</p>
          <p>We do not sell personal information. We do not share personal information for cross-context behavioral advertising. We do not knowingly sell or share personal information of users under 16.</p>
          <p>California residents may request to know, access, correct, delete, or receive information about personal information we collect. California residents may also opt out of sale or sharing; however, we do not sell or share personal information as those terms are commonly used for advertising tracking.</p>
          <p>You may exercise these rights through <Link href="https://nuxela.com/app" className="text-violet-400 hover:underline">https://nuxela.com/app</Link> or by emailing <a href="mailto:contact@nuxela.com" className="text-violet-400 hover:underline">contact@nuxela.com</a>.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">16. Children</h2>
          <p>ORBA is not directed to children under 16. If you are under 16, you should not use ORBA unless your parent or legal guardian has reviewed and agreed to this Privacy Policy and any applicable terms, and your use is permitted by law.</p>
          <p>If we learn that we collected personal information from a child where parental consent was required, we will take appropriate steps to delete it.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">17. Security</h2>
          <p>We use reasonable technical and organizational measures to protect information. However, no app, website, network, or storage system can be guaranteed to be completely secure.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">18. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. If we make material changes, we will update the effective date and may provide additional notice in the App or on our website.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">19. Contact Us</h2>
          <p>For privacy questions or requests, contact us through:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><Link href="https://nuxela.com/app" className="text-violet-400 hover:underline">https://nuxela.com/app</Link> → Contact button</li>
            <li><a href="mailto:contact@nuxela.com" className="text-violet-400 hover:underline">contact@nuxela.com</a></li>
          </ul>
        </div>
      </main>

      <footer className="border-t border-zinc-800 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-xs text-zinc-600">
          <p>© 2026 NUXELA LTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
