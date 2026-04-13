import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AppTermsPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <header className="border-b border-zinc-800">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/app" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="size-4" />
            <span className="text-sm">Back to ORBA</span>
          </Link>
        </div>
      </header>
      
      <main className="container max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-zinc-400 text-sm mb-8">ORBA: Mood & Balance Tracker · April 2026</p>
        
        <div className="prose prose-invert prose-sm max-w-none text-zinc-300">
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">1. Acceptance of Terms</h2>
          <p>
            By downloading or using the ORBA app, you agree to be bound by these Terms & 
            Conditions. If you do not agree, please do not use the app.
          </p>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">2. Description of Service</h2>
          <p>
            ORBA is a mood tracking and wellness application designed to help you monitor 
            your emotional well-being through journaling, mood logging, and self-reflection 
            tools. The app is provided by NUXELA LTD.
          </p>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">3. Wellness Disclaimer</h2>
          <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
            <p className="text-amber-200">
              <strong>Important:</strong> ORBA is a mood tracking tool, not a medical device or 
              a substitute for professional mental health care. If you are experiencing mental 
              health difficulties, please consult a qualified healthcare professional.
            </p>
          </div>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">4. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials 
            and for all activities under your account.
          </p>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">5. Data & Content</h2>
          <p>
            You retain ownership of all content you create within the app. By using ORBA, 
            you grant us a limited license to store and display your content as necessary 
            to provide the service.
          </p>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">6. Subscriptions</h2>
          <p>
            Certain features may require a subscription. Subscriptions automatically renew 
            unless cancelled at least 24 hours before the end of the current period.
          </p>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">7. Intellectual Property</h2>
          <p>
            NUXELA LTD retains all intellectual property rights to the ORBA app.
          </p>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, NUXELA LTD shall not be liable for any 
            indirect, incidental, or consequential damages arising from your use of the app.
          </p>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of England and Wales.
          </p>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">10. Contact</h2>
          <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-800 mt-4">
            <p className="font-medium">NUXELA LTD</p>
            <p className="text-zinc-400">71-75, Shelton Street, London WC2H 9JQ</p>
            <p className="text-zinc-400">Tel: 02037502621</p>
            <p className="text-zinc-400">Email: legal@nuxela.com</p>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-zinc-800 mt-16">
        <div className="container py-6 text-center text-sm text-zinc-500">
          <p>© 2026 NUXELA LTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
