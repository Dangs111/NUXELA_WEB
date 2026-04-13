import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppPrivacyPage() {
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
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">ORBA: Mood & Balance Tracker</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg font-medium mb-6">Last updated: April 2026</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            NUXELA LTD ("we", "our", or "us") operates the ORBA mobile application. 
            This Privacy Policy informs you about how we collect, use, and protect your 
            personal data when you use our mood tracking application.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium mt-6 mb-3">2.1 Information You Provide</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information (email, name) when you create an account</li>
            <li>Mood entries, journal entries, and self-reflection data you record</li>
            <li>Any feedback or communications you send us</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">2.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device information (device type, operating system version)</li>
            <li>App usage statistics and interaction data</li>
            <li>Crash reports and performance data</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve the ORBA mood tracking features</li>
            <li>Personalize your experience within the app</li>
            <li>Send you relevant notifications and reminders (only with your consent)</li>
            <li>Analyze app performance and fix bugs</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Health & Wellness Data</h2>
          <p>
            ORBA is designed to support your mental wellness. We do not sell your mood data, 
            journal entries, or any personal wellness information to third parties. Your 
            self-reflection data remains private and is used only to provide you with 
            personalized insights.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Storage & Security</h2>
          <p>
            Your data is stored securely using industry-standard encryption. We use cloud 
            services to store your account and mood data. You may request deletion of your 
            data at any time by contacting us.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Services</h2>
          <p>We may use third-party services for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analytics (to improve the app)</li>
            <li>Crash reporting</li>
            <li>Cloud data storage</li>
          </ul>
          <p>These services are bound by their own privacy policies.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
          <p>Under GDPR and applicable data protection laws, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Export your data</li>
            <li>Withdraw consent</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children&apos;s Privacy</h2>
          <p>
            ORBA is not intended for users under the age of 13. We do not knowingly collect 
            data from children under 13.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of significant 
            changes through the app or by posting the updated policy here.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us:</p>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <p className="font-medium">NUXELA LTD</p>
            <p>71-75, Shelton Street</p>
            <p>London</p>
            <p>WC2H 9JQ</p>
            <p>Tel: 02037502621</p>
            <p>Email: privacy@nuxela.com</p>
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
