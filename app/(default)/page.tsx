export const metadata = {
  title: 'Text to Video Email Ai',
  description: 'With Text to video Email Ai, Convert any text into video email with user face . Turn Text prompts & documents make Professional looking Video Email in just a few clicks .',
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
