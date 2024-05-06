import { useEffect, useMemo, useState } from "react"
import { AuctionsContent } from "../components/AuctionsContent"
import { Loyout } from "../components/Loyout"
import { useSearchParams } from "react-router-dom"
import { Pagination } from "../components/Pagination"
import { Refine } from "../components/Refine"
import db from '../../data.json'



export const Auctions = () => {
    const [queries, setQueries] = useSearchParams({ page: 1, limit: 20})
    const [cars, setCars] = useState([])

    useEffect(() => {
        setCars(db.data.slice(
            parseInt(queries.get('limit')) * (parseInt(queries.get('page')) - 1),
            parseInt(queries.get('limit')) + (parseInt(queries.get('limit')) * (parseInt(queries.get('page')) - 1))
        ))
    }, [queries])



    return (
        <Loyout>
            <div className="flex justify-center items-center bg-slate-100">
                <div className="flex flex-col gap-4 px-4 py-8 xl:w-[1280px] w-full lg:flex-row lg:justify-between">
                    <Refine />
                    <div className="flex flex-col gap-8 w-full">
                        <AuctionsContent cars={cars}/>
                        <Pagination queries={queries} setQueries={setQueries}/> 
                    </div>
                    
                </div>
            </div>
        </Loyout>
    )
}