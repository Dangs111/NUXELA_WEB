"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { ArrowLeft, Loader2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const requestTypes = [
  "App support",
  "Privacy question",
  "Access my data",
  "Correct my data",
  "Delete my account",
  "Export my data",
  "Withdraw consent",
  "Limit use of sensitive information",
  "California privacy request",
  "Subscription or purchase question",
  "Bug report",
  "Legal / Terms question",
  "Other",
]

const appleSubscriptionOptions = [
  "No",
  "I need help managing a subscription",
  "I need help restoring purchases",
  "I need help understanding billing",
  "I requested or need a refund",
]

const privacyRequestTypes = ["Privacy question", "Access my data", "Correct my data", "Delete my account", "Export my data", "Withdraw consent", "Limit use of sensitive information", "California privacy request", "Subscription or purchase question"]

export default function SupportPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedRequestType, setSelectedRequestType] = useState("")
  const [showAccountEmail, setShowAccountEmail] = useState(false)
  const [consentChecked, setConsentChecked] = useState(false)
  const [attachedFile, setAttachedFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState("")

  const handleRequestTypeChange = (value: string) => {
    setSelectedRequestType(value)
    setShowAccountEmail(privacyRequestTypes.includes(value))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileError("")
    
    if (!file) {
      setAttachedFile(null)
      return
    }

    const allowedTypes = ["image/png", "image/jpeg", "application/pdf"]
    if (!allowedTypes.includes(file.type)) {
      setFileError("Only PNG, JPG, and PDF files are allowed.")
      setAttachedFile(null)
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setFileError("File size must be under 10 MB.")
      setAttachedFile(null)
      return
    }

    setAttachedFile(file)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!consentChecked) return
    
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("form-type", "orba-support")
    formData.append("consent", "agreed")
    formData.append("request-type", selectedRequestType)
    
    if (attachedFile) {
      formData.append("attachment", attachedFile)
    }
    
    try {
      const response = await fetch("https://formspree.io/f/xqenkoqy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      
      if (response.ok) {
        setFormSubmitted(true)
        form.reset()
        setConsentChecked(false)
        setSelectedRequestType("")
        setShowAccountEmail(false)
        setAttachedFile(null)
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (formSubmitted) {
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
        
        <main className="container mx-auto px-4 py-12 max-w-xl">
          <div className="text-center space-y-4">
            <div className="size-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <Check className="size-8" />
            </div>
            <h1 className="text-2xl font-bold">Thanks.</h1>
            <div className="text-zinc-400 space-y-3 text-sm">
              <p>Your request has been received.</p>
              <p>We will review your message and respond to the email address you provided.</p>
              <p>For privacy, account deletion, or data export requests, we may ask you to verify ownership of the ORBA account before processing the request.</p>
              <p className="text-zinc-500">If your request is about an Apple subscription, you can manage or cancel it in your Apple ID subscription settings. Deleting an ORBA account does not cancel an Apple subscription.</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

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
      
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold">ORBA Support & Privacy Request</h1>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Use this form to contact NUXELA LTD about ORBA support, privacy requests, account deletion, data export, subscriptions, or legal questions. 
              We usually respond by email. For privacy and account requests, we may ask you to verify ownership of the account before processing the request.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email address <span className="text-red-500">*</span></Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="you@example.com" 
                required 
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Your name" 
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="app">App <span className="text-red-500">*</span></Label>
              <select
                id="app"
                name="app"
                required
                className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="ORBA: Mood & Balance Tracker">ORBA: Mood & Balance Tracker</option>
                <option value="Other NUXELA app">Other NUXELA app</option>
                <option value="Website / general question">Website / general question</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="request-type">Request type <span className="text-red-500">*</span></Label>
              <select
                id="request-type"
                name="request-type"
                required
                value={selectedRequestType}
                onChange={(e) => handleRequestTypeChange(e.target.value)}
                className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select request type</option>
                {requestTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {showAccountEmail && (
              <div className="space-y-2">
                <Label htmlFor="account-email">ORBA account email</Label>
                <Input 
                  id="account-email" 
                  name="account-email" 
                  type="email" 
                  placeholder="Email used in ORBA, if different" 
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
                />
              </div>
            )}

            {selectedRequestType.includes("ubscription") || selectedRequestType.includes("Purchase") ? (
              <div className="space-y-2">
                <Label htmlFor="apple-subscription">Apple subscription issue?</Label>
                <select
                  id="apple-subscription"
                  name="apple-subscription"
                  className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {appleSubscriptionOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ) : null}

            <div className="space-y-2">
              <Label htmlFor="country">Country / region</Label>
              <Input 
                id="country" 
                name="country" 
                placeholder="Country or region" 
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="flex min-h-[100px] w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                placeholder="Tell us what you need help with. Do not include passwords, payment card numbers, or highly sensitive information unless necessary for your request."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attachment">Attachment</Label>
              <Input 
                id="attachment" 
                name="attachment" 
                type="file" 
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={handleFileChange}
                className="bg-zinc-900 border-zinc-800 text-white file:bg-zinc-800 file:text-white file:border-0 file:rounded-md file:px-3 file:py-1 file:text-sm file:cursor-pointer"
              />
              {fileError && <p className="text-red-500 text-xs">{fileError}</p>}
              <p className="text-xs text-zinc-500">
                Optional. You can attach screenshots or documents that help explain the issue. 
                Please do not upload passwords, payment cards, government IDs, or medical documents unless we specifically ask for them.
              </p>
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox 
                id="consent" 
                required 
                checked={consentChecked}
                onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                className="mt-1 border-zinc-700 data-[state=checked]:bg-white data-[state=checked]:text-zinc-900"
              />
              <div className="space-y-1">
                <label
                  htmlFor="consent"
                  className="text-sm text-zinc-300 leading-snug cursor-pointer"
                >
                  I agree that NUXELA LTD may use the information I provide to respond to and process my request. I understand that privacy or account requests may require verification.
                </label>
                <Link 
                  href="https://nuxela.com/privacy" 
                  target="_blank" 
                  className="text-sm text-violet-400 hover:text-violet-300 underline underline-offset-2 block"
                >
                  Read our Privacy Policy
                </Link>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 h-11"
              disabled={isSubmitting || !consentChecked}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Request"
              )}
            </Button>
          </form>
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
