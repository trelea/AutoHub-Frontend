import { useState } from "react"
import { IoMdAddCircle } from "react-icons/io";
import { MakeModelLabel } from "./MakeModelLabel";
import { useFindCarsStore } from "../store/findCarsStore";
import { IoMdSearch } from "react-icons/io";
import { 
    miliages,
    registrations,
    engineSizes,
    hp,
    kW,
    bodyTypes,
    currentPrices,
    equipments,
    colours,
    seats,
    countries,
    damages,
    emissions,
    auctionTypes
} from "../config/details"


export const SearchCar = () => {


    const [auctionSource, setAuctionSource] = useState(false)
    const [makeModel, setMakeModel] = useState(false)
    const [fuelType, setFuelType] = useState(false)
    const [transmission, setTransmission] = useState(false)
    const [miliage, setMiliage] = useState(false)
    const [registration, setRegistration] = useState(false)
    const [engine, setEngine] = useState(false)
    const [power, setPower] = useState(false)
    const [powerType, setPowerType] = useState(0)
    const [bodyType, setBodyType] = useState(false)
    const [price, setPrice] = useState(false)
    const [equipment, setEquipment] = useState(false)
    const [colour, setColour] = useState(false)
    const [seat, setSeat] = useState(false)
    const [country, setCountry] = useState(false)
    const [damage, setDamage] = useState(false)
    const [emission, setEmission] = useState(false)
    const [CO2Emission, setCO2Emission] = useState(false)
    const [auctionType, setAuctionType] = useState(false)
    const [xTime, setXTime] = useState(false)
    const [vat, setVat] = useState(false)


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
                                    return <option value={m} key={key}>{(m === 'Any') ? 'Any': `${m} km`}</option>
                                })
                            }
                        </select>

                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>To</option>
                            {
                                miliages.map((m, key) => {
                                    return <option value={m} key={key}>{(m === 'Any') ? 'Any': m}</option>
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
                                    return <option value={r} key={key}>{(r === 'Any') ? 'Any' : r}</option>
                                })
                            }
                        </select>

                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>To</option>
                            {
                                registrations.map((r, key) => {
                                    return <option value={r} key={key}>{(r === 'Any') ? 'Any' : r}</option>
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
                                    return <option value={s} key={key}>{(s === 'Any') ? 'Any' : `${s} cc`}</option>
                                })
                            }
                        </select>

                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>To</option>
                            {
                                engineSizes.map((s, key) => {
                                    return <option value={s} key={key}>{(s === 'Any') ? 'Any' : `${s} cc`}</option>
                                })
                            }
                        </select>
                    </div>
                </div>


                {/* Power */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={power} onClick={() => setPower(!power)}/>
                    <div className="collapse-title text-lg font-semibold">Power</div>  

                    <div className="collapse-content flex flex-col gap-4"> 

                        <div className="flex items-center gap-4">
                            <label htmlFor="">hp</label>
                            <input type="radio" name="power" className="radio radio-primary" onChange={() => setPowerType(0)}/>
                            <label htmlFor="">kW</label>
                            <input type="radio" name="power" className="radio radio-primary" onChange={() => setPowerType(1)}/>
                        </div>

                        <div className="flex gap-4">
                            <select className="select select-bordered w-full">
                                <option disabled selected hidden>From</option>
                                {
                                    (powerType === 0) ?
                                        hp.map((h, key) => {
                                            return <option value={h} key={key}>{(h === 'Any') ? 'Any' : `${h} hp`}</option>
                                        }) :
                                        kW.map((k, key) => {
                                            return <option value={k} key={key}>{(k === 'Any') ? 'Any' : `${k} kW`}</option>
                                        })
                                }
                            </select>

                            <select className="select select-bordered w-full">
                                <option disabled selected hidden>To</option>
                                {
                                    (powerType === 0) ?
                                        hp.map((h, key) => {
                                            return <option value={h} key={key}>{(h === 'Any') ? 'Any' : `${h} hp`}</option>
                                        }) :
                                        kW.map((k, key) => {
                                            return <option value={k} key={key}>{(k === 'Any') ? 'Any' : `${k} kW`}</option>
                                        })
                                }
                            </select>
                        </div>
                    </div>
                </div>


                {/* Body type */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={bodyType} onClick={() => setBodyType(!bodyType)}/>
                    <div className="collapse-title text-lg font-semibold">Body type</div>  

                    <div className="collapse-content flex flex-col gap-4 md:grid md:grid-cols-3">
                        {
                            bodyTypes.map((bt, key) => {
                                return <label className="cursor-pointer flex gap-2" key={key}>
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="font-normal text-md">{bt}</span> 
                                        </label>
                            })
                        }
                    
                    </div>
                </div>


                {/* Current price */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={price} onClick={() => setPrice(!price)}/>
                    <div className="collapse-title text-lg font-semibold">Current price</div>  

                    <div className="collapse-content flex gap-4">
                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>From</option>
                            {
                                currentPrices.map((cp, key) => {
                                    return <option value={cp} key={key}>{cp}</option>
                                })
                            }
                        </select>

                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>To</option>
                            {
                                currentPrices.map((cp, key) => {
                                    return <option value={cp} key={key}>{cp}</option>
                                })
                            }
                        </select>
                    </div>
                </div>


                {/* Equipment */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={equipment} onClick={() => setEquipment(!equipment)}/>
                    <div className="collapse-title text-lg font-semibold">Equipment</div>  

                    <div className="collapse-content flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"> 
                        {
                            equipments.map((e, key) => {
                                return <label className="cursor-pointer flex gap-2" key={key}>
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="font-normal text-md">{e}</span> 
                                        </label>
                            })
                        }
                    </div>
                </div>


                {/* Colour */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={colour} onClick={() => setColour(!colour)}/>
                    <div className="collapse-title text-lg font-semibold">Colour</div>  

                    <div className="collapse-content flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"> 
                        {
                            colours.map((c, key) => {
                                return <label className="cursor-pointer flex gap-2" key={key}>
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="font-normal text-md">{c}</span> 
                                        </label>
                            })
                        }
                    </div>
                </div>


                {/* Number of seats */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={seat} onClick={() => setSeat(!seat)}/>
                    <div className="collapse-title text-lg font-semibold">Number of seats</div>  

                    <div className="collapse-content flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"> 
                        {
                            seats.map((s, key) => {
                                return <label className="cursor-pointer flex gap-2" key={key}>
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="font-normal text-md">{(s === 'more') ? '>10' : s}</span> 
                                        </label>
                            })
                        }
                    </div>
                </div>


                {/* Origin country */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={country} onClick={() => setCountry(!country)} />
                    <div className="collapse-title text-lg font-semibold">Origin country</div>  

                    <div className="collapse-content flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"> 
                        {
                            countries.map((c, key) => {
                                return <label className="cursor-pointer flex gap-2" key={key}>
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="font-normal text-md">{c}</span> 
                                        </label>
                            })
                        }
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
                    <input type="radio" checked={damage} onClick={() => setDamage(!damage)}/>
                    <div className="collapse-title text-lg font-semibold">Damage</div>  

                    <div className="collapse-content flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"> 
                        {
                            damages.map((d, key) => {
                                return <label className="cursor-pointer flex gap-2" key={key}>
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="font-normal text-md">{d}</span> 
                                        </label>
                            })
                        }
                    </div>
                </div>


                {/* Emission standard */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={emission} onClick={() => setEmission(!emission)} />
                    <div className="collapse-title text-lg font-semibold">Emission standard</div>  

                    <div className="collapse-content flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"> 
                        {
                            emissions.map((e, key) => {
                                return <label className="cursor-pointer flex gap-2" key={key}>
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="font-normal text-md">{e}</span> 
                                        </label>
                            })
                        }
                    </div>
                </div>


                {/* CO2 emission */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={CO2Emission} onClick={() => setCO2Emission(!CO2Emission)}/>
                    <div className="collapse-title text-lg font-semibold">CO2 emission</div>  

                    <div className="collapse-content flex gap-4 items-center"> 
                        <label htmlFor="">g/km</label>
                        <input type="number" placeholder="0" className="input input-bordered input-md w-full" />
                        <label htmlFor="">-</label>
                        <input type="number" placeholder="999" className="input input-bordered input-md w-full" />
                    </div>
                </div>


                {/* Auction type */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={auctionType} onClick={() => setAuctionType(!auctionType)}/>
                    <div className="collapse-title text-lg font-semibold">Auction type</div>  

                    <div className="collapse-content flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"> 
                        {
                            auctionTypes.map((at, key) => {
                                return <label className="cursor-pointer flex gap-2" key={key}>
                                            <input type="checkbox" className="checkbox checkbox-primary" />
                                            <span className="font-normal text-md">{at}</span> 
                                        </label>
                            })
                        }
                    </div>
                </div>


                {/* x-Time */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={xTime} onClick={() => setXTime(!xTime)} />
                    <div className="collapse-title text-lg font-semibold">x-Time</div>  

                    <div className="collapse-content"> 
                        <label className="cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="font-normal text-md">Show x-Time only</span> 
                        </label>
                    </div>
                </div>


                {/* VAT regime */}
                <div className="collapse collapse-arrow border border-gray-300 bg-white rounded-none">
                    <input type="radio" checked={vat} onClick={() => setVat(!vat)}/>
                    <div className="collapse-title text-lg font-semibold">VAT regime</div>  

                    <div className="collapse-content"> 
                        <label className="cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-primary" />
                            <span className="font-normal text-md">Show margin cars only</span> 
                        </label>
                    </div>
                </div>

                {/* Show Button  */}
                <div className="flex justify-end mt-8">
                    <button className="btn btn-primary rounded-full text-md text-white">
                        Show 120 vehicles
                        <IoMdSearch fontSize={'1.25rem'}/>
                    </button>
                </div>
                
            </div>
        </div>
        
    )
}