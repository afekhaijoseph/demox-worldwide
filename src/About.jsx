import aboutOne from '../src/assets/images/about-one.webp'
import aboutTwo from '../src/assets/images/about-two.webp'
import Button from './components/Button'
import Subheading from './components/Subheading'
const About = () => {
  return (
<div id='about' className="bg-lightBackground py-20">
  <div className="w-9/12 flex flex-col mx-auto justify-between items-center gap-16 lg:flex-row">
    <div className='flex gap-3 basis-full'>
        <img className='w-full aspect-auto rounded-2xl' src={aboutOne} alt="" />
        <img className='w-full aspect-auto rounded-2xl' src={aboutTwo} alt="" />
    </div>
    <div className='basis-full'>
      <Subheading variant='primary'>About Us</Subheading>
            <h2 className='text-4xl my-4 font-bold font-serif'> Bridging Africa’s Agricultural Excellence with Global Markets </h2>
      <p className='mb-4 tracking-wide'> 
        DEMOX global worldwide ventures is your trusted link between Africa’s rich agricultural resources
        and global demand. We specialize in sourcing and exporting premium agro-commodities including cocoa, 
        cashew, sesame seeds, ginger, and other high-value produce.
      </p>
      <p className='mb-6 tracking-wide'>
        Through strong partnerships with farmers and suppliers, we ensure every shipment meets international 
        quality standards for safety, consistency, and reliability. Our operations are built on transparency, 
        efficiency, and long-term relationships.
      </p>
      <Button variant='secondary' label={'Learn More'}/>
    </div>
  </div>
</div>
  )
}

export default About