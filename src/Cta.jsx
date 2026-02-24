import globalBg from './assets/images/global.webp'
import Button from './components/Button'


const Cta = () => {
  return (
    <div className='h-[70vh] bg-cover bg-no-repeat bg-bottom' style={{ backgroundImage: `url(${globalBg})` }}>
        <div className='bg-darkBackground/90 h-full'>
        <div className='flex flex-col items-center justify-center h-full'>
            <div>
                <h2 className='text-5xl text-secondary font-serif font-bold mb-8 text-center'>Ready to Source Premium Agricultural Produce?</h2>
                <div className='flex items-center'>
                    <Button label={'Get A Quote'} />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cta