import { useState } from "react"
import { RiErrorWarningFill } from "react-icons/ri"

export const CarSpecifications = ({ car }) => {
    const [carProfile, setCarProfile] = useState(true)

    return (
        <div className="collapse collapse-arrow border border-gray-300 rounded-md bg-white">
            <input type="radio" name="specification" checked={carProfile} onClick={() => setCarProfile(!carProfile)} /> 
            <div className="collapse-title text-md font-semibold">CAR PROFILE</div>
            <div className="collapse-content border-t felx flex-col gap-2">
                <div className="flex flex-col gap-8 mt-8">
                    <h1 className="font-semibold text-xl">Specifications</h1>
                    <ul className="flex flex-col gap-4">
                        <li className="flex border-b pb-2">
                            <p className="flex-1">First registration</p>
                            <p className="flex-1">{car[0]?.year}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Mileage</p>
                            <p className="flex-1">{car[0]?.lots[0]?.odometer?.km}km</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Fuel type</p>
                            <p className="flex-1">{car[0]?.fuel?.name}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Transmission type</p>
                            <p className="flex-1">{car[0]?.transmission?.name}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Engine size</p>
                            <p className="flex-1">{car[0]?.engine?.name}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Body type</p>
                            <p className="flex-1">{car[0]?.body_type?.name}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Cylinders</p>
                            <p className="flex-1">{car[0]?.cylinders}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">VIN</p>
                            <p className="flex-1">{car[0]?.vin}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Keys available</p>
                            <p className="flex-1">{(car[0]?.lots[0]?.keys_available) ? 'true' : 'false'}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Paint</p>
                            <p className="flex-1">{car[0]?.color.name}</p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8 mt-8">
                    <h1 className="font-semibold text-xl">Fiscal regime</h1>
                    <ul className="flex flex-col gap-4">
                        <li className="flex border-b pb-2">
                            <p className="flex-1">VAT</p>
                            <p className="flex-1">VAT excluded</p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8 mt-8">
                    <h1 className="font-semibold text-xl">Documents and history</h1>
                    <div className="bg-blue-100 flex border-2 border-blue-600 w-full justify-between p-2 gap-8 rounded-md">
                        <div>
                            <RiErrorWarningFill className="text-blue-600 text-5xl"/>
                        </div>
                        
                        <ul className="list-disc">
                            <li className="text-md font-semibold">The vehicle will be ready for pick-up within 20 working days. The vehicle should be picked up by truck using a CMR.</li>
                            <li className="text-md font-semibold">If our transport service is ordered the car documents will be released as soon as the car is on route to the final destination, otherwise the car documents will be released after the receipt of the signed and stamped CMR.</li>
                        </ul>
                        
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Car registration document(s)</p>
                            <p className="flex-1">Complete</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Certificate of conformity (COC)</p>
                            <p className="flex-1 text-red-600">Not available</p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8 mt-8">
                    <h1 className="font-semibold text-xl">Origin</h1>
                    <div className="bg-blue-100 flex border-2 border-blue-600 w-full p-2 gap-8 rounded-md items-center">
                        <div>
                            <RiErrorWarningFill className="text-blue-600 text-5xl"/>
                        </div>
                        
                        <h1 className="text-md font-semibold">Within 2 working days, the seller will decide whether or not the car will be assigned.</h1>
                        
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li className="flex border-b pb-2">
                            <p className="flex-1">City</p>
                            <p className="flex-1">{car[0]?.lots[0]?.location?.city?.name}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Country</p>
                            <p className="flex-1">{car[0]?.lots[0]?.location?.country?.name}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Location</p>
                            <p className="flex-1">{car[0]?.lots[0]?.location?.location?.name}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">State</p>
                            <p className="flex-1">{car[0]?.lots[0]?.location?.state?.name}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Postal code</p>
                            <p className="flex-1">{car[0]?.lots[0]?.location?.postal_code}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Longitude</p>
                            <p className="flex-1">{car[0]?.lots[0]?.location?.longitude}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Latitude</p>
                            <p className="flex-1">{car[0]?.lots[0]?.location?.latitude}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Lot</p>
                            <p className="flex-1">{car[0]?.lots[0]?.lot}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
}