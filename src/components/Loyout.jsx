import { Footer } from "./Footer"
import { Navbar } from "./Navbar"


export const Loyout = ({ children }) => {
    return (
        <>
            <Navbar />
            { children }
            <Footer />
        </>
    )
}