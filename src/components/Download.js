'use client';

import assets from '../assets'
import Image from 'next/image'
import Button from './Button';

const Download = () => {
  return (
    <div className='flex justify-center items-center p-16 sm:p-8 bg-white'>
      <div className='flex items-center w-full minmd:w-3/4 flex-col text-center'>
        <div>
          <h1 className='text-tertiary font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13'>
            Download it today
          </h1>
          <p className='text-tertiary my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16'>
            Get the app today and start booking your appointments.
          </p>
        </div>
        <Button
          assetUrl={assets.expo}
          link='https://expo.dev/artifacts/eas/eqNLXhUiEWwiCXgw2FeyqU.aab'
        />
        {/* <button className='bg-primary mt-4 py-4 px-6 text-white text-lg minmd:text-2xl font-IBMPlex font-medium rounded-lg hover:shadow-2xl'>
          Source Code
        </button> */}

        <div className='flex justify-center items-center'>
          <Image
            src={assets.scene}
            alt="download_png"
            className='w-full h-full object-cover'
            width='auto'
            height='auto'
          />
        </div>
      </div>
    </div>
  )
}

export default Download
