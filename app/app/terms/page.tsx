import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AppTermsPage() {
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
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Terms of Use</h1>
        <p className="text-zinc-500 text-sm mb-8">Effective Date: May 1, 2026 · Last Updated: May 1, 2026</p>
        
        <div className="prose prose-invert prose-sm max-w-none text-zinc-300 space-y-6">
          <p>
            These Terms of Use (&quot;Terms&quot;) govern your use of ORBA: Mood & Balance Tracker (&quot;ORBA&quot;, the &quot;App&quot;) and related services provided by NUXELA LTD (&quot;NUXELA&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
          </p>
          <p>
            By using ORBA, you agree to these Terms. If you do not agree, do not use the App.
          </p>
          <p>
            Contact: <Link href="https://nuxela.com/app" className="text-violet-400 hover:underline">https://nuxela.com/app</Link> · Email: <a href="mailto:contact@nuxela.com" className="text-violet-400 hover:underline">contact@nuxela.com</a>
          </p>
          <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-800">
            <p className="font-medium">NUXELA LTD</p>
            <p className="text-zinc-400">Unit A, 82 James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE</p>
            <p className="text-zinc-400">Company number 16403238</p>
          </div>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">1. What ORBA Does</h2>
          <p>ORBA is a mood, balance, journaling, and personal wellbeing tracking app. ORBA may help you record moods, wellbeing signals, journal entries, media, habits, reflections, tracked categories, and related personal patterns.</p>
          <p>ORBA is designed for personal reflection and self-tracking. It is not a medical device.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">2. No Medical Advice</h2>
          <p>ORBA does not provide medical advice, mental health treatment, diagnosis, therapy, clinical recommendations, emergency support, or professional care.</p>
          <p>Information in ORBA is for personal informational and self-reflection purposes only. You should not rely on ORBA as a substitute for advice from a physician, therapist, psychologist, psychiatrist, or other qualified professional.</p>
          <p>If you may be experiencing a medical, mental health, or safety emergency, contact local emergency services immediately.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">3. Eligibility</h2>
          <p>You must be legally able to agree to these Terms. ORBA is not intended for children under 13 unless use is permitted by law and approved by a parent or legal guardian.</p>
          <p>You are responsible for ensuring that your use of ORBA is lawful in your location.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">4. Accounts</h2>
          <p>Some ORBA features may require an account. You agree to provide accurate information and keep your account credentials secure.</p>
          <p>You are responsible for activity under your account. If you believe your account has been compromised, contact us through <Link href="https://nuxela.com/app" className="text-violet-400 hover:underline">https://nuxela.com/app</Link>.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">5. Your Content</h2>
          <p>You may create, upload, or store content in ORBA, including journal entries, notes, photos, videos, audio recordings, reflections, and other personal content (&quot;User Content&quot;).</p>
          <p>You retain ownership of your User Content. By using ORBA, you grant NUXELA a limited, non-exclusive, worldwide license to host, store, process, sync, display, and otherwise use your User Content only as necessary to provide, maintain, secure, and improve ORBA.</p>
          <p>You are responsible for your User Content and for ensuring that you have the right to upload or store it.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">6. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use ORBA for illegal, harmful, abusive, or fraudulent purposes.</li>
            <li>Attempt to access another person&apos;s account or data.</li>
            <li>Interfere with the security or operation of ORBA.</li>
            <li>Reverse engineer, scrape, copy, or misuse the App except as permitted by law.</li>
            <li>Upload content that violates rights of others or applicable law.</li>
            <li>Use ORBA to provide medical, clinical, emergency, or professional advice to others unless you are legally authorized and ORBA is suitable for that use.</li>
          </ul>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">7. Subscriptions and In-App Purchases</h2>
          <p>ORBA may offer paid subscriptions or in-app purchases through Apple&apos;s App Store.</p>
          <p>Subscription details, including price, duration, trial availability, renewal period, and included features, are shown before purchase in the App.</p>
          <p>If you start a free trial, the subscription will automatically convert to a paid subscription at the end of the trial unless cancelled at least 24 hours before the trial ends.</p>
          <p>Payment is charged to your Apple ID account. Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. Your Apple ID account may be charged for renewal within 24 hours before the end of the current period.</p>
          <p>You can manage or cancel subscriptions in your Apple ID subscription settings. Deleting the App or deleting your ORBA account does not automatically cancel your Apple subscription.</p>
          <p>Refunds are handled by Apple under Apple&apos;s policies. We cannot directly issue refunds for purchases processed by Apple.</p>
          <p>ORBA may provide a Restore Purchases feature to restore active purchases or subscriptions.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">8. Subscription Access</h2>
          <p>Paid features are available only while your subscription is active and valid. We may use Apple and subscription infrastructure providers, including Adapty, to validate purchases, manage entitlements, and determine access to premium features.</p>
          <p>We may change free or paid features over time, but we will not materially reduce paid subscription access during an active subscription period without a lawful basis or appropriate notice.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">9. Privacy</h2>
          <p>Your use of ORBA is subject to our Privacy Policy, available at:</p>
          <p><Link href="https://nuxela.com/app/privacy" className="text-violet-400 hover:underline">https://nuxela.com/app/privacy</Link></p>
          <p>The Privacy Policy explains how we collect, use, store, and protect information.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">10. Account Deletion</h2>
          <p>You may request account deletion in the App or through <Link href="https://nuxela.com/app" className="text-violet-400 hover:underline">https://nuxela.com/app</Link>.</p>
          <p>Deleting your account may permanently delete journal entries, mood records, media, settings, and other account data, subject to backup retention, legal obligations, security needs, and legitimate business purposes.</p>
          <p>Account deletion does not cancel an Apple subscription. You must cancel subscriptions through Apple.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">11. App Availability and Changes</h2>
          <p>We may modify, suspend, or discontinue parts of ORBA from time to time. We may also release updates, bug fixes, or changes to improve functionality, security, or compliance.</p>
          <p>We are not responsible for failure or delay caused by events outside our reasonable control, including platform outages, third-party service failures, network issues, or force majeure events.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">12. Third-Party Services</h2>
          <p>ORBA may rely on third-party services, including Apple, Adapty, Firebase/Google services, hosting providers, analytics providers, and support tools.</p>
          <p>Third-party services may be subject to their own terms and privacy policies. We are not responsible for third-party services except as required by applicable law.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">13. Intellectual Property</h2>
          <p>ORBA, including its design, software, branding, features, text, graphics, and other materials, is owned by NUXELA or its licensors and is protected by intellectual property laws.</p>
          <p>These Terms do not grant you ownership of ORBA or any NUXELA intellectual property.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">14. Feedback</h2>
          <p>If you send us ideas, suggestions, feedback, or improvements, you allow us to use them without restriction or compensation, unless prohibited by law.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">15. Disclaimers</h2>
          <p>ORBA is provided &quot;as is&quot; and &quot;as available.&quot; To the maximum extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, non-infringement, availability, accuracy, and reliability.</p>
          <p>We do not guarantee that ORBA will be uninterrupted, error-free, secure, or suitable for your personal, medical, emotional, or wellbeing needs.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">16. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, NUXELA will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of data, profits, goodwill, or business opportunities.</p>
          <p>Nothing in these Terms limits liability that cannot be limited under applicable law.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">17. Termination</h2>
          <p>You may stop using ORBA at any time. We may suspend or terminate access if you violate these Terms, create risk, misuse the App, or if required by law.</p>
          <p>After termination, sections that by nature should survive will continue to apply, including privacy, intellectual property, disclaimers, limitation of liability, and dispute provisions.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">18. Governing Law</h2>
          <p>These Terms are governed by the laws of England and Wales, except where consumer protection laws in your country require otherwise.</p>
          <p>If you are a consumer, you may have mandatory legal rights in your country of residence that these Terms do not limit.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">19. Changes to These Terms</h2>
          <p>We may update these Terms from time to time. If changes are material, we may provide notice in the App or on our website. Continued use of ORBA after changes become effective means you accept the updated Terms.</p>

          <h2 className="text-lg font-semibold text-white mt-8 mb-3">20. Contact</h2>
          <p>For questions about these Terms, contact us through:</p>
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
