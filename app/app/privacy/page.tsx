import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppPrivacyPage() {
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
        <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-zinc-400 text-sm mb-8">ORBA: Mood & Balance Tracker · April 2026</p>
        
        <div className="prose prose-invert prose-sm max-w-none text-zinc-300">
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">1. Introduction</h2>
          <p>
            NUXELA LTD (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the ORBA mobile application. 
            This Privacy Policy informs you about how we collect, use, and protect your 
            personal data when you use our mood tracking application.
          </p>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">2. Information We Collect</h2>
          <h3 className="text-base font-medium text-zinc-200 mt-4 mb-2">2.1 Information You Provide</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Account information (email, name) when you create an account</li>
            <li>Mood entries, journal entries, and self-reflection data you record</li>
            <li>Any feedback or communications you send us</li>
          </ul>
          
          <h3 className="text-base font-medium text-zinc-200 mt-4 mb-2">2.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Device information (device type, operating system version)</li>
            <li>App usage statistics and interaction data</li>
            <li>Crash reports and performance data</li>
          </ul>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">3. How We Use Your Data</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide and improve the ORBA mood tracking features</li>
            <li>Personalize your experience within the app</li>
            <li>Send you relevant notifications and reminders (only with your consent)</li>
            <li>Analyze app performance and fix bugs</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">4. Health & Wellness Data</h2>
          <p>
            ORBA is designed to support your mental wellness. We do not sell your mood data, 
            journal entries, or any personal wellness information to third parties. Your 
            self-reflection data remains private and is used only to provide you with 
            personalized insights.
          </p>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">5. Data Storage & Security</h2>
          <p>
            Your data is stored securely using industry-standard encryption. We use cloud 
            services to store your account and mood data. You may request deletion of your 
            data at any time by contacting us.
          </p>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">6. Your Rights</h2>
          <p>Under GDPR and applicable data protection laws, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Export your data</li>
            <li>Withdraw consent</li>
          </ul>
          
          <h2 className="text-lg font-semibold text-white mt-8 mb-3">7. Contact Us</h2>
          <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-800 mt-4">
            <p className="font-medium">NUXELA LTD</p>
            <p className="text-zinc-400">71-75, Shelton Street, London WC2H 9JQ</p>
            <p className="text-zinc-400">Tel: 02037502621</p>
            <p className="text-zinc-400">Email: privacy@nuxela.com</p>
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
