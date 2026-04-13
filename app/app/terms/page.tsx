import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AppTermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/app" className="flex items-center gap-2 font-semibold">
            <ArrowLeft className="size-4" />
            <span>Back to ORBA</span>
          </Link>
        </div>
      </header>
      
      <main className="container max-w-4xl py-12">
        <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">ORBA: Mood & Balance Tracker</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg font-medium mb-6">Last updated: April 2026</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By downloading or using the ORBA app, you agree to be bound by these Terms & 
            Conditions. If you do not agree, please do not use the app.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
          <p>
            ORBA is a mood tracking and wellness application designed to help you monitor 
            your emotional well-being through journaling, mood logging, and self-reflection 
            tools. The app is provided by NUXELA LTD.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p>
            To access certain features, you may need to create an account. You are responsible 
            for maintaining the confidentiality of your login credentials and for all activities 
            under your account.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the app for lawful purposes only</li>
            <li>Not attempt to reverse engineer or modify the app</li>
            <li>Provide accurate information when creating an account</li>
            <li>Not share your account credentials with others</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Wellness Disclaimer</h2>
          <p className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 pl-4 py-2">
            <strong>Important:</strong> ORBA is a mood tracking tool, not a medical device or 
            a substitute for professional mental health care. The app is not intended to 
            diagnose, treat, cure, or prevent any mental health condition. If you are 
            experiencing mental health difficulties, please consult a qualified healthcare 
            professional.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data & Content</h2>
          <p>
            You retain ownership of all content (mood entries, journal entries) you create 
            within the app. By using ORBA, you grant us a limited license to store and display 
            your content as necessary to provide the service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Subscriptions & Payments</h2>
          <p>
            Certain features may require a subscription. If you choose to subscribe, you agree 
            to pay all fees associated with your subscription. Subscriptions automatically 
            renew unless cancelled at least 24 hours before the end of the current period.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Intellectual Property</h2>
          <p>
            NUXELA LTD retains all intellectual property rights to the ORBA app, including 
            but not limited to design, trademarks, and software. You may not copy, modify, 
            or distribute any part of the app without our written consent.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, NUXELA LTD shall not be liable for any 
            indirect, incidental, special, consequential, or punitive damages arising from 
            your use of the app.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Modifications to Service</h2>
          <p>
            We reserve the right to modify or discontinue the app at any time, with or without 
            notice. We may also update these Terms periodically.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Termination</h2>
          <p>
            We may terminate or suspend your access to the app immediately, without prior 
            notice, for any reason, including breach of these Terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of England and Wales. Any disputes shall 
            be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Information</h2>
          <p>For questions about these Terms, contact us:</p>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <p className="font-medium">NUXELA LTD</p>
            <p>71-75, Shelton Street</p>
            <p>London</p>
            <p>WC2H 9JQ</p>
            <p>Tel: 02037502621</p>
            <p>Email: legal@nuxela.com</p>
          </div>
        </div>
      </main>
      
      <footer className="border-t mt-16">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 NUXELA LTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
