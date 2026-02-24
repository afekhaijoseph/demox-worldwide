import demoxHero from '../src/assets/images/demox-hero.webp'
import cashew from '../src/assets/images/demox-world.webp'
import Button from './components/Button'
export const Hero = () => {
  return (
    <div className="w-full h-screen bg-cover text-secondary" style={{ backgroundImage: `url(${demoxHero})`}}>
      <div className='h-full bg-black/70 flex items-center '>
      <div className='w-10/12 mx-auto flex flex-col justify-evenly items-center lg:flex-row'>
      <div className='h-full flex flex-col gap-3 justify-center items-center text-center lg:items-start lg:text-start basis-full'>
        <h1 className="text-5xl font-bold font-serif leading-tight">Exporting Nature’s Best to Every Corner of the Globe</h1>
        <p className='text-lg mb-8 tracking-wide'>Fresh, high-quality agricultural produce, sourced responsibly and delivered reliably to markets around the world</p>
        <div>
          <Button label={'Request A Quote'}/>
        </div>
      </div>
        <div className='basis-full hidden lg:flex'>
        <div className='max-w-[400px] ml-auto'>
          <img className='w-full rounded-full' src={cashew} alt="" />
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Hero