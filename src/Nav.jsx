import demoxlogo from '../src/assets/images/demox-logo.png'
import Button from './components/Button'
import { Menu } from 'lucide-react'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center px-10 py-3 bg-darkBackground'>
        <a href='/'>
        <div  className='flex flex-col gap-1 items-center'>
            <img className='w-10 lg:w-16' src={demoxlogo} alt="demox worldwide limited logo" />
            <div className='flex flex-col gap-0'> 
              <p className='text-accent font-serif text-lg uppercase'>Demox</p>
              <p className='text-secondary text-xs uppercase'>worldwide</p>
            </div>
        </div>
        </a>

        <div className='lg:flex gap-10 text-secondary tracking-wide hidden'>
                    <a href='#about' className='hover:text-secondAccent' >About Us</a>
                    <a href='#our-products' className='hover:text-secondAccent'>Our Products</a>
                    <a href='#why-choose-us' className='hover:text-secondAccent'>Why Choose Us</a>
                    <a href='#our-process' className='hover:text-secondAccent'>Our Process</a>
                    <a href='#faqs' className='hover:text-secondAccent'>Faqs</a>
                    <a href='#contact' className='hover:text-secondAccent'>Contact</a>
                </div>

        <div className='hidden lg:flex'>
          <Button variant='primary' label = {'Request a quote'}/>
        </div>

        <div className='text-secondary lg:hidden'>
          <Menu />
        </div>
    </nav>
  )
}

export default Nav