
import { AuctionCard } from './AuctionCard'

export const AuctionsContent = ({ cars }) => {

    return (
        <div className="flex flex-col gap-2">
            {
                cars.map((car, key) => {
                    return <AuctionCard car={car} key={key}/>
                })
            }
        </div>
    )
}