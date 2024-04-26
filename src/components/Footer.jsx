import { DownFoot } from "./DownFoot"
import { UpperFoot } from "./UpperFoot"


export const Footer = () => {
    return (
        <div className="bg-primary">
            <UpperFoot/>
            <DownFoot />
        </div>
    )
}