import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import TrustedBrands from '@/components/trusted-brands'
import Services from '@/components/services'
import DigitalMarketing from '@/components/digital-marketing'
import CaseStudies from '@/components/case-studies'
import Pricing from '@/components/pricing'
import CTABanner from '@/components/cta-banner'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-white via-purple-50 to-pink-50 overflow-hidden">
      <Navbar />
      <Hero />
      <TrustedBrands />
      <Services />
      <DigitalMarketing />
      <CaseStudies />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  )
}
