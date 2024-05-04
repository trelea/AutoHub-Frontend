import { useState } from "react"

export const CarDamage = ({ car }) => {
    const [damage, setDamage] = useState(false)
    return (
        <div className="collapse collapse-arrow border border-gray-300 rounded-md bg-white">
            <input type="radio" name="damage" checked={damage} onClick={() => setDamage(!damage)} /> 
            <div className="collapse-title text-md font-semibold">DAMAGE</div>

            <div className="collapse-content flex flex-col gap-2 p-0">

                <div className="flex flex-col gap-8 border-t pt-8 px-4 pb-4">
                    <h1 className="font-semibold text-xl">Damages</h1>
                    <ul className="flex flex-col gap-4">
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Main</p>
                            <p className="flex-1">{car[0]?.lots[0]?.damage?.main?.name}</p>
                        </li>
                        <li className="flex border-b pb-2">
                            <p className="flex-1">Secondary</p>
                            <p className="flex-1">{car[0]?.lots[0]?.damage?.second?.name}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}