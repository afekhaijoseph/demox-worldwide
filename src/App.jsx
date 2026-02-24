import Nav from './Nav'
import './App.css'
import Hero  from './Hero'
import About from './About'
import Products from './Products'
import WhyChooseUs from './WhyChooseUs'
import Process from './Process'
import Faqs from './  Faqs'
import Cta from './Cta'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className='font-sans first-letter tracking-wide'>
      <Nav/>
      <Hero/>
      <About/>
      <Products/>
      <WhyChooseUs/>
      <Process/>
      <Faqs/>
      <Cta/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
