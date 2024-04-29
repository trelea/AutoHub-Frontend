import { Hero } from "../components/Hero"
import { LastCars } from "../components/LastCars"
import { Loyout } from "../components/Loyout"
import { MostPopularMakes } from "../components/MostPopularMakes"
import { SellYourVehicle } from "../components/SellYourVehicle"
import { WhyChoose } from "../components/WhyChoose"



export const Home = () => {
    return (
        <Loyout>
            <Hero />
            <WhyChoose />
            <LastCars />
            <SellYourVehicle />
            <MostPopularMakes />
        </Loyout>
    )
}