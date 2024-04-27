import { useState } from "react"

export const WhyChoose = () => {
    const [card, setCard] = useState(1)

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-8 w-[1280px] px-4 py-8">
                <h1 className="text-center text-primary font-bold text-3xl">Why Choose AuthHub ?</h1>

                <div className="card bg-base-200 shadow-xl border border-1 border-gray-300 md:flex md:flex-row">
                    <div className={(card === 1) ? 'card-body w-full px-2' : 'hidden card-body w-full px-2 md:block'}>
                        <h2 className="text-xl text-center font-semibold mb-4">High-quality second-hand vehicles</h2>
                        <p className="p-2">We sell high-quality second-hand vehicles exclusively and directly to car dealers and traders.  All cars come with quality car descriptions and inspections. Start to buy cars today!</p>
                    </div>

                    <div className={(card === 2) ? 'card-body w-full px-2' : 'hidden card-body w-full px-2 md:block md:border-r md:border-l'}>
                        <h2 className="text-xl text-center font-semibold mb-4">One secure platform</h2>
                        <p className="p-2">We offer one international platform to access all our vehicles, one partner to deal with, one way of working and a solid expertise in cross-border sales. It's all about being fast, easy and hassle-free.</p>
                    </div>

                    <div className={(card === 3) ? 'card-body w-full px-2' : 'hidden card-body w-full px-2 md:block'}>
                        <h2 className="text-xl text-center font-semibold mb-4">We take care of you</h2>
                        <p className="p-2">Your single contact person speaks your language. We offer transport, delivery and financing solutions. We deliver what we promise.</p>
                    </div>

                    <div className="md:hidden flex gap-2 justify-center items-center p-2">
                        <input type="radio" name="selection" id="1" className="radio h-4 w-4" checked={(card === 1) ? true : false} onClick={() => setCard(1)}/>
                        <input type="radio" name="selection" id="2" className="radio h-4 w-4" checked={(card === 2) ? true : false} onClick={() => setCard(2)}/>
                        <input type="radio" name="selection" id="3" className="radio h-4 w-4" checked={(card === 3) ? true : false} onClick={() => setCard(3)}/>
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:flex-row w-full">
                    <button className="btn btn-outline btn-primary rounded-full flex-1">
                        <a href="">Learn More</a>
                    </button>
                    <button className="btn btn-primary rounded-full flex-1">
                        <a href="">Register Now</a>
                    </button>
                </div>

            </div>

        </div>
        
    )
}