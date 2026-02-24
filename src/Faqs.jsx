import warehouse from './assets/images/warehouse.webp'
import Subheading from './components/Subheading'
import Accordion from './components/Accordion'

const Faqs = () => {
  return (
    <div id='faqs' className="bg-dimBackground relative">
        <div className='h-screen mx-auto'>
        <div className='w-full lg:w-2/5 absolute lg:left-36 left-0 '>
            <img className='w-full' src={warehouse} alt="" />
        </div>
        <div className='w-full lg:w-[45vw] h-[80vh] lg:h-[90vh] absolute right-0 bottom-0 lg:top-16 lg:right-28  bg-lightBackground px-6 lg:px-16 py-6 rounded-xl'>
            <Subheading>Faqs</Subheading>
            <h2 className='text-4xl font-serif font-bold my-4'>Questions you may be asking</h2>
            <Accordion/>
        </div>
        </div>
    </div>
  )
}

export default Faqs