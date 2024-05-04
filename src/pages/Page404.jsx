import { Loyout } from "../components/Loyout"

export const Page404 = () => {
    return (
        <Loyout>
            <div className="flex items-center flex-col justify-between p-20 bg-slate-100 gap-4">
                <h1 className="text-[8rem] font-extrabold border-2 rounded-full px-24 border-slate-400">404</h1>
                <h1 className="text-primary font-bold text-[4rem]">This page does not exist !</h1>
                <h1 className="text-gray-500 font-semibold text-[1.5rem]">The page you are loking for could not be found</h1>
            </div>
        </Loyout>
    )
}