import containers from '../src/assets/images/containers.jpg'
import Subheading from './components/Subheading'
import {Globe, Cog, ScrollText, Truck, Handshake } from 'lucide-react'

const WhyChooseUs = () => {
  return (
    <div id='why-choose-us' className='flex items-center bg-lightBackground text-gray-900'>
        <div className='lg:w-9/12 flex flex-col lg:flex-row mx-auto rounded-2xl items-center mt-20 mb-28 border'>
          <div className='basis-full'>
            <img className='rounded-3xl' src={containers} alt="why choose us image" />
          </div>
          <div className='lg:basis-full w-full relative'>
            <div className='w-full py-4 px-10 bg-accent rounded-2xl absolute top-1/2 md:top-1 lg:top-1/2 -translate-y-1/2 lg:-left-10'>
            <Subheading variant='secondary'>Why Choose Us</Subheading>    
            <h2 className='text-4xl font-bold font-serif my-4'>Global Buyers Trust Demox</h2>
            <div>
                <div className='flex gap-2 mb-2 items-center'>
                    <Globe size='35' className='bg-white rounded-full p-1 border-2 border-secondAccent'/>
                    <p>Global sourcing network</p>
                </div>
                <div className='flex gap-2 mb-2 items-center'>
                    <Cog size='35' className='bg-white rounded-full p-1 border-2 border-secondAccent'/>
                    <p>Strict quality control</p>
                </div>
                <div className='flex gap-2 mb-2 items-center'>
                    <ScrollText size='35' className='bg-white rounded-full p-1 border-2 border-secondAccent'/>
                    <p>Export documentation expertise</p>
                </div>
                <div className='flex gap-2 mb-2 items-center'>
                    <Truck size='35' className='bg-white rounded-full p-1 border-2 border-secondAccent'/>
                    <p>Global sourcing network</p>
                </div>
                
            </div>
        </div>
          </div> 
  
        </div>  
    </div>
  )
}

export default WhyChooseUs