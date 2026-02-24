import threadBg from './assets/images/threaded.png' 
import Subheading from './components/Subheading'
import { Globe, ScrollText } from 'lucide-react'

const Contact = () => {
  return (
    <div id='contact' className="bg-contain" style={{backgroundImage: `url(${threadBg})`}}>
      <div className='w-full h-full bg-lightBackground/60 flex items-center'>
      <div className='w-10/12 lg:w-9/12 flex flex-col lg:flex-row mx-auto gap-12 my-20'>
        <div className='basis-full'>  
          <Subheading variant='secondary'> Contact Us</Subheading>
              <h2 className='text-4xl font-serif font-bold my-4'>Let’s Build a Reliable Global Partnership</h2>
              <p className='mb-10'>Have a product inquiry or ready to request a quote? Our team is available to provide detailed information, pricing, and export guidance tailored to your needs.</p>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='bg-lightBackground flex flex-col items-center basis-full gap-3 py-10'>
                  <div className='bg-darkBackground rounded-lg p-4 text-secondary'>
                    <ScrollText />
                  </div>
                  <p className='text-2xl text-center w-9/12 mx-auto font-serif'>Request a quote</p>
                </div>

                 <div className='bg-lightBackground flex flex-col items-center basis-full gap-3 py-10'>
                  <div className='bg-darkBackground rounded-lg p-4'>
                      <Globe className='text-secondary'/>
                  </div>
                  <p className='text-2xl text-center w-9/12 mx-auto font-serif'>Trusted global trade</p>
                </div>
              </div>
        </div>
        <div className='basis-full bg-lightBackground rounded-lg p-8'>
          <h3 className='text-3xl font-serif font-bold mb-4'>Leave A Message</h3>
          <form action="" className='bg-lightBackground flex flex-col gap-4'>
            <div className='flex gap-2 w-full'>
              <div className='basis-full'>
                <label htmlFor="name"></label>
                <input className='w-full p-2 border border-dimBackground rounded-lg' type="text" name='name' placeholder='Name'/>
              </div>

              <div className='basis-full'>
                <label htmlFor="email"></label>
                <input className='w-full p-2 border border-dimBackground rounded-lg' type="text" name='email' placeholder='Email' />
              </div>
            </div>

            <div className='w-full'>
              <label htmlFor="phone"></label>
              <input  className='w-full p-2 border border-dimBackground rounded-lg' type="text" name='phone' placeholder='Phone Number'/>
            </div>
            <div className='w-full'>
              <label htmlFor="message"></label>
              <textarea name='message' rows="5" cols="50" className='w-full border border-dimBackground rounded-lg p-2' placeholder='Message'></textarea>
            </div>
            <div>
              <button className='w-full bg-accent border-2 border-accent text-secondary py-3 rounded-tl-xl rounded-br-xl font-bold hover:bg-transparent hover:text-darkBackground hover:border-darkBackground '>Send Message</button>
            </div>
          </form>
        </div>
      </div>
        
      </div>

    </div>
  )
}

export default Contact