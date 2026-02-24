import demoxLogo from './assets/images/demox-logo.png'
import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-darkBackground py-20'>
        <div className="w-11/12 mx-auto flex flex-col gap-8 lg:flex-row items-start">
            <div className='flex flex-col gap-6 basis-full'>
                 <a href='/' className='w-fit flex flex-col gap-1 items-center'>
                    <img className='w-10 lg:w-16' src={demoxLogo} alt="demox worldwide limited logo" />
                    <p className='text-accent font-serif'>Demox</p>
                </a>
                <p className='text-secondary'>Your trusted link between Africa’s rich resources and global demand.</p>
                <div className='flex items-center gap-2'>
                    <div className='border-2 border-dashed rounded-full p-2 text-accent'>
                        <FaFacebookF size={20}/>
                    </div>          
                    <div className='border-2 border-dashed rounded-full p-2 text-accent'>
                        <FaInstagram size={20} />
                    </div>  
                    <div className='border-2 border-dashed rounded-full p-2 text-accent'>
                        <FaLinkedinIn size={20} />
                    </div>          
                </div>
            </div>

            <div className='text-secondary basis-full'>
                <h6 className='text-2xl font-serif font-bold mb-4'>Contact Info</h6>
                <div className='flex flex-col gap-1'>
                  <p>demoxworldwideltd@gmail.com</p>
                  <p>09030865030</p>
                  <p>No 24, Burma road, Apapa, Lagos</p>
                </div>
            </div>

            <div className='basis-full text-secondary'>
                <h6 className='text-2xl font-serif font-bold mb-4'>Quick Links</h6>
                <div className='flex flex-col gap-1'>
                    <a href='#about' className='hover:text-secondAccent' >About Us</a>
                    <a href='#our-products' className='hover:text-secondAccent'>Our Products</a>
                    <a href='#why-choose-us' className='hover:text-secondAccent'>Why Choose Us</a>
                    <a href='#our-process' className='hover:text-secondAccent'>Our Process</a>
                    <a href='#faqs' className='hover:text-secondAccent'>Faqs</a>
                    <a href='#contact' className='hover:text-secondAccent'>Contact</a>
                </div>
            </div>

            
            <div className='basis-full text-secondary'>
                <h6 className='text-2xl font-serif font-bold mb-4'>Our Products</h6>
                <ul className='flex flex-col gap-1'>
                    <li>Cocoa</li>
                    <li>Cashew</li>
                    <li>Ginger</li>
                    <li>Sesame</li>
                    <li>Faqs</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer