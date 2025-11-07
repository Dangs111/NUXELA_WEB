export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          At NUXELA, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website and use our services.
        </p>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, including but not limited to your name, email address,
          and company information when you use our services.
        </p>
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, to communicate with you, and
          to comply with legal obligations.
        </p>
        <h2>3. Information Sharing and Disclosure</h2>
        <p>
          We do not share your personal information with third parties except as described in this Privacy Policy.
        </p>
        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against
          unauthorized or unlawful processing and against accidental loss, destruction, or damage.
        </p>
        <h2>5. Contact Information</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          NUXELA LTD
          <br />
          71-75, SHELTON STREET
          <br />
          LONDON
          <br />
          WC2H 9JQ
          <br />
          Tel: 02037502621
        </p>
      </div>
    </div>
  )
} 