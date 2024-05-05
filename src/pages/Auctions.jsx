import { useEffect, useState } from "react"
import { AuctionsContent } from "../components/AuctionsContent"
import { Loyout } from "../components/Loyout"
import { useSearchParams } from "react-router-dom"
import db from '../../data.json'
import { Pagination } from "../components/Pagination"
import { Refine } from "../components/Refine"





export const Auctions = () => {
    
    const [searchParams, setSearchParams] = useSearchParams({ page: 1, limit: 20})
    const [cars, setCars] = useState([])

    useEffect(() => {
        const page = parseInt(searchParams.get('limit')) * (parseInt(searchParams.get('page')) - 1)
        const limit = parseInt(searchParams.get('limit')) + page
        setCars(db.data.slice(page, limit))


    }, [searchParams])

    return (
        <Loyout>
            <div className="flex justify-center items-center bg-slate-100">
                <div className="flex flex-col gap-4 px-4 py-8 xl:w-[1280px] w-full lg:flex-row lg:justify-between">
                    <Refine />
                    <div>
                       <AuctionsContent cars={cars}/>
                        <Pagination searchParams={searchParams} setSearchParams={setSearchParams} /> 
                    </div>
                    
                </div>
            </div>
        </Loyout>
    )
}