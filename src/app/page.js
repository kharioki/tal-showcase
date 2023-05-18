'use client';

import { Download, Features, SectionWrapper } from "@/components";
import assets from '@/assets'

export default function Home() {
  return (
    <>
      <SectionWrapper
        title="The Appointment Lab. Start booking today!"
        description="View, review and book sessions with your favorite service provider. No more queues. Plan ahead and save time."
        showBtn
        mockupImg={assets.feature}
        banner="banner"
      />
      <SectionWrapper
        title="Smooth User Experience"
        description="Experience a buttery UI at the tip of your fingers. Smooth constant colors with a touch of modern design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Built using Expo, this app is ready for the App Store and Play Store. We are testing it now, and then we roll it out."
        mockupImg={assets.homeHero}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase your business"
        description="The app contains two user journeys, one for you the service provider / business owner and one for your clients. Sometimes even you wanna be a client so we got you covered."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center text-center bg-banner04 bg-cover bg-center bg-no-repeat w-full h-full">
        <p className="text-tertiary my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16">
          Made with love by {' '}
          <span className="font-bold">Kharioki</span>
        </p>
      </div>
    </>
  )
}
