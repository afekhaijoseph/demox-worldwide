import Subheading from "./components/Subheading"
import demoxLogo from './assets/images/demox-logo.png'
import Button from "./components/Button"

const Process = () => {
  return (
    <div id="our-process" className="bg-darkBackground text-secondary py-20">
        <div className="w-10/12 mx-auto">
            <Subheading variant="secondary">Our process</Subheading>
            <h2 className="text-4xl font-bold font-seri my-4">Effortless process, continuous supply.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#235a48] flex flex-col justify-between px-4 py-8 rounded-xl basis-full">
                    <div className="text-2xl">
                        <p>01.</p>
                        <p>Product Inquiry</p>
                    </div>
                    <div>
                        <div className="h-[30vh]"></div>
                    </div>
                    <div>
                        <p>We review your product specifications, quantity, and destination details, then confirm availability and pricing promptly.</p>
                    </div>
                </div>

                <div className="bg-[#235a48] flex flex-col justify-between px-4 py-8 rounded-xl basis-full">
                    <div className="text-2xl">
                        <p>02.</p>
                        <p>Quality Confirmation</p>
                    </div>
                    <div className="h-[30vh]"></div>
                    <div>
                        <p>Product grading and standards are verified, with documentation or samples provided where required.</p>
                    </div>
                </div>

                <div className="bg-[#235a48] flex flex-col justify-between px-4 py-8 rounded-xl basis-full">
                    <div className="text-2xl">
                        <p>03.</p>
                        <p>Agreement and Payment</p>
                    </div>
                    <div className="h-[30vh]"></div>
                    <div>
                        <p>We formalize terms through a clear contract outlining pricing, timelines, and payment conditions.</p>
                    </div>
                </div>

                <div className="bg-[#235a48] flex flex-col justify-between px-4 py-8 rounded-xl basis-full">
                    <div className="text-2xl">
                        <p>04.</p>
                        <p>Shipment and Documentation</p>
                    </div>
                    <div className="h-[30vh]"></div>
                    <div>
                        <p>Goods are professionally packaged and shipped, with all necessary export documents prepared for smooth clearance.</p>
                    </div>
                </div>
                </div>
                <div className="bg-[#235a48] my-4 rounded-xl p-4 flex justify-between">
                    <div className="items-center gap-1">
                        <div className="flex ml-4">
                            <img className="w-12 -ml-5" src={demoxLogo} alt="face of business owners" />
                            <img className="w-12 -ml-5" src={demoxLogo} alt="face of business owners" />
                            <img className="w-12 -ml-5" src={demoxLogo} alt="face of business owners" />
                            <img className="w-12 -ml-5" src={demoxLogo} alt="face of business owners" />
                        </div>
                        <p>Align with businesses that choose quality</p>
                    </div>
                    <div>
                        <Button label={'Get A Quote'}/>
                    </div>
                </div>
                </div>
    </div>
  )
}

export default Process