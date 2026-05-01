import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
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
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Terms of Use</h1>
        <p className="text-muted-foreground text-sm mb-8">Effective Date: May 1, 2026 · Last Updated: May 1, 2026</p>
        
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <p>
            These Terms of Use (&quot;Terms&quot;) govern your use of the NUXELA website at <a href="https://nuxela.com" className="text-primary hover:underline">nuxela.com</a> and related services provided by NUXELA LTD (&quot;NUXELA&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
          </p>
          <p>By accessing or using our website, you agree to these Terms. If you do not agree, do not use the website.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">1. Website Use</h2>
          <p>You may view, download for caching purposes, and print pages from this website for your personal use. You may not modify, reproduce, or distribute website content without our prior written consent.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">2. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, images, and software, is owned by NUXELA LTD or its licensors and is protected by intellectual property laws.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">3. Forms & Communications</h2>
          <p>When you submit a form or contact us through our website, you agree to provide accurate information. We use your information to respond to your inquiries and provide services. We do not sell or share your data with third parties for marketing purposes.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">4. Acceptable Use</h2>
          <p>You agree not to use this website for unlawful purposes, attempt to access restricted areas, interfere with website security, or upload harmful content.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">5. Disclaimers</h2>
          <p>This website is provided &quot;as is&quot; and &quot;as available.&quot; We do not guarantee that the website will be uninterrupted, error-free, or secure. NUXELA LTD disclaims all warranties to the maximum extent permitted by law.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, NUXELA LTD will not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">7. Our Apps</h2>
          <p>If you use our mobile applications (such as ORBA: Mood & Balance Tracker), separate terms and privacy policies apply. Please refer to the <Link href="/app" className="text-primary hover:underline">ORBA page</Link> for app-specific Terms and Privacy Policy.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">8. Changes</h2>
          <p>We may update these Terms from time to time. Continued use of the website after changes become effective means you accept the updated Terms.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">9. Governing Law</h2>
          <p>These Terms are governed by the laws of England and Wales, except where consumer protection laws in your country require otherwise.</p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">10. Contact</h2>
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
