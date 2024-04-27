import { Hero } from "../components/Hero"
import { LastCars } from "../components/LastCars"
import { Loyout } from "../components/Loyout"
import { WhyChoose } from "../components/WhyChoose"



export const Home = () => {
    return (
        <Loyout>
            <Hero />
            <WhyChoose />
            <LastCars />
        </Loyout>
    )
}