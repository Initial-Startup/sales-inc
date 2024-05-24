export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import FeatureVedioFolloUp from '@/components/featureVideoFolloUp'
import FeatureAvtarCreation from '@/components/featureAvtarCreation'
import FeatureBenifit from '@/components/featureBenifit'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <FeatureVedioFolloUp />
      <FeatureAvtarCreation />
      <FeatureBenifit />
      <Testimonials />
      <Newsletter />
    </>
  )
}
