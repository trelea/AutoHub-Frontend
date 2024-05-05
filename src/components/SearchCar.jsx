import { useState } from "react"
import { IoMdSearch } from "react-icons/io";
import { Filters } from "./Filters";

export const SearchCar = () => {
    return (
        <div className="flex justify-center bg-gray-100">
            <div className="flex flex-col w-[1280px] px-4 py-8 gap-2">

                <div className="flex flex-col gap-4 md:flex-row md:justify-between mb-4">
                    <h1 className="text-primary font-bold text-3xl">Advanced search</h1>
                    <button type="button" className="btn btn-outline btn-primary rounded-full md:btn-wide">Reset all filters</button>
                </div>

                <Filters />

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