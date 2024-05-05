import { useState } from "react"
import noThumb from '../assets/no-thumb.png'
import { FaCamera } from "react-icons/fa"
import { Link } from "react-router-dom"
import { MdNavigateNext } from "react-icons/md"



export const AuctionCard = ({ car }) => {

    const [thumb] = useState(() => {
        if (car?.lots[0]?.images?.normal) return car?.lots[0]?.images?.normal
        if (car?.lots[0]?.images?.big) return car?.lots[0]?.images?.big
        return noThumb
    })

    return (
        <div className="flex flex-col border border-gray-300 bg-white rounded-md shadow-2xl sm:w-full lg:w-[900px] md:flex-row md:justify-between h-full">
            
            <div className="md:flex md:flex-col md:border-r md:w-full md:border-gray-300">
               <Link to={`/car/info?auctionId=${car.id}`} preventScrollReset reloadDocument>
                    <div className="p-4">
                        <h1 className="text-xl font-bold">{car?.title} - {car?.transmission?.name} - {car?.lots[0]?.odometer?.km}km - {car?.fuel?.name}</h1>
                        <p className="text-md font-semibold text-gray-500">Buy now</p>
                    </div>
                </Link> 
                
                <Link to={`/car/info?auctionId=${car.id}`} preventScrollReset reloadDocument>
                    <div className="hidden md:px-4 md:flex md:gap-4">
                        <div className="relative">
                            <img src={(typeof thumb === 'string') ? thumb : thumb[0]} alt="" className="w-[400px]"/>
                            <div className="absolute bottom-0 left-0 bg-gray-950 opacity-60 flex justify-center items-center gap-2 px-2 py-1">
                                <FaCamera color="white"/>
                                <p className="text-white">{(typeof thumb === 'string') ? 0 : thumb.length}</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full justify-around">
                            <h1 className="font-semibold text-xl mb-4">${(Math.floor(Math.random() * 10000) + 1000)} <span className="text-sm">BUY NOW</span></h1>
                            <ul className="flex flex-col gap-1">
                                <li className="flex border-b pb-1">
                                    <p className="flex-1 font-medium">Registration</p>
                                    <p className="flex-1">{car.year}</p>
                                </li>

                                <li className="flex border-b pb-1">
                                    <p className="flex-1 font-medium">VIN</p>
                                    <p className="flex-1">{car.vin}</p>
                                </li>

                                <li className="flex border-b pb-1">
                                    <p className="flex-1 font-medium">Estate</p>
                                    <p className="flex-1">{car.lots[0].location.country.name}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Link>
                    

                <div className="hidden md:flex border-t border-gray-300 mt-4 p-4 gap-4 items-center">
                    <button type="button" className="btn rounded-md border-1 border-black">Dynamic auction</button>
                    <button type="button" className="btn rounded-md border-1 border-black">VAT Excluded</button>
                    <h1 className="text-md font-semibold"><span className="underline text-primary"><Link to={'.'}>Register</Link></span> or <span className="underline text-primary">Login</span> to place a bid and to see all vehicle information</h1>
                </div>

            </div>
            
            <div className="hidden md:flex md:justify-center md:items-center p-4 hover:bg-primary hover:text-white rounded-r">
                <Link to={`/car/info?auctionId=${car.id}`} preventScrollReset reloadDocument className="h-full">
                    <MdNavigateNext className="h-full text-xl"/>
                </Link>
            </div>
            
            <Link to={`/car/info?auctionId=${car.id}`} preventScrollReset reloadDocument className="md:hidden">
                <div className="relative border-t border-b border-gray-300">
                    <img src={(typeof thumb === 'string') ? thumb : thumb[0]} alt="" className="w-full"/>
                    <div className="absolute bottom-0 left-0 bg-gray-950 opacity-60 flex justify-center items-center gap-2 px-2 py-1">
                        <FaCamera color="white"/>
                        <p className="text-white">{(typeof thumb === 'string') ? 0 : thumb.length}</p>
                    </div>
                </div>
            </Link>

            <Link to={`/car/info?auctionId=${car.id}`} className="md:hidden">
                <div className="p-4">
                    <h1 className="font-semibold text-xl mb-4">${(Math.floor(Math.random() * 10000) + 1000)} <span className="text-sm">BUY NOW</span></h1>
                    <ul className="flex flex-col gap-1">
                        <li className="flex border-b pb-1">
                            <p className="flex-1 font-medium">Registration</p>
                            <p className="flex-1">{car.year}</p>
                        </li>

                        <li className="flex border-b pb-1">
                            <p className="flex-1 font-medium">VIN</p>
                            <p className="flex-1">{car.vin}</p>
                        </li>

                        <li className="flex border-b pb-1">
                            <p className="flex-1 font-medium">Estate</p>
                            <p className="flex-1">{car.lots[0].location.country.name}</p>
                        </li>
                    </ul>
                </div>
            </Link>

            

            <button type="button" className="btn btn-outline btn-primary m-4 text-lg rounded-full md:hidden">
                <Link to={`/car/info?auctionId=${car.id}`} className="w-full" preventScrollReset reloadDocument>
                    View Details
                </Link>
            </button>

            
        </div>
    )
}