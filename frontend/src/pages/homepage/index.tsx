import { Footer } from '@/components/footer'
import { GrowthJourney } from '@/components/growthJourneyCard'
import { Jumbotron } from '@/components/jumbotron'
import { Navbar } from '@/components/navbar'
import { QuranList } from '@/components/quranList'
import { ContentLayout } from '@/layout/contentLayout'
import React from 'react'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Jumbotron />
        <ContentLayout>
            <GrowthJourney />
            <QuranList />
            <Footer />
        </ContentLayout>
    </div>
  )
}

export default Homepage
