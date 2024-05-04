import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import { ThumbnailsCarousel } from "./ThumbnailsCarousel"
import { CarSpecifications } from "./CarSpecifications"
import { LastCars } from "./LastCars"
import { CarEquipment } from "./CarEquipment"
import { CarDamage } from "./CarDamage"



export const CarInfoContent = ({ car }) => {
    return (
        <>
            <div className="flex justify-center items-center bg-slate-100">
                <div className="flex flex-col gap-8 px-4 py-8 xl:w-[1280px] w-full">
                    <div className="flex justify-start w-full">
                        <Link to={'..'} className="underline text-primary text-md text-start flex items-center">
                            <IoIosArrowBack /> Back to results</Link>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex flex-col gap-8">
                            <div>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-950">{car[0]?.title} - {car[0]?.transmission?.name} - {car[0]?.lots[0]?.odometer?.km}km</h1>
                                <p className="underline text-gray-500 text-sm mt-1">reference id: {car[0]?.id}</p>
                            </div>
                        
                            <ThumbnailsCarousel car={car} />

                            <div className="flex flex-col gap-1">
                                <CarSpecifications car={car} />
                                <CarEquipment car={car} />
                                <CarDamage car={car} />
                            </div> 
                        </div>

                        <div className="flex flex-col gap-4 lg:w-[1080px] w-full">
                            
                            <div className="p-4 bg-white border border-gray-300 shadow-2xl rounded-md">
                                <h1 className="text-lg font-medium text-gray-700">Time remaining</h1>
                                <h1 className="text-xl font-semibold text-gray-700">2d 20h</h1>
                            </div>
                            
                            <div className="bg-white border border-gray-300 shadow-2xl rounded-md">
                                <div className="flex gap-2 p-4">
                                    <button type="button" className="btn rounded-md border-1 border-black">Dynamic auction</button>
                                    <button type="button" className="btn rounded-md border-1 border-black">VAT Excluded</button>
                                </div>
                                <div className="p-4 border-t border-gray-300">
                                    <h1 className="text-lg font-semibold">
                                        <span className="underline text-primary"><Link to={'.'}>Register</Link></span> or <span className="underline text-primary">Login</span> to place a bid and to see all vehicle information.
                                    </h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <LastCars />
        </>
        
    )
}