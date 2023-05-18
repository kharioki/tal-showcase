'use client';

import assets from '../assets'
import Image from 'next/image';

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className='bg-white m-10 p-6 rounded-md flex justify-around items-center flex-col hover:shadow-lg cursor-pointer w-40 h-40 minlg:w-80 minlg:h-80'>
    <Image
      src={iconUrl}
      alt="icon"
      className='w-20 h-20 minlg:w-40 minlg:h-40 object-contain mb-1'
      width={144}
      height={144}
    />
    <p className='font-semibold font-IBMPlex text-base minlg:text-3xl text-tertiary'>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className='flex justify-center items-center p-16 sm:p-8 bg-banner03 bg-cover bg-center bg-no-repeat w-full h-full'>
      <div className='flex items-center w-full minmd:w-3/4flex-col text-center'>
        <div>
          <h1 className='text-tertiary font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13'>Technologies</h1>
          <p className='text-tertiary my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16'>
            Developed using a cross-platform technology, React Native and some other good stuff.
          </p>
        </div>
        <div className='flex justify-center flex-wrap'>
          <FeatureCard
            iconUrl={assets.reactNative}
            iconText='React Native'
          />
          <FeatureCard
            iconUrl={assets.javascript}
            iconText='Javascript'
          />
          <FeatureCard
            iconUrl={assets.prismaOrm}
            iconText='  Prisma ORM'
          />
        </div>
      </div>
    </div>
  )
}

export default Features
