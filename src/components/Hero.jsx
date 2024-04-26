import { useState } from 'react'
import bg from '../assets/auction.jpg'
import { top10Makes, makes } from '../config/makes'

export const Hero = () => {
    const [top] = useState(top10Makes)
    
    return (
        <div className="hero h-fit" style={{backgroundImage: `url("${bg}")`}}>
            <div className="hero-overlay bg-opacity-80"></div>

            <div className='flex flex-col-reverse justify-center items-center lg:items-start lg:w-[1080px] lg:flex-row lg:justify-between gap-10 my-12'>
                <div className="card shrink-0 shadow-2xl bg-base-100 w-[300px] md:w-[600px]">
                    <form className="card-body p-4 flex flex-col gap-6">

                        <div className='flex flex-col md:flex-row gap-6'>
                            <select className="select select-bordered w-full max-w-xs" defaultValue={'Make'}>
                                <option disabled hidden className='text-lg'>Make</option>
                                <optgroup label='Top 10 Makes'>
                                    {
                                        top.map((make, key) => {
                                            return <option key={key}>
                                                {make}
                                            </option>   
                                        })
                                    }
                                </optgroup>
                                <optgroup label='All Makes'>
                                    {
                                        makes.map((make, key) => {
                                            return <option key={key}>
                                                {make}
                                            </option>
                                        })
                                    }
                                </optgroup>
                            </select>

                            <select className="select select-bordered w-full max-w-xs" defaultValue={'Model'}>
                                <option disabled hidden className='text-lg'>Model</option>
                                <optgroup label='Top 10 Makes'>
                                    {
                                        top.map((make, key) => {
                                            return <option key={key}>
                                                {make}
                                            </option>   
                                        })
                                    }
                                </optgroup>
                            </select>
                        </div>

                        <div className='flex flex-col md:flex-row gap-6'>
                            <select className="select select-bordered w-full max-w-xs" defaultValue={'Fuel Type'}>
                                <option disabled hidden className='text-lg'>Fuel Type</option>
                                <option value="Petrol">Petrol</option>
                                <option value="CNG">CNG</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Hydrogen">Hydrogen</option>
                                <option value="LPG">LPG</option>
                            </select>

                            <select className="select select-bordered w-full max-w-xs" defaultValue={'Transmission'}>
                                <option disabled hidden className='text-lg'>Transmission</option>
                                <option value="Manual">Manual</option>
                                <option value="Automatic">Automatic</option>
                            </select>
                        </div>

                        <div className='flex flex-col md:flex-row gap-6'>
                            <select className="select select-bordered w-full max-w-xs" defaultValue={'Mileage'}>
                                <option disabled hidden className='text-lg'>Mileage</option>
                                <option value="< 20000">&lt; 20000</option>
                                <option value="20000 - 80000">20000 - 80000</option>
                                <option value="80000 - 140000">80000 - 140000</option>
                                <option value="140000 - 200000">140000 - 200000</option>
                                <option value="> 200000">&gt; 200000</option>
                            </select>

                            <select className="select select-bordered w-full max-w-xs" defaultValue={'Price'}>
                                <option disabled hidden className='text-lg'>Price</option>
                                <option value="< 3000">&lt; 3000</option>
                                <option value="3000 - 6000">3000 - 6000</option>
                                <option value="6000 - 10000">6000 - 10000</option>
                                <option value="10000 - 20000">10000 - 20000</option>
                                <option value="> 20000">&gt; 20000</option>
                            </select>
                        </div>
                        
                        <button className="btn btn-primary w-full">Show Cars</button>

                    </form>
                </div>

                <div className='text-white'>
                    <h1 className='text-2xl font-bold md:text-3xl text-center lg:text-start'>Buy and Sell the latest used cars for the fairest prices.</h1>
                    <p className='text-xl font-normal mt-10 hidden lg:block'>Passenger cars, vans, light trucks and even margin cars or damaged vehicles, you’re sure to find what you’re looking for.</p>
                </div>
            </div>
        </div>
    )
}