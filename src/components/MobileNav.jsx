import { X } from "lucide-react"

const MobileNav = ({closeMenu, isOpen}) => {
  return (
        <div className={`h-screen w-[70vw] bg-darkBackground right-0 top-0 overflow-hidden transform transition-transform duration-300 fixed z-50 ${
  isOpen ? "translate-x-0" : "translate-x-full"
}`}>
        <div className="text-secondary flex justify-end pr-8 pt-8">
            {<X onClick={closeMenu} size={50} />}
        </div>
    <div className="flex flex-col text-secondary gap-4 items-end my-8 mr-8">
      <a href="#about" onClick={closeMenu} className="hover:text-secondAccent">About Us</a>
      <a href="#our-products" onClick={closeMenu} className="hover:text-secondAccent">Our Products</a>
      <a href="#why-choose-us" onClick={closeMenu} className="hover:text-secondAccent">Why Choose Us</a>
      <a href="#our-process" onClick={closeMenu} className="hover:text-secondAccent">Our Process</a>
      <a href="#faqs" onClick={closeMenu} className="hover:text-secondAccent">Faqs</a>
      <a href="#contact" onClick={closeMenu} className="hover:text-secondAccent">Contact</a>
    </div>
    </div>
  )
}

export default MobileNav