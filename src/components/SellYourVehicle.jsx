import sell from '../assets/sellyourvehicle.webp'

export const SellYourVehicle = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-[1280px] px-4 py-8 md:flex-row">

                <div className="bg-primary text-white flex flex-col items-center w-full p-8 gap-8 justify-around shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <h1 className='text-3xl font-semibold'>Sell your vehicles</h1>
                    <p className='text-lg'>Sell high-quality second-hand vehicles in a snap via OPENLANE. Benefit from a large base of professional International customers.</p>
                    <button className="btn bg-white btn-wide border hover:border-white hover:bg-primary hover:text-white">
                        <a href="">Learn More</a>
                    </button>
                </div> 

                <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]    '>
                    <img src={sell} alt="" />
                </div> 

            </div>
        </div>
    )
}