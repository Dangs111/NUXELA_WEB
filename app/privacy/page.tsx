import Link from "next/link"
import Image from "next/image"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Image src="/logo_black.svg" alt="NUXELA" width={28} height={28} />
            <span>NUXELA</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
        </div>
      </header>
      
      <main className="container max-w-3xl mx-auto py-8 md:py-12 px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-8">Effective Date: May 1, 2026 · Last Updated: May 1, 2026</p>
        
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <p>
            This Privacy Policy explains how NUXELA LTD (&quot;NUXELA&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your personal information when you visit our website <a href="https://nuxela.com" className="text-primary hover:underline">nuxela.com</a> and use our services.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">1. What We Collect</h2>
          <p>We may collect information you provide directly, such as your name, email address, and company information when you submit forms or contact us through our website.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your inquiries and requests</li>
            <li>Provide and improve our website and services</li>
            <li>Communicate with you about our products and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">3. Information Sharing</h2>
          <p>We do not sell or share your personal information with third parties except as described in this policy or as required by law. We may use trusted service providers (such as Formspree for form processing) to operate our website.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">4. Cookies & Analytics</h2>
          <p>Our website may use essential cookies and analytics to understand how visitors interact with our site. We do not use advertising tracking or third-party ad networks.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">5. Data Security</h2>
          <p>We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, or destruction.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">6. Your Rights</h2>
          <p>Depending on your location, you may have rights to access, correct, delete, or export your personal information. To exercise these rights, contact us through our website.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">7. Our Apps</h2>
          <p>If you use our mobile applications (such as ORBA: Mood & Balance Tracker), please refer to the specific privacy policy for that app: <Link href="/app/privacy" className="text-primary hover:underline">ORBA Privacy Policy</Link>.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">8. Contact</h2>
          <div className="bg-muted p-4 rounded-xl border mt-4">
            <p className="font-medium text-foreground">NUXELA LTD</p>
            <p>Unit A, 82 James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE</p>
            <p>Company number 16403238</p>
            <p>Email: <a href="mailto:contact@nuxela.com" className="text-primary hover:underline">contact@nuxela.com</a></p>
            <p>Website: <a href="https://nuxela.com" className="text-primary hover:underline">nuxela.com</a></p>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 NUXELA LTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
