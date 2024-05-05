import { useState } from "react"
import { FaFilter } from "react-icons/fa"
import { RefineModal } from "./RefineModal"
import { Filters } from "./Filters"



export const Refine = () => {
    const [refineModal, setRefineModal] = useState(false)

    if (refineModal) return <RefineModal setRefineModal={setRefineModal} />

    return (
        <>
            <div className="w-full p-4 border bg-white rounded-md flex justify-between items-center lg:hidden">
                <h1 className="text-lg md:text-xl font-semibold">Please use filters to refine the results.</h1>
                <button type="button" className="btn btn-outline btn-primary md:btn-wide" onClick={() => {
                    setRefineModal(true)
                    document.body.classList.add('overflow-hidden')
                }}>
                    Filter <FaFilter />
                </button>
            </div>

            <div className="hidden lg:flex lg:flex-col w-full border border-gray-300 h-fit bg-white rounded-md">
                <div className="p-4">
                    <h1 className="text-2xl font-semibold">Refine by</h1>
                </div>
                <div>
                    <Filters />
                </div>
            </div>
        </>
        
    )
}