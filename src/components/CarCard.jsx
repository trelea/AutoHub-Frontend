import { useState } from "react"
import noThumb from "../assets/no-thumb.png"


export const CarCard = ({ car }) => {
    const [thumb] = useState(car.lots[0]?.images?.normal[0])
    return (

        <div className="bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col w-64">

            <img src={thumb ? thumb : noThumb} alt="" className="rounded-t-lg aspect-auto h-[180px]"/>
            
            <div className="flex flex-col justify-between h-52 p-2">

                <div className="flex-1/3">
                    <h1><a href="" className="link link-primary no-underline text-lg font-semibold text-wrap">{car.title}</a></h1>
                </div>

                <div className="flex-1/3">
                    <p className="text-gray-600 font-medium">#{car.lots[0].lot}</p>
                    <p className="text-gray-600 font-medium">{car.lots[0].odometer.km} km</p>
                    <p className="text-gray-600 font-medium">{car.lots[0].location.state.name} {car.lots[0].location.city.name}</p>  
                </div>

                <button type="button" className="flex-1/3 btn w-full btn-primary">
                    <a href="">Details</a>
                </button>

            </div>
                
        </div>

    )
}