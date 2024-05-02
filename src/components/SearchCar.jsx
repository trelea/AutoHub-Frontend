import { useState } from "react"
import { IoMdAddCircle } from "react-icons/io";
import { MakeModelLabel } from "./MakeModelLabel";
import { useFindCarsStore } from "../store/findCarsStore";
import { miliages, registrations, engineSizes } from "../config/details"


export const SearchCar = () => {

    const [auctionSource, setAuctionSource] = useState(false)
    const [makeModel, setMakeModel] = useState(false)
    const [fuelType, setFuelType] = useState(false)
    const [transmission, setTransmission] = useState(false)
    const [miliage, setMiliage] = useState(false)
    const [registration, setRegistration] = useState(false)
    const [engine, setEngine] = useState(false)

    const { cars, newCar } = useFindCarsStore(state => ({
        cars: state.cars,
        newCar: state.newCar
    }))


    return (
        <div className="flex justify-center bg-gray-100">
            <div className="flex flex-col w-[1280px] px-4 py-8 gap-2">

                <div className="flex flex-col gap-4 md:flex-row md:justify-between mb-4">
                    <h1 className="text-primary font-bold text-3xl">Advanced search</h1>
                    <button type="button" className="btn btn-outline btn-primary rounded-full md:btn-wide">Reset all filters</button>
                </div>


                {/* Auction Source */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={auctionSource} onClick={() => setAuctionSource(!auctionSource)}/>
                    <div className="collapse-title text-lg font-semibold">Auction Source</div>  

                    <div className="collapse-content flex flex-col gap-2 md:flex-row">

                        <div className="flex items-center gap-4 md:flex-1">
                            <input type="radio" name="auction-source" id="" className="radio radio-primary" />
                            <label htmlFor="" className="text-lg font-medium">All sources</label>
                        </div>
                        <div className="flex items-center gap-4 md:flex-1">
                            <input type="radio" name="auction-source" id="" className="radio radio-primary" />
                            <label htmlFor="" className="text-lg font-medium">Domestic auctions</label>
                        </div>
                    </div>
                </div>


                {/* Make & Model */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={makeModel} onClick={() => setMakeModel(!makeModel)}/>
                    <div className="collapse-title text-lg font-semibold">Make & Model</div>  

                    <div className="collapse-content">

                        <div id="makeModelLabels" className="flex flex-col gap-2">
                            {
                                cars.map((_, key) => {
                                    return <MakeModelLabel key={key} id={_._id} c_make={_.make} c_model={_.model} />
                                })
                            }
                        </div>
                        

                        <button type="button" className={`${(cars.length === 3) ? 'hidden' : 'flex'} mt-4 gap-2`} onClick={() => newCar(cars[cars.length - 1]._id + 1)}>
                            <IoMdAddCircle fontSize={"1.5rem"} className="text-primary"/>
                            <label htmlFor="" className="text-primary font-medium">Add more</label>
                        </button>
                        
                    </div>
                </div>


                {/* Fuel Type */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={fuelType} onClick={() => setFuelType(!fuelType)}/>
                    <div className="collapse-title text-lg font-semibold">Fuel Type</div>  

                    <div className="collapse-content flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"> 
                        
                        <label className="cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="font-normal text-md">Petrol</span> 
                        </label>

                        <label className="cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="font-normal text-md">CNG</span> 
                        </label>

                        <label className="cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="font-normal text-md">Diesel</span> 
                        </label>

                        <label className="cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="font-normal text-md">Electric</span> 
                        </label>

                        <label className="cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="font-normal text-md">Hybrid</span> 
                        </label>

                        <label className="cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="font-normal text-md">Hydrogen</span> 
                        </label>

                        <label className="cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="font-normal text-md">LPG</span> 
                        </label>

                    </div>
                </div>


                {/* Transmission */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={transmission} onClick={() => setTransmission(!transmission)}/>
                    <div className="collapse-title text-lg font-semibold">Transmission</div>  

                    <div className="collapse-content flex flex-col gap-4 md:grid md:grid-cols-2s"> 
                        <label className="cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="font-normal text-md">Manual</span> 
                        </label>

                        <label className="cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="font-normal text-md">Automatic</span> 
                        </label>
                    </div>
                </div>


                {/* Miliage */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={miliage} onClick={() => setMiliage(!miliage)}/>
                    <div className="collapse-title text-lg font-semibold">Miliage</div>  

                    <div className="collapse-content flex gap-4"> 
                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>From</option>
                            {
                                miliages.map((m, key) => {
                                    return <option value={m} key={key}>{m}</option>
                                })
                            }
                        </select>

                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>To</option>
                            {
                                miliages.map((m, key) => {
                                    return <option value={m} key={key}>{m}</option>
                                })
                            }
                        </select>
                    </div>
                </div>


                {/* First registration */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={registration} onClick={() => setRegistration(!registration)}/>
                    <div className="collapse-title text-lg font-semibold">First Registration</div>  

                    <div className="collapse-content flex gap-4"> 
                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>From</option>
                            {
                                registrations.map((r, key) => {
                                    return <option value={r} key={key}>{r}</option>
                                })
                            }
                        </select>

                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>To</option>
                            {
                                registrations.map((r, key) => {
                                    return <option value={r} key={key}>{r}</option>
                                })
                            }
                        </select>
                    </div>
                </div>


                {/* Engine size */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={engine} onClick={() => setEngine(!engine)}/>
                    <div className="collapse-title text-lg font-semibold">Engine size</div>  

                    <div className="collapse-content flex gap-4"> 
                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>From</option>
                            {
                                engineSizes.map((s, key) => {
                                    return <option value={s} key={key}>{s} cc</option>
                                })
                            }
                        </select>

                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>To</option>
                            {
                                engineSizes.map((s, key) => {
                                    return <option value={s} key={key}>{s} cc</option>
                                })
                            }
                        </select>
                    </div>
                </div>


                {/* Power */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">Power</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* Body type */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">Body type</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* Current price */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">Current price</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* Equipment */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">Equipment</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* Colour */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">Colour</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* Number of seats */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">Number of seats</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* Origin country */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">Origin country</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* Seller */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">Seller</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* Damage */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">Damage</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* Emission standard */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">Emission standard</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* CO2 emission */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">CO2 emission</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* Auction type */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">Auction type</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* x-Time */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">x-Time</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>


                {/* VAT regime */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" />
                    <div className="collapse-title text-lg font-semibold">VAT regime</div>  

                    <div className="collapse-content"> 
                        <p>Content</p>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}