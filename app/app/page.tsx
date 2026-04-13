import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Brain, 
  Heart, 
  Moon, 
  TrendingUp, 
  Shield, 
  Smartphone,
  Clock,
  BarChart3,
  Sparkles
} from "lucide-react"

export default function AppLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <header className="border-b backdrop-blur-lg bg-background/80 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Image src="/logo_black.svg" alt="NUXELA" width={28} height={28} />
            <span>ORBA</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/app/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/app/terms" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Sparkles className="size-3.5 mr-1.5" />
                Coming Soon to App Store
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                ORBA
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Mood & Balance Tracker
              </p>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Track your emotional well-being, journal your thoughts, and gain insights 
                into your mental balance. Your personal wellness companion, designed with 
                privacy in mind.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" disabled className="rounded-full">
                  <Smartphone className="size-4 mr-2" />
                  Coming Soon
                </Button>
              </div>
              
              <p className="mt-6 text-sm text-muted-foreground">
                App Store release: 2026
              </p>
            </div>
          </div>
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-violet-200/20 dark:bg-violet-900/20 blur-[120px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-emerald-200/20 dark:bg-emerald-900/20 blur-[100px]" />
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to understand and improve your emotional well-being
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-violet-50 to-transparent dark:from-violet-950/20">
                <CardContent className="pt-6">
                  <div className="size-12 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center mb-4">
                    <Brain className="size-6 text-violet-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Mood Tracking</h3>
                  <p className="text-muted-foreground text-sm">
                    Log your daily moods with intuitive interfaces. Track patterns over time 
                    and understand what affects your emotional state.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-950/20">
                <CardContent className="pt-6">
                  <div className="size-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4">
                    <Heart className="size-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Guided Journaling</h3>
                  <p className="text-muted-foreground text-sm">
                    Reflect with thoughtful prompts. Our guided journals help you process 
                    emotions and gain deeper self-awareness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-950/20">
                <CardContent className="pt-6">
                  <div className="size-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-4">
                    <BarChart3 className="size-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Insights & Trends</h3>
                  <p className="text-muted-foreground text-sm">
                    Visualize your emotional journey with beautiful charts. Discover patterns 
                    and correlations in your well-being.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/20">
                <CardContent className="pt-6">
                  <div className="size-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                    <Moon className="size-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sleep & Balance</h3>
                  <p className="text-muted-foreground text-sm">
                    Connect your sleep data to understand how rest affects your mood. 
                    Build healthier daily rhythms.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-rose-50 to-transparent dark:from-rose-950/20">
                <CardContent className="pt-6">
                  <div className="size-12 rounded-xl bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center mb-4">
                    <TrendingUp className="size-6 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Progress Tracking</h3>
                  <p className="text-muted-foreground text-sm">
                    Set personal wellness goals and track your progress. Celebrate 
                    improvements in your mental health journey.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-cyan-50 to-transparent dark:from-cyan-950/20">
                <CardContent className="pt-6">
                  <div className="size-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mb-4">
                    <Shield className="size-6 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Privacy First</h3>
                  <p className="text-muted-foreground text-sm">
                    Your thoughts are yours alone. End-to-end encryption and strict 
                    privacy controls keep your data secure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About ORBA</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    ORBA is developed by NUXELA, a UK-based startup focused on AI-powered 
                    content and wellness tools.
                  </p>
                  <p>
                    We believe that understanding your emotional patterns is the first step 
                    toward a more balanced life. ORBA combines thoughtful design with 
                    powerful insights to help you on your wellness journey.
                  </p>
                  <p>
                    Built with privacy at its core, ORBA ensures that your personal 
                    reflections and mood data remain private and secure.
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="size-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Coming 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="size-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Privacy Focused</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-violet-100 to-emerald-100 dark:from-violet-950 dark:to-emerald-950 p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-20 rounded-2xl bg-white dark:bg-black shadow-lg flex items-center justify-center mx-auto">
                      <Image src="/logo_black.svg" alt="ORBA" width={48} height={48} />
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-lg">ORBA</p>
                      <p className="text-sm text-muted-foreground">Mood & Balance Tracker</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-8">
                Follow us on social media or sign up for updates to be notified when ORBA launches.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" disabled>
                  <Smartphone className="size-4 mr-2" />
                  Notify Me on Launch
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-t">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 font-semibold">
                <Image src="/logo_black.svg" alt="NUXELA" width={24} height={24} />
                <span>ORBA by NUXELA</span>
              </div>
              <div className="flex gap-8 text-sm">
                <Link href="/app/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/app/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
              <p>&copy; 2026 NUXELA LTD. All rights reserved.</p>
              <p className="mt-2">71-75, Shelton Street, London, WC2H 9JQ</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
