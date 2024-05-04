import { CarInfoContent } from "../components/CarInfoContent"
import { Loyout } from "../components/Loyout"
import { useSearchParams } from "react-router-dom"
import db from '../../data.json'
import { useState } from "react"
import { Page404 } from "./Page404"


export const CarInfo = () => {
    const [auctionId] = useSearchParams()
    const [car] = useState(db.data.filter(car => car.id === parseInt(auctionId.get('auctionId'))))

    if (car.length === 0) return <Page404 />

    return <Loyout>
        <CarInfoContent car={car}/>
    </Loyout> 
}