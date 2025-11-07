"use client"

import { useState, useEffect, FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Rocket,
  Zap,
  Users,
  FileText,
  ChevronDown,
  Twitter,
  Linkedin,
  Github,
  Building2,
  MapPin,
  PhoneCall,
  Mail,
  ExternalLink,
  Globe,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [reportFormOpen, setReportFormOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [contactPurpose, setContactPurpose] = useState("")
  const [scrollPos, setScrollPos] = useState(0)
  const [activeTooltip, setActiveTooltip] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Completely reworked approach for popup handling
  const handleOpenPopup = (type: 'report' | 'contact') => {
    // Disable scrolling on body
    document.body.style.overflow = 'hidden';
    
    if (type === 'report') {
      setReportFormOpen(true);
    } else if (type === 'contact') {
      setContactFormOpen(true);
    }

    // Reset form submission state when opening popup
    setFormSubmitted(false);
  }

  const handleClosePopup = () => {
    // Re-enable scrolling
    document.body.style.overflow = '';
    
    // Close popups
    setReportFormOpen(false);
    setContactFormOpen(false);
  }

  // Form submission handlers
  const handleReportFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("form-type", "report");
    
    try {
      const response = await fetch("https://formspree.io/f/xjkwrowb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleContactFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("form-type", "contact");
    
    try {
      const response = await fetch("https://formspree.io/f/xjkwrowb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
        setContactPurpose("");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Idea, market research",
      icon: <FileText className="size-5" />,
    },
    {
      quarter: "Q2 2025",
      title: "Company registration, MVP validation",
      icon: <Rocket className="size-5" />,
    },
    {
      quarter: "Q3 2025",
      title: "Beta-testing our first content-powered mobile product",
      icon: <Zap className="size-5" />,
    },
    {
      quarter: "Q4 2025",
      title: "Public launch & B2B service rollout",
      icon: <Users className="size-5" />,
    },
  ]

  // Handle tooltip clicks for mobile
  const toggleTooltip = (id: string, event: React.MouseEvent) => {
    event.stopPropagation() // Prevent the click from propagating
    if (activeTooltip === id) {
      setActiveTooltip("")
    } else {
      setActiveTooltip(id)
    }
  }

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveTooltip("")
    }
    
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Image src="/NUXELA_WEB/logo_black.svg" alt="NUXELA" width={32} height={32} />
            <span>NUXELA</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="#roadmap"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Roadmap
            </Link>
            <Link
              href="#app-preview"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              App Preview
            </Link>
            <Link
              href="#partners"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Partners
            </Link>
            <Link
              href="/careers.html"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Careers
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Dialog open={reportFormOpen} onOpenChange={(open) => open ? handleOpenPopup('report') : handleClosePopup()}>
              <DialogTrigger asChild>
                <Button variant="outline" className="rounded-full">
                  Get Full Report
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Get Your Full Report</DialogTitle>
                  <DialogDescription>
                    Get access to our comprehensive market analysis, methodologies, and industry insights that form the foundation of our content marketing approach.
                  </DialogDescription>
                </DialogHeader>
                {formSubmitted ? (
                  <div className="py-6 text-center">
                    <div className="mb-4 size-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                      <Check className="size-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">Your request has been submitted successfully. We'll send the report to your email shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleReportFormSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name-hero">Name</Label>
                      <Input id="name-hero" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email-hero">Email</Label>
                      <Input id="email-hero" name="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="company-hero">Company</Label>
                      <Input id="company-hero" name="company" placeholder="Enter your company name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="report-purpose-hero">Purpose</Label>
                      <select
                        id="report-purpose-hero"
                        name="purpose"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select a purpose</option>
                        <option value="market-research">Market Research</option>
                        <option value="business-strategy">Business Strategy</option>
                        <option value="investment">Investment Opportunity</option>
                        <option value="partnership">Potential Partnership</option>
                        <option value="education">Educational Purposes</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="report-message-hero">Why do you need this report?</Label>
                      <textarea
                        id="report-message-hero"
                        name="message"
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Please explain why you're interested in our report"
                        required
                      />
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <p className="mb-2"><strong>Note:</strong> Our reports contain sensitive information and are shared selectively. We review each request individually.</p>
                      <p><strong>Privacy commitment:</strong> We do not sell or share your data with third parties. You will not receive any marketing emails or newsletters unless explicitly requested.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms-hero" name="terms" required />
                      <label
                        htmlFor="terms-hero"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link href="/privacy.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                          privacy policy
                        </Link>
                        {" "}and{" "}
                        <Link href="/terms.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                          terms & conditions
                        </Link>
                      </label>
                    </div>
                    <input type="hidden" name="_replyto" value="main@nuxela.com" />
                    <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send me the report"}
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
            <Dialog open={contactFormOpen} onOpenChange={(open) => open ? handleOpenPopup('contact') : handleClosePopup()}>
              <DialogTrigger asChild>
                <Button className="rounded-full">
                  Contact
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                {formSubmitted ? (
                  <div className="py-6 text-center">
                    <div className="mb-4 size-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                      <Check className="size-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for contacting us. We'll respond to your inquiry soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactFormSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="contact-name">Name</Label>
                      <Input id="contact-name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" name="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="contact-company">Company</Label>
                      <Input id="contact-company" name="company" placeholder="Enter your company name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="contact-purpose">Purpose</Label>
                      <select
                        id="contact-purpose"
                        name="purpose"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={contactPurpose}
                        onChange={(e) => setContactPurpose(e.target.value)}
                        required
                      >
                        <option value="">Select a purpose</option>
                        <option value="investment">Investment</option>
                        <option value="career">Career</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="contact-message">Message</Label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                        required
                      />
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <p><strong>Privacy commitment:</strong> We do not sell or share your data with third parties. You will not receive any marketing emails or newsletters unless explicitly requested.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="contact-terms" name="terms" required />
                      <label
                        htmlFor="contact-terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link href="/privacy.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                          privacy policy
                        </Link>
                        {" "}and{" "}
                        <Link href="/terms.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                          terms & conditions
                        </Link>
                      </label>
                    </div>
                    <input type="hidden" name="_replyto" value="main@nuxela.com" />
                    <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="#roadmap" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Roadmap
              </Link>
              <Link href="#app-preview" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                App Preview
              </Link>
              <Link href="#partners" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Partners
              </Link>
              <Link href="/careers.html" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Careers
              </Link>
              <div className="flex flex-col gap-4 pt-4 border-t">
                <Dialog open={reportFormOpen} onOpenChange={(open) => open ? handleOpenPopup('report') : handleClosePopup()}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full rounded-full">
                      Get Full Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Get Your Full Report</DialogTitle>
                      <DialogDescription>
                        Get access to our comprehensive market analysis, methodologies, and industry insights that form the foundation of our content marketing approach.
                      </DialogDescription>
                    </DialogHeader>
                    {formSubmitted ? (
                      <div className="py-6 text-center">
                        <div className="mb-4 size-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                          <Check className="size-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                        <p className="text-muted-foreground">Your request has been submitted successfully. We'll send the report to your email shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleReportFormSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name-mobile">Name</Label>
                          <Input id="name-mobile" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email-mobile">Email</Label>
                          <Input id="email-mobile" name="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="company-mobile">Company</Label>
                          <Input id="company-mobile" name="company" placeholder="Enter your company name" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="report-purpose-mobile">Purpose</Label>
                          <select
                            id="report-purpose-mobile"
                            name="purpose"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="">Select a purpose</option>
                            <option value="market-research">Market Research</option>
                            <option value="business-strategy">Business Strategy</option>
                            <option value="investment">Investment Opportunity</option>
                            <option value="partnership">Potential Partnership</option>
                            <option value="education">Educational Purposes</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="report-message-mobile">Why do you need this report?</Label>
                          <textarea
                            id="report-message-mobile"
                            name="message"
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Please explain why you're interested in our report"
                            required
                          />
                        </div>
                        <div className="mt-2 text-xs text-muted-foreground">
                          <p className="mb-2"><strong>Note:</strong> Our reports contain sensitive information and are shared selectively. We review each request individually.</p>
                          <p><strong>Privacy commitment:</strong> We do not sell or share your data with third parties. You will not receive any marketing emails or newsletters unless explicitly requested.</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms-mobile" name="terms" required />
                          <label
                            htmlFor="terms-mobile"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to the{" "}
                            <Link href="/privacy.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                              privacy policy
                            </Link>
                            {" "}and{" "}
                            <Link href="/terms.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                              terms & conditions
                            </Link>
                          </label>
                        </div>
                        <input type="hidden" name="_replyto" value="main@nuxela.com" />
                        <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send me the report"}
                        </Button>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>
                <Dialog open={contactFormOpen} onOpenChange={(open) => open ? handleOpenPopup('contact') : handleClosePopup()}>
                  <DialogTrigger asChild>
                    <Button className="w-full rounded-full">
                      Contact
                      <ChevronRight className="ml-1 size-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Contact Us</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and we'll get back to you as soon as possible.
                      </DialogDescription>
                    </DialogHeader>
                    {formSubmitted ? (
                      <div className="py-6 text-center">
                        <div className="mb-4 size-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                          <Check className="size-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">Thank you for contacting us. We'll respond to your inquiry soon.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactFormSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="contact-name-mobile">Name</Label>
                          <Input id="contact-name-mobile" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-email-mobile">Email</Label>
                          <Input id="contact-email-mobile" name="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-company-mobile">Company</Label>
                          <Input id="contact-company-mobile" name="company" placeholder="Enter your company name" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-purpose-mobile">Purpose</Label>
                          <select
                            id="contact-purpose-mobile"
                            name="purpose"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={contactPurpose}
                            onChange={(e) => setContactPurpose(e.target.value)}
                            required
                          >
                            <option value="">Select a purpose</option>
                            <option value="investment">Investment</option>
                            <option value="career">Career</option>
                            <option value="partnership">Partnership</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-message-mobile">Message</Label>
                          <textarea
                            id="contact-message-mobile"
                            name="message"
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your message"
                            required
                          />
                        </div>
                        <div className="mt-2 text-xs text-muted-foreground">
                          <p><strong>Privacy commitment:</strong> We do not sell or share your data with third parties. You will not receive any marketing emails or newsletters unless explicitly requested.</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="contact-terms-mobile" name="terms" required />
                          <label
                            htmlFor="contact-terms-mobile"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to the{" "}
                            <Link href="/privacy.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                              privacy policy
                            </Link>
                            {" "}and{" "}
                            <Link href="/terms.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                              terms & conditions
                            </Link>
                          </label>
                        </div>
                        <input type="hidden" name="_replyto" value="main@nuxela.com" />
                        <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-32">
          <div className="container relative z-10">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mx-auto max-w-4xl text-center"
            >
              <motion.div
                variants={item}
                className="relative inline-block mb-8"
              >
                <Badge className="rounded-full px-4 py-1.5 text-sm font-medium mb-4" variant="secondary">
                  AI-Powered Marketing
                </Badge>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse delay-300"></div>
              </motion.div>
              <motion.h1
                variants={item}
                className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 relative"
              >
                Streamline Content Marketing with AI-Assisted Tools
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/10 rounded-full blur-xl"></div>
              </motion.h1>
              <motion.p
                variants={item}
                className="text-xl text-muted-foreground mb-8"
              >
                We're building solutions to help businesses create more consistent and engaging content with less effort, making content marketing accessible and sustainable.
              </motion.p>
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Dialog open={contactFormOpen} onOpenChange={(open) => open ? handleOpenPopup('contact') : handleClosePopup()}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="rounded-full relative overflow-hidden group">
                      <span className="relative z-10">Contact</span>
                      <ArrowRight className="ml-2 size-4 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Contact Us</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and we'll get back to you as soon as possible.
                      </DialogDescription>
                    </DialogHeader>
                    {formSubmitted ? (
                      <div className="py-6 text-center">
                        <div className="mb-4 size-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                          <Check className="size-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">Thank you for contacting us. We'll respond to your inquiry soon.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactFormSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="contact-name-hero">Name</Label>
                          <Input id="contact-name-hero" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-email-hero">Email</Label>
                          <Input id="contact-email-hero" name="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-company-hero">Company</Label>
                          <Input id="contact-company-hero" name="company" placeholder="Enter your company name" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-purpose-hero">Purpose</Label>
                          <select
                            id="contact-purpose-hero"
                            name="purpose"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={contactPurpose}
                            onChange={(e) => setContactPurpose(e.target.value)}
                            required
                          >
                            <option value="">Select a purpose</option>
                            <option value="investment">Investment</option>
                            <option value="career">Career</option>
                            <option value="partnership">Partnership</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-message-hero">Message</Label>
                          <textarea
                            id="contact-message-hero"
                            name="message"
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your message"
                            required
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="contact-terms-hero" name="terms" required />
                          <label
                            htmlFor="contact-terms-hero"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to the{" "}
                            <Link href="/privacy.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                              privacy policy
                            </Link>
                            {" "}and{" "}
                            <Link href="/terms.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                              terms & conditions
                            </Link>
                          </label>
                        </div>
                        <input type="hidden" name="_replyto" value="main@nuxela.com" />
                        <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>
                <Dialog open={reportFormOpen} onOpenChange={(open) => open ? handleOpenPopup('report') : handleClosePopup()}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="rounded-full">
                      Get Full Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Get Your Full Report</DialogTitle>
                      <DialogDescription>
                        Get access to our comprehensive market analysis, methodologies, and industry insights that form the foundation of our content marketing approach.
                      </DialogDescription>
                    </DialogHeader>
                    {formSubmitted ? (
                      <div className="py-6 text-center">
                        <div className="mb-4 size-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                          <Check className="size-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                        <p className="text-muted-foreground">Your request has been submitted successfully. We'll send the report to your email shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleReportFormSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name-hero">Name</Label>
                          <Input id="name-hero" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email-hero">Email</Label>
                          <Input id="email-hero" name="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="company-hero">Company</Label>
                          <Input id="company-hero" name="company" placeholder="Enter your company name" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="report-purpose-hero">Purpose</Label>
                          <select
                            id="report-purpose-hero"
                            name="purpose"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="">Select a purpose</option>
                            <option value="market-research">Market Research</option>
                            <option value="business-strategy">Business Strategy</option>
                            <option value="investment">Investment Opportunity</option>
                            <option value="partnership">Potential Partnership</option>
                            <option value="education">Educational Purposes</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="report-message-hero">Why do you need this report?</Label>
                          <textarea
                            id="report-message-hero"
                            name="message"
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Please explain why you're interested in our report"
                            required
                          />
                        </div>
                        <div className="mt-2 text-xs text-muted-foreground">
                          <p className="mb-2"><strong>Note:</strong> Our reports contain sensitive information and are shared selectively. We review each request individually.</p>
                          <p><strong>Privacy commitment:</strong> We do not sell or share your data with third parties. You will not receive any marketing emails or newsletters unless explicitly requested.</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms-hero" name="terms" required />
                          <label
                            htmlFor="terms-hero"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to the{" "}
                            <Link href="/privacy.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                              privacy policy
                            </Link>
                            {" "}and{" "}
                            <Link href="/terms.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                              terms & conditions
                            </Link>
                          </label>
                        </div>
                        <input type="hidden" name="_replyto" value="main@nuxela.com" />
                        <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send me the report"}
                        </Button>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>
              </motion.div>
            </motion.div>
          </div>
          {/* Простий фон з розмитими блакитними кругами */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Великий розмитий круг, що рухається */}
            <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-sky-300/20 blur-[120px] animate-float-slow"></div>
            
            {/* Середній розмитий круг, з іншою швидкістю */}
            <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-blue-300/30 blur-[100px] animate-float-slow delay-1000"></div>
            
            {/* Менший розмитий круг */}
            <div className="absolute top-[40%] left-[15%] w-[300px] h-[300px] rounded-full bg-cyan-200/20 blur-[80px] animate-float-slow delay-500"></div>
            
            {/* Ще один круг, що рухається */}
            <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] rounded-full bg-indigo-200/15 blur-[90px] animate-float-slow delay-300"></div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="outline">
                  About Us
                </Badge>
                <h2 className="text-3xl font-bold">Early-Stage Startup</h2>
                <p className="text-muted-foreground">
                  NUXELA was founded in early 2025 by three friends - two programmers and a marketer. 
                  We've observed that while businesses understand they need content, they often don't 
                  realize its full potential and don't invest enough in it. Meanwhile, random short 
                  videos gather millions of views but don't direct viewers to relevant products, 
                  missing conversion opportunities.
                </p>
                <div className="flex flex-col gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Clock className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Early Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Working on our first tools with planned alpha testing in Q4 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Rocket className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Data-Driven Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        Building solutions based on research and content marketing best practices
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-background to-muted p-8 rounded-lg border relative">
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/10 rounded-full blur-xl"></div>
                  <Image src="/NUXELA_WEB/logo_black.svg" alt="NUXELA" width={64} height={64} className="mb-4" />
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Company</h4>
                      <p>NUXELA LTD • Company №16403238</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Established</h4>
                      <p>2025</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Focus</h4>
                      <p>Content Marketing Automation Tools</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Marketing Explanation Section */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium mb-4" variant="secondary">
                Our Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Content Marketing Matters</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Content that brings value to audiences creates trust and drives engagement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="bg-background rounded-xl p-8 border relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                  <h3 className="text-2xl font-bold mb-6">The Problem</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="size-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                        <span className="text-lg">×</span>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Resource Intensive</h4>
                        <p className="text-muted-foreground">Creating quality content regularly requires significant time and skilled teams.</p>
                    </div>
                  </li>
                    <li className="flex items-start gap-3">
                      <div className="size-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                        <span className="text-lg">×</span>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Inconsistency Issues</h4>
                        <p className="text-muted-foreground">Many businesses struggle to maintain regular content schedules and quality standards.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="size-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                        <span className="text-lg">×</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Measuring Impact</h4>
                        <p className="text-muted-foreground">Difficult to track content effectiveness and ROI across multiple channels.</p>
                    </div>
                  </li>
                </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="bg-background rounded-xl p-8 border relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
                  <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="size-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 mt-1">
                        <Check className="size-4" />
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Content Workflow Automation</h4>
                        <p className="text-muted-foreground">Tools to streamline content creation and distribution processes.</p>
                    </div>
                  </li>
                    <li className="flex items-start gap-3">
                      <div className="size-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 mt-1">
                        <Check className="size-4" />
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Audience-Focused Content</h4>
                        <p className="text-muted-foreground">Help businesses create content that provides genuine value before promoting products.</p>
                    </div>
                  </li>
                    <li className="flex items-start gap-3">
                      <div className="size-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 mt-1">
                        <Check className="size-4" />
            </div>
                      <div>
                        <h4 className="font-semibold mb-1">Holistic Analytics</h4>
                        <p className="text-muted-foreground">Track content performance across channels to improve future strategy.</p>
            </div>
                    </li>
                  </ul>
                    </div>
              </motion.div>
                    </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background rounded-xl p-6 border relative overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                <div className="relative z-10">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Rocket className="size-6 text-primary" />
                    </div>
                  <h3 className="text-xl font-bold mb-3">Potential Cost Efficiency</h3>
                  <p className="text-muted-foreground">
                    Well-executed content marketing can reduce customer acquisition costs compared to traditional advertising methods.
                  </p>
                  </div>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background rounded-xl p-6 border relative overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                <div className="relative z-10">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="size-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Improved Engagement</h3>
                  <p className="text-muted-foreground">
                    Valuable content naturally attracts and retains audience attention better than interruptive advertising.
                  </p>
                </div>
            </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-background rounded-xl p-6 border relative overflow-hidden group hover:border-primary/50 transition-colors"
                  >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                <div className="relative z-10">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="size-6 text-primary" />
                    </div>
                  <h3 className="text-xl font-bold mb-3">Sustainable Growth</h3>
                  <p className="text-muted-foreground">
                    Unlike paid advertising that stops when spending ends, quality content continues providing value over time.
                  </p>
                </div>
                  </motion.div>
            </div>
          </div>
        </section>

        {/* Planned Products Section */}
        <section className="py-24 bg-muted/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium mb-4" variant="secondary">
                Ecosystem
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Products</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive AI-powered solution to revolutionize content marketing
              </p>
            </motion.div>

            {/* Featured Product: Automated Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-xl p-8 border shadow-sm relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
                
                <div className="flex flex-col md:flex-row gap-10 relative z-10">
                  <div className="md:w-1/2 space-y-6">
                    <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-600 border border-green-500/20">
                      <svg className="size-4 mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      50% Complete - Alpha Testing Phase
                    </div>
                    
                    <h3 className="text-3xl font-bold">Content Creation Tools</h3>
                    <p className="text-muted-foreground text-lg">
                      Our main product that helps streamline content creation by connecting with various services to assist in developing video content more efficiently. Content Creation Tools is in active development and can help with parts of the content workflow.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <svg className="size-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="m10 8 6 4-6 4V8Z" />
                          </svg>
                          One-Click Generation
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          From script to final video in minutes rather than days or weeks, with prompt-based editing control
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <svg className="size-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m5 8 6 6" />
                            <path d="m4 14 6-6 2-3" />
                            <path d="M2 5h12" />
                            <path d="M7 2h1" />
                            <path d="m22 22-5-5" />
                            <path d="M17 22v-5" />
                            <path d="M22 17h-5" />
                          </svg>
                          Multi-Platform Export
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Optimized formats for all major social media platforms with aspect ratio adaptation
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <svg className="size-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m2 8 2 2-2 2" />
                            <path d="m14 8-2 2 2 2" />
                            <path d="m8 14 2-2-2-2" />
                            <path d="m20 8-2 2 2 2" />
                            <path d="M8 6h8" />
                            <path d="M8 18h8" />
                          </svg>
                          Multilingual Translation
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Automatically translate and localize content into multiple languages with native accents
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <svg className="size-5 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
                            <path d="m15 9-6 6" />
                            <path d="m9 9 6 6" />
                          </svg>
                          Granular Control
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Intervene at any stage of the process with prompt-based instructions and adjustments
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-background">API Integration</Badge>
                      <Badge variant="outline" className="bg-background">
                        <span 
                          className="relative group cursor-help"
                          onClick={(e) => toggleTooltip("badge-mcp", e)}
                        >
                          <span className="text-primary/90 font-medium">MCP</span> Technology
                          <span className={`${activeTooltip === "badge-mcp" ? "block" : "hidden group-hover:block"} absolute bottom-full left-1/2 -translate-x-1/2 w-64 p-2 rounded bg-background border shadow-md text-xs text-muted-foreground z-50`}>
                            MCP is an open protocol that standardizes how AI applications connect to various data sources and tools, similar to how USB-C provides a standard connection for devices.
                          </span>
                        </span>
                      </Badge>
                      <Badge variant="outline" className="bg-background">Multilingual Support</Badge>
                      <Badge variant="outline" className="bg-background">Video Generation</Badge>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="bg-white rounded-xl p-6 shadow-sm border h-full">
                      <h4 className="text-xl font-semibold mb-4">Integrated AI Ecosystem</h4>
                      
                      <div className="space-y-6">
                        <div className="flex items-start gap-3 border-b pb-4">
                          <div className="size-10 flex items-center justify-center overflow-hidden">
                            <Image src="/After Effects.png" alt="Adobe After Effects" width={36} height={36} />
                          </div>
                          <div>
                            <h5 className="font-semibold">Adobe After Effects</h5>
                            <p className="text-sm text-muted-foreground mb-2">
                              Custom <span 
                                className="relative group cursor-help border-b border-dashed border-primary/70"
                                onClick={(e) => toggleTooltip("after-effects-mcp", e)}
                              >
                                <span className="text-primary/90 font-medium">MCP</span>
                                <span className={`${activeTooltip === "after-effects-mcp" ? "block" : "hidden group-hover:block"} absolute bottom-full left-1/2 -translate-x-1/2 w-64 p-2 rounded bg-background border shadow-md text-xs z-50`}>
                                  MCP is an open protocol that standardizes how AI applications connect to various data sources and tools, similar to how USB-C provides a standard connection for devices.
                                </span>
                              </span> (Model Context Protocol) scripts allow AI to directly control video editing, use internal tools, plugins, and our custom templates
                            </p>
                            <div className="flex items-center text-xs font-medium text-primary">
                              <ArrowRight className="size-3 mr-1" />
                              Precise video composition and effects generation
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 border-b pb-4">
                          <div className="size-10 flex items-center justify-center overflow-hidden">
                            <Image src="/ChatGPT.png" alt="ChatGPT" width={36} height={36} />
                          </div>
                          <div>
                            <h5 className="font-semibold">OpenAI</h5>
                            <p className="text-sm text-muted-foreground mb-2">
                              We use the most powerful OpenAI models fine-tuned on our proprietary marketing data to generate high-converting scripts and optimize content strategy
                            </p>
                            <div className="flex items-center text-xs font-medium text-primary">
                              <ArrowRight className="size-3 mr-1" />
                              Strategic script writing and creative direction
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 border-b pb-4">
                          <div className="size-10 flex items-center justify-center overflow-hidden">
                            <Image src="/Eleven Labs.png" alt="Eleven Labs" width={36} height={36} />
                          </div>
                          <div>
                            <h5 className="font-semibold">Eleven Labs</h5>
                            <p className="text-sm text-muted-foreground mb-2">
                              Provides realistic voice synthesis for narration in multiple languages and accents with precise emotional control
                            </p>
                            <div className="flex items-center text-xs font-medium text-primary">
                              <ArrowRight className="size-3 mr-1" />
                              Natural voiceover and narration generation
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 border-b pb-4">
                          <div className="size-10 flex items-center justify-center overflow-hidden">
                            <Image src="/Suno AI.png" alt="Kling AI" width={36} height={36} />
                          </div>
                          <div>
                            <h5 className="font-semibold">Kling AI</h5>
                            <p className="text-sm text-muted-foreground mb-2">
                              Generates custom video footage, talking head videos, and product demonstrations without the need for real actors or studio recordings
                            </p>
                            <div className="flex items-center text-xs font-medium text-primary">
                              <ArrowRight className="size-3 mr-1" />
                              AI-generated video footage and talking heads
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="size-10 flex items-center justify-center overflow-hidden">
                            <Image src="/NUXELA CORE.png" alt="NUXELA CORE" width={36} height={36} />
                          </div>
                          <div>
                            <h5 className="font-semibold">NUXELA CORE</h5>
                            <p className="text-sm text-muted-foreground mb-2">
                              Our specially fine-tuned multimodal model that orchestrates all services, ensures brand consistency, analyzes user metrics, and continuously improves content quality
                            </p>
                            <div className="flex items-center text-xs font-medium text-primary">
                              <ArrowRight className="size-3 mr-1" />
                              Intelligent orchestration and optimization
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 relative z-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border">
                    <h4 className="text-lg font-semibold mb-4">How Automated Content Works</h4>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div className="bg-muted/20 rounded-lg p-4 border relative">
                        <div className="absolute -top-3 -right-3 size-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</div>
                        <h5 className="font-semibold mb-2">Content Planning</h5>
                        <p className="text-xs text-muted-foreground">
                          NUXELA CORE analyzes your marketing goals, target audience, and platform requirements to develop an optimized content strategy
                        </p>
                      </div>
                      <div className="bg-muted/20 rounded-lg p-4 border relative">
                        <div className="absolute -top-3 -right-3 size-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">2</div>
                        <h5 className="font-semibold mb-2">Script Creation</h5>
                        <p className="text-xs text-muted-foreground">
                          Fine-tuned OpenAI models generate a strategic script optimized for your specific audience and business objectives
                        </p>
                      </div>
                      <div className="bg-muted/20 rounded-lg p-4 border relative">
                        <div className="absolute -top-3 -right-3 size-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">3</div>
                        <h5 className="font-semibold mb-2">Asset Generation</h5>
                        <p className="text-xs text-muted-foreground">
                          System creates or sources visuals, voiceovers, talking heads, and music using specialized AI services directed by NUXELA CORE
                        </p>
                      </div>
                      <div className="bg-muted/20 rounded-lg p-4 border relative">
                        <div className="absolute -top-3 -right-3 size-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">4</div>
                        <h5 className="font-semibold mb-2">Automated Editing</h5>
                        <p className="text-xs text-muted-foreground">
                          After Effects <span 
                            className="relative group cursor-help border-b border-dashed border-primary/70"
                            onClick={(e) => toggleTooltip("workflow-mcp", e)}
                          >
                            <span className="text-primary/90 font-medium">MCP</span>
                            <span className={`${activeTooltip === "workflow-mcp" ? "block" : "hidden group-hover:block"} absolute bottom-full left-1/2 -translate-x-1/2 w-64 p-2 rounded bg-background border shadow-md text-xs z-50`}>
                              MCP is an open protocol that standardizes how AI applications connect to various data sources and tools, similar to how USB-C provides a standard connection for devices.
                            </span>
                          </span> (Model Context Protocol) performs sophisticated video assembly using custom templates, plugins, and AI-directed editing
                        </p>
                      </div>
                      <div className="bg-muted/20 rounded-lg p-4 border relative">
                        <div className="absolute -top-3 -right-3 size-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">5</div>
                        <h5 className="font-semibold mb-2">Multi-platform Export</h5>
                        <p className="text-xs text-muted-foreground">
                          Content is translated, localized, and exported in formats optimized for different platforms and audience segments
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Image src="/NUXELA CORE.png" alt="NUXELA CORE" width={20} height={20} className="mr-2" />
                        NUXELA CORE orchestrates and optimizes the entire process, with optional human intervention at any stage
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Products Grid */}
            <h3 className="text-2xl font-bold text-center mb-8">Additional Components</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* NUXELA CORE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-background rounded-xl p-6 border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <Image src="/nuxela_core.svg" alt="NUXELA CORE" width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">NUXELA CORE</h3>
                    <p className="text-muted-foreground mb-3">
                      The central hub that connects all services and components. Our specially fine-tuned multimodal neural network built on top of the most powerful OpenAI models and enhanced with our proprietary marketing data.
                    </p>
                    
                    <div className="bg-muted/20 rounded-lg p-4 border border-primary/10 mb-4">
                      <h4 className="font-semibold text-sm mb-2">Advanced Capabilities:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>Multimodal understanding allows it to analyze text, images, video, and audio content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>Creates specialized instructions for other AI models to optimize their outputs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>Maintains brand consistency while making content more engaging and effective</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>Analyzes performance metrics from platforms to continuously improve content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>Coordinates complex workflows between multiple AI services and tools</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-background">AI Orchestration</Badge>
                      <Badge variant="outline" className="bg-background">Multimodal Analysis</Badge>
                      <Badge variant="outline" className="bg-background">Early Development - 2025</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Trend Research */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-background rounded-xl p-6 border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <svg className="size-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m2 12 8-8v16l-8-8Z" />
                      <path d="M6 4v16" />
                      <path d="M10 4v16" />
                      <path d="m14 12 8-8v16l-8-8Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Trend Research</h3>
                    <p className="text-muted-foreground mb-3">
                      Currently in early concept phase. We're researching methods for automated analysis of content trends and patterns to help inform content strategy.
                    </p>
                    
                    <div className="bg-muted/20 rounded-lg p-4 border border-primary/10 mb-4">
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="size-4 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-600 shrink-0 mt-1">
                            <span className="text-[10px] font-bold">WIP</span>
                          </div>
                          <span>Real-time social media trend analysis across platforms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="size-4 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-600 shrink-0 mt-1">
                            <span className="text-[10px] font-bold">WIP</span>
                          </div>
                          <span>Content pattern recognition for viral potential</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="size-4 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-600 shrink-0 mt-1">
                            <span className="text-[10px] font-bold">WIP</span>
                          </div>
                          <span>Actionable recommendations based on trend analysis</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-background">Global Analysis</Badge>
                      <Badge variant="outline" className="bg-background">Viral Patterns</Badge>
                      <Badge variant="outline" className="bg-background">Concept Phase</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dynamic Analytics */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-background rounded-xl p-6 border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <svg className="size-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12h10" />
                      <path d="M5 19l-3-7 3-7" />
                      <path d="M22 5v14" />
                      <path d="M15 5h7" />
                      <path d="M15 19h7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dynamic Analytics</h3>
                    <p className="text-muted-foreground mb-3">
                      Currently in planning phase. We're designing a simple analytics solution to help track basic content performance metrics and connect them to our other tools.
                    </p>
                    
                    <div className="bg-muted/20 rounded-lg p-4 border border-primary/10 mb-4">
                      <h4 className="font-semibold text-sm mb-2">Planned Capabilities:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="size-4 rounded-full bg-gray-300 shrink-0 mt-1"></div>
                          <span>Real-time performance tracking with AI-driven insights</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="size-4 rounded-full bg-gray-300 shrink-0 mt-1"></div>
                          <span>Automated A/B testing and hypothesis generation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="size-4 rounded-full bg-gray-300 shrink-0 mt-1"></div>
                          <span>Seamless integration with content creation workflow</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-background">A/B Testing</Badge>
                      <Badge variant="outline" className="bg-background">Marketing Adaptation</Badge>
                      <Badge variant="outline" className="bg-background">Planning Phase</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* App Preview Section */}
        <section id="app-preview" className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium mb-4" variant="secondary">
                Next Step
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">NUXELA's Own App</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're developing our own nutrition app to validate our marketing strategies and showcase the power of our content tools.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="relative w-[300px] max-w-full">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-[3.5rem] shadow-lg"
                  >
                    <source src="/NUXELA_WEB/videos/app-demo.webm" type="video/webm" />
                              <source src="/NUXELA_WEB/videos/app-demo.mp4" type="video/mp4" />                  </video>
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="absolute bottom-8 w-full text-center px-4">
                      <p className="text-sm bg-black/50 text-white py-1 px-2 rounded-full inline-block">The app is in early development stage, not the final version</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Why a Mobile App?</h3>
                    <p className="text-muted-foreground">
                      We anticipate significant growth in the app and SaaS sector, particularly as AI enables creators to 
                      implement their ideas more effectively. This market segment is our primary focus as it aligns 
                      perfectly with our content marketing tools and expertise.
                    </p>
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-start gap-3">
                        <Check className="size-5 text-primary shrink-0 mt-0.5" />
                        <span>Food and health content is consistently popular on social media, making it ideal for content marketing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="size-5 text-primary shrink-0 mt-0.5" />
                        <span>We're developing using a marketing-first approach to build more effective campaigns</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="size-5 text-primary shrink-0 mt-0.5" />
                        <span>Real-world testing validates our tools while building our own user base</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Our Niche: Vitamin & Micronutrient Tracking</h3>
                    <p className="text-muted-foreground">
                      While the food tracking app market is competitive, we're specializing in vitamin and micronutrient 
                      tracking based on growing interest in dietary supplements and understanding how different elements 
                      in foods contribute to optimal body functioning.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Target Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                        <CardContent className="p-6">
                          <h4 className="font-bold">Target Downloads</h4>
                          <p className="text-2xl font-bold">100,000</p>
                          <p className="text-sm text-muted-foreground">purely through content marketing</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                        <CardContent className="p-6">
                          <h4 className="font-bold">Acquisition Cost</h4>
                          <p className="text-2xl font-bold">-30%</p>
                          <p className="text-sm text-muted-foreground">compared to standard marketing methods</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Approach</h3>
                    <p className="text-muted-foreground">
                      We're implementing a marketing-first strategy, building awareness and interest before fully 
                      developing the product. This allows us to implement features users actually want and test our 
                      marketing tools simultaneously. We'll compare our acquisition costs against traditional methods 
                      like ASA and social media targeting to demonstrate our effectiveness.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-24 bg-muted/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium mb-4" variant="secondary">
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Roadmap and Development Plan</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Following our step-by-step approach to building sustainable content marketing tools.
              </p>
            </motion.div>

            <div className="relative">
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent z-0"></div>

              <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
                {[
                  {
                    quarter: "Q1 2025",
                    title: "The Beginning",
                    description: "Initial idea and market research. Development of first concepts and testing core hypotheses.",
                    details: [
                      "Identified opportunity in content marketing automation",
                      "Researched existing solutions and gaps",
                      "Developed initial concept for content tools",
                      "Started building prototype for basic functionality"
                    ],
                    status: "completed",
                    icon: <FileText className="size-5" />,
                  },
                  {
                    quarter: "Q2 2025",
                    title: "Early Development",
                    description: "Started building our prototype tools and began company formation process.",
                    details: [
                      "Launched first developmental prototype",
                      "Gathered feedback from small test group",
                      "Registered NUXELA LTD",
                      "Refined our core product concepts"
                    ],
                    status: "in-progress",
                    icon: <Rocket className="size-5" />,
                  },
                  {
                    quarter: "Q3 2025",
                    title: "Research & Development",
                    description: "Ongoing development of our core products and beginning alpha testing with select users.",
                    details: [
                      "Expanding market research",
                      "Building core functionality",
                      "Developing initial AI integration",
                      "Planning alpha testing program"
                    ],
                    status: "upcoming",
                    icon: <Zap className="size-5" />,
                  },
                  {
                    quarter: "Q4 2025 - Q1 2026",
                    title: "Alpha Testing",
                    description: "Testing our tools with select partners and preparing for wider beta release.",
                    details: [
                      "Alpha testing with select partners",
                      "Implementing feedback improvements",
                      "Preparing marketing approach",
                      "Building out documentation"
                    ],
                    status: "upcoming",
                    icon: <Users className="size-5" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative z-10"
                  >
                    <div className="bg-background rounded-xl p-6 border hover:border-primary/50 transition-colors cursor-pointer group h-full flex flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.quarter}</h3>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      <ul className="space-y-2 mb-4">
                        {item.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            {
                              (item.quarter === "Q4 2025 - Q1 2026") || 
                              (item.quarter === "Q3 2025" && (detail === "Expanding market research" || detail === "Building core functionality" || detail === "Developing initial AI integration" || detail === "Planning alpha testing program"))
                              ? <div className="size-4 rounded-full bg-gray-300 shrink-0 mt-1"></div>
                              : <Check className="size-4 text-primary shrink-0 mt-1" />
                            }
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 mt-auto">
                        <div className={`size-2 rounded-full ${
                          item.status === "completed" ? "bg-green-500" :
                          item.status === "in-progress" ? "bg-yellow-500" :
                          "bg-gray-300"
                        }`} />
                        <span className="text-xs font-medium capitalize">{item.status}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section className="py-24 bg-muted/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium mb-4" variant="secondary">
                Join Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Build the Future with Us</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're looking for talented individuals who want to shape the future of AI-powered marketing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-xl p-8 border"
              >
                <h3 className="text-2xl font-bold mb-6">Why Join NUXELA?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Users className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Remote-First Culture</h4>
                      <p className="text-muted-foreground">Work from anywhere in the world with our fully remote setup.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Rocket className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Equity Opportunities</h4>
                      <p className="text-muted-foreground">Get a stake in our company's success with competitive equity packages.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Zap className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Cutting-Edge Technology</h4>
                      <p className="text-muted-foreground">Work with the latest AI and marketing technologies.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Clock className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Flexible Working Hours</h4>
                      <p className="text-muted-foreground">Options for both full-time and part-time positions available.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-xl p-8 border"
              >
                <h3 className="text-2xl font-bold mb-6">Open Positions</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <h4 className="font-semibold">Senior Prompt Engineer</h4>
                      <p className="text-sm text-muted-foreground">Full-time • Remote</p>
                    </div>
                    <Dialog open={contactFormOpen} onOpenChange={(open) => open ? handleOpenPopup('contact') : handleClosePopup()}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-full" 
                          onClick={() => setContactPurpose("career")}>
                          Apply
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <h4 className="font-semibold">Legal Counsel</h4>
                      <p className="text-sm text-muted-foreground">Full-time • Remote</p>
                    </div>
                    <Dialog open={contactFormOpen} onOpenChange={(open) => open ? handleOpenPopup('contact') : handleClosePopup()}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-full"
                          onClick={() => setContactPurpose("career")}>
                          Apply
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <h4 className="font-semibold">N8N Developer</h4>
                      <p className="text-sm text-muted-foreground">Full-time • Remote</p>
                    </div>
                    <Dialog open={contactFormOpen} onOpenChange={(open) => open ? handleOpenPopup('contact') : handleClosePopup()}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-full"
                          onClick={() => setContactPurpose("career")}>
                          Apply
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/careers.html">
                  View All Positions
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium mb-4" variant="secondary">
                Early Access
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Partner Program</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Be among the first to experience our AI-powered marketing platform and shape its future.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-xl p-8 border relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold mb-6">Partner Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Rocket className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Early Access</h4>
                      <p className="text-muted-foreground">Get exclusive access to new features before public release.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Zap className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Priority Support</h4>
                      <p className="text-muted-foreground">Direct access to our development team for feature requests and support.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <Users className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Special Pricing</h4>
                      <p className="text-muted-foreground">Exclusive discounts and custom pricing plans for early partners.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-xl p-8 border relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold mb-6">How It Works</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Join Waitlist</h4>
                      <p className="text-muted-foreground">Apply to become an early partner and get priority access.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Early Testing</h4>
                      <p className="text-muted-foreground">Test new features and provide feedback to shape the platform.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Launch Access</h4>
                      <p className="text-muted-foreground">Get full access to the platform with special partner benefits.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <Dialog open={contactFormOpen} onOpenChange={(open) => open ? handleOpenPopup('contact') : handleClosePopup()}>
                <DialogTrigger asChild>
                  <Button size="lg" className="rounded-full">
                    Contact
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  {formSubmitted ? (
                    <div className="py-6 text-center">
                      <div className="mb-4 size-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                        <Check className="size-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for contacting us. We'll respond to your inquiry soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactFormSubmit} className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="contact-name-partner">Name</Label>
                        <Input id="contact-name-partner" name="name" placeholder="Enter your name" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="contact-email-partner">Email</Label>
                        <Input id="contact-email-partner" name="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="contact-company-partner">Company</Label>
                        <Input id="contact-company-partner" name="company" placeholder="Enter your company name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="contact-purpose-partner">Purpose</Label>
                        <select
                          id="contact-purpose-partner"
                          name="purpose"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={contactPurpose}
                          onChange={(e) => setContactPurpose(e.target.value)}
                          required
                        >
                          <option value="">Select a purpose</option>
                          <option value="investment">Investment</option>
                          <option value="career">Career</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="contact-message-partner">Message</Label>
                        <textarea
                          id="contact-message-partner"
                          name="message"
                          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your message"
                          required
                        />
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <p><strong>Privacy commitment:</strong> We do not sell or share your data with third parties. You will not receive any marketing emails or newsletters unless explicitly requested.</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="contact-terms-partner" name="terms" required />
                        <label
                          htmlFor="contact-terms-partner"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the{" "}
                          <Link href="/privacy.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                            privacy policy
                          </Link>
                          {" "}and{" "}
                          <Link href="/terms.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                            terms & conditions
                          </Link>
                        </label>
                      </div>
                      <input type="hidden" name="_replyto" value="main@nuxela.com" />
                      <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Investor Section */}
        <section
          id="investors"
          className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">For Investors</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join us in revolutionizing the future of AI-powered marketing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Why Consider NUXELA?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                      <Rocket className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Growing Market</h4>
                      <p className="text-primary-foreground/80">Focusing on the expanding content marketing sector that's becoming essential for businesses.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                      <Zap className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Early-Stage Opportunity</h4>
                      <p className="text-primary-foreground/80">Chance to join at the foundational stage as we develop our market-validated approach.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                      <Users className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Dedicated Founding Team</h4>
                      <p className="text-primary-foreground/80">Committed founders with complementary technical and marketing expertise.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-primary-foreground/80 mb-6">
                  We're currently in the early stages of development and are open to discussing investment opportunities.
                </p>
                <Dialog open={contactFormOpen} onOpenChange={(open) => open ? handleOpenPopup('contact') : handleClosePopup()}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="secondary" className="rounded-full w-full">
                      Contact Us
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Contact Us</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and we'll get back to you as soon as possible.
                      </DialogDescription>
                    </DialogHeader>
                    {formSubmitted ? (
                      <div className="py-6 text-center">
                        <div className="mb-4 size-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                          <Check className="size-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">Thank you for contacting us. We'll respond to your inquiry soon.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactFormSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="contact-name-investor">Name</Label>
                          <Input id="contact-name-investor" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-email-investor">Email</Label>
                          <Input id="contact-email-investor" name="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-company-investor">Company</Label>
                          <Input id="contact-company-investor" name="company" placeholder="Enter your company name" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-purpose-investor">Purpose</Label>
                          <select
                            id="contact-purpose-investor"
                            name="purpose"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={contactPurpose}
                            onChange={(e) => setContactPurpose(e.target.value)}
                            required
                          >
                            <option value="">Select a purpose</option>
                            <option value="investment">Investment</option>
                            <option value="career">Career</option>
                            <option value="partnership">Partnership</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact-message-investor">Message</Label>
                          <textarea
                            id="contact-message-investor"
                            name="message"
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your message"
                            required
                          />
                        </div>
                        <div className="mt-2 text-xs text-muted-foreground">
                          <p><strong>Privacy commitment:</strong> We do not sell or share your data with third parties. You will not receive any marketing emails or newsletters unless explicitly requested.</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="contact-terms-investor" name="terms" required />
                          <label
                            htmlFor="contact-terms-investor"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree to the{" "}
                            <Link href="/privacy.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                              privacy policy
                            </Link>
                            {" "}and{" "}
                            <Link href="/terms.html" target="_blank" className="underline underline-offset-4 hover:text-primary">
                              terms & conditions
                            </Link>
                          </label>
                        </div>
                        <input type="hidden" name="_replyto" value="main@nuxela.com" />
                        <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container py-8">
          <div className="flex flex-wrap justify-between items-start gap-8">
            {/* Logo and Company Info */}
            <div className="flex items-center gap-3 mb-4">
              <Image src="/NUXELA_WEB/logo_black.svg" alt="NUXELA" width={40} height={40} className="w-auto h-10" />
              <div>
                <p className="font-bold text-xl">NUXELA</p>
                <p className="text-sm text-muted-foreground">Empowering businesses with AI-driven marketing</p>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="text-primary size-4 shrink-0" />
                <p className="text-sm">NUXELA LTD • Company №16403238 • D-U-N-S №233734504</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-primary size-4 shrink-0" />
                <p className="text-sm">71-75, SHELTON STREET, LONDON, WC2H 9JQ, United Kingdom</p>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="text-primary size-4 shrink-0" />
                <p className="text-sm">+44 2037502621</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-primary size-4 shrink-0" />
                <a href="mailto:contact@nuxela.com" className="text-sm hover:text-primary transition-colors">contact@nuxela.com</a>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <p className="font-medium mb-2">Legal</p>
              <div className="flex gap-4">
                <Link href="/terms.html" target="_blank" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
                <Link href="/privacy.html" target="_blank" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>

          {/* Disclaimer Note */}
          <div className="mt-8 pt-4 border-t">
            <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
              Please note that this website is under active development and information may be updated. 
              Most of the products presented are currently in the planning stage and scheduled for future release.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="mt-6 pt-4 border-t text-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} NUXELA LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
