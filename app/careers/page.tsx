"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowRight, Users, Rocket, Zap, Globe, Clock, Code, Briefcase, ChevronRight, Menu, X, Building2, MapPin, PhoneCall, ExternalLink, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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

export default function CareersPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [reportFormOpen, setReportFormOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [contactPurpose, setContactPurpose] = useState("")
  const [scrollPos, setScrollPos] = useState(0)

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
  }

  const handleClosePopup = () => {
    // Re-enable scrolling
    document.body.style.overflow = '';
    
    // Close popups
    setReportFormOpen(false);
    setContactFormOpen(false);
  }

  const positions = [
    {
      title: "Senior Prompt Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Join our AI team to develop and optimize advanced prompt engineering solutions for content marketing.",
      requirements: [
        "5+ years of experience in AI/ML development",
        "Strong background in natural language processing",
        "Experience with large language models",
        "Proficiency in Python and relevant AI frameworks"
      ],
      icon: <Code className="size-5" />
    },
    {
      title: "Legal Counsel",
      type: "Full-time",
      location: "Remote",
      description: "Help us navigate the complex legal landscape of AI and marketing technology.",
      requirements: [
        "Law degree with 3+ years of experience",
        "Background in technology law",
        "Understanding of AI regulations",
        "Experience with international business law"
      ],
      icon: <Briefcase className="size-5" />
    },
    {
      title: "N8N Developer",
      type: "Full-time",
      location: "Remote",
      description: "Build and optimize our automation infrastructure using N8N.",
      requirements: [
        "3+ years of experience with N8N",
        "Strong JavaScript/TypeScript skills",
        "Experience with API integrations",
        "Understanding of workflow automation"
      ],
      icon: <Code className="size-5" />
    },
    {
      title: "PR Manager",
      type: "Full-time",
      location: "Remote",
      description: "Shape our public image and communicate our vision to the world.",
      requirements: [
        "5+ years in PR or communications",
        "Experience in tech industry",
        "Strong media relationships",
        "Excellent writing and speaking skills"
      ],
      icon: <Briefcase className="size-5" />
    }
  ]

  const benefits = [
    {
      title: "Remote-First",
      description: "Work from anywhere in the world",
      icon: <Globe className="size-5" />
    },
    {
      title: "Flexible Hours",
      description: "Choose your optimal working schedule",
      icon: <Clock className="size-5" />
    },
    {
      title: "Equity",
      description: "Get a stake in our company's success",
      icon: <Rocket className="size-5" />
    },
    {
      title: "Growth",
      description: "Continuous learning and development",
      icon: <Zap className="size-5" />
    }
  ]

  return (
    <div className="min-h-screen">
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
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/#roadmap"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Roadmap
            </Link>
            <Link
              href="/#app-preview"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              App Preview
            </Link>
            <Link
              href="/#partners"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Partners
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium text-foreground transition-colors"
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
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
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
                  <Button className="w-full rounded-full">Send me the report</Button>
                </div>
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
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="contact-name">Name</Label>
                    <Input id="contact-name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-company">Company</Label>
                    <Input id="contact-company" placeholder="Enter your company name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-purpose">Purpose</Label>
                    <select
                      id="contact-purpose"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={contactPurpose}
                      onChange={(e) => setContactPurpose(e.target.value)}
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
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="contact-terms" />
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
                  <Button className="w-full rounded-full">Send Message</Button>
                </div>
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
              <Link href="/" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/#roadmap" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Roadmap
              </Link>
              <Link href="/#app-preview" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                App Preview
              </Link>
              <Link href="/#partners" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Partners
              </Link>
              <Link href="/careers" className="py-2 text-sm font-medium font-bold" onClick={() => setMobileMenuOpen(false)}>
                Careers
              </Link>
              <div className="flex flex-col gap-4 pt-4 border-t">
                <Dialog open={reportFormOpen} onOpenChange={(open) => open ? handleOpenPopup('report') : handleClosePopup()}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full rounded-full">
                      Get Full Report
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Dialog open={contactFormOpen} onOpenChange={(open) => open ? handleOpenPopup('contact') : handleClosePopup()}>
                  <DialogTrigger asChild>
                    <Button className="w-full rounded-full">
                      Contact
                      <ChevronRight className="ml-1 size-4" />
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-32">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium mb-4" variant="secondary">
              Join Our Team
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Build the Future of AI-Powered Marketing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're looking for talented individuals who want to shape the future of marketing technology.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join NUXELA?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a unique opportunity to work on cutting-edge technology while enjoying the benefits of a modern workplace.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-xl p-6 border"
              >
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our team and help us revolutionize the future of marketing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-xl p-8 border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {position.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{position.description}</p>
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                          <span className="text-xs">✓</span>
                        </div>
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full rounded-full" onClick={() => {
                  setContactFormOpen(true);
                  setContactPurpose("career");
                  handleOpenPopup('contact');
                }}>
                  Apply Now
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Dialog open={contactFormOpen} onOpenChange={(open) => open ? handleOpenPopup('contact') : handleClosePopup()}>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full" onClick={() => setContactPurpose("career")}>
                  Send Your Resume
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </DialogTrigger>
            </Dialog>
          </motion.div>
        </div>
      </section>

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

          {/* Bottom Bar */}
          <div className="mt-6 pt-4 border-t text-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} NUXELA LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 