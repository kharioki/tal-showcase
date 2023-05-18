'use client';

import Image from 'next/image'
import assets from '@/assets'
import Button from './Button'

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div
      className={
        `min-h-screen flex justify-center items-center p-16 sm:p-8
         bg-cover bg-center bg-no-repeat w-full h-full
          ${banner === 'banner02' ? 'bg-banner02' : banner === 'banner' ? 'bg-banner' : ''}
      `}
    >
      <div className={
        `flex items-center 
        ${reverse ? 'flex-row-reverse md:flex-col-reverse' : 'flex-row md:flex-col'}
        ${reverse ? 'text-right' : 'text-left'}
        w-11/12 sm:w-full minmd:w-3/4`
      }>
        <div className={`flex-1 w-full flex justify-start flex-col md:mb-10 ${reverse ? 'fadeRightMini' : 'fadeLeftMini'}`}>
          <h1 className={`text-tertiary font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13`}>{title}</h1>
          <p className={`text-tertiary my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16`}>{description}</p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link='https://expo.dev/@kharioki_tony/nft-marketplace?serviceType=classic&distribution=expo-go'
            />
          )}
        </div>

        <div className={`flex-1 flex justify-center items-center p-8 sm:px-0`}>
          <Image
            src={mockupImg}
            alt="mockup"
            className={`
              ${reverse ? 'fadeLeftMini' : 'fadeRightMini'}
              w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain
            `}
            width='auto'
            height='auto'
          />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper
