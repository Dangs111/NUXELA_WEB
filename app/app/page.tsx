import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

const screenshots = [
  { src: "/ORBA/IMG_8152.PNG", alt: "ORBA App Screenshot 1" },
  { src: "/ORBA/IMG_8153.PNG", alt: "ORBA App Screenshot 2" },
  { src: "/ORBA/IMG_8154.PNG", alt: "ORBA App Screenshot 3" },
]

export default function AppLandingPage() {
  return (
    <div className="min-h-screen text-white bg-[#09090b]">
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-3">
          <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
            <Image src="/logo_black.svg" alt="NUXELA" width={20} height={20} className="opacity-60" />
            <span className="text-sm">nuxela.com</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 to-transparent blur-3xl" />
                
                <div className="relative bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 rounded-2xl lg:rounded-3xl p-3 lg:p-6 border border-zinc-800">
                  <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide snap-x">
                    {screenshots.map((screenshot, i) => (
                      <div 
                        key={i} 
                        className="flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-[9/19.5] rounded-xl overflow-hidden border border-zinc-700/50 bg-zinc-800 snap-center"
                      >
                        <Image 
                          src={screenshot.src} 
                          alt={screenshot.alt}
                          width={300}
                          height={650}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center gap-1.5 mt-3">
                    {screenshots.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          i === 0 ? "bg-violet-500" : "bg-zinc-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shadow-xl shadow-violet-500/20 border border-zinc-700">
                  <Image 
                    src="/ORBA/ORBA_App_Icon.png" 
                    alt="ORBA Icon"
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">ORBA</h1>
                  <p className="text-zinc-400 text-sm sm:text-base">Mood & Balance Tracker</p>
                </div>
              </div>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Track your emotions, journal your thoughts, and discover patterns in your well-being. 
                Your personal wellness companion with privacy at its core.
              </p>

              <Badge variant="secondary" className="bg-violet-500/10 text-violet-400 border-violet-500/20 px-3 py-1 text-xs sm:text-sm">
                <Smartphone className="size-3 mr-1" />
                Coming Soon to App Store
              </Badge>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button disabled className="rounded-lg sm:rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 h-10 sm:h-11 text-sm sm:text-base">
                  <Smartphone className="size-4 mr-2" />
                  App Store
                </Button>
                
                <div className="flex gap-2 sm:gap-3">
                  <Link href="/app/privacy">
                    <Button className="rounded-lg sm:rounded-xl bg-zinc-100 text-zinc-900 hover:bg-white h-10 sm:h-11 text-sm px-3 sm:px-4">
                      Privacy
                    </Button>
                  </Link>
                  <Link href="/app/terms">
                    <Button className="rounded-lg sm:rounded-xl bg-zinc-100 text-zinc-900 hover:bg-white h-10 sm:h-11 text-sm px-3 sm:px-4">
                      Terms
                    </Button>
                  </Link>
                </div>
              </div>

              <p className="text-xs text-zinc-600 pt-2">
                By NUXELA LTD
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
