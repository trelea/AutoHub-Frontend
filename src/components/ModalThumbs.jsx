import { MdNavigateNext } from "react-icons/md"
import { GrFormPrevious } from "react-icons/gr"
import { IoCloseSharp } from "react-icons/io5"
import { useRef, useState } from "react"


export const ModalThumbs = ({ car, imgIndex, setImgIndex, setModalThumbs }) => {

    const ref = useRef(null)
    const [images] = useState(() => {
        if (car[0]?.lots[0].images?.big) return car[0]?.lots[0].images?.big
        return car[0]?.lots[0].images?.normal
    })

    return (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black z-50">

            <div className="flex flex-col h-full p-2 justify-between">

                <div className="flex items-center bg-zinc-500 rounded-md justify-between px-4">
                    <h1 className="text-white font-normal text-md md:text-xl py-4">{car[0]?.title} - {car[0]?.transmission?.name} - {car[0]?.lots[0]?.odometer?.km}km</h1>
                    <button type="button" onClick={() => setModalThumbs(false)} className="flex items-center gap-2">
                        <h1 className="text-white text-lg">Close</h1>
                        <IoCloseSharp color="white" fontSize={'2rem'}/>
                    </button>
                </div>

                <div className="relative">
                    <div className="flex justify-center items-center">
                        <img src={images[imgIndex]} alt="" className="lg:h-[700px] rounded-md"/>
                    </div>

                    <div className="absolute w-full flex justify-between top-[50%]">
                        <button type="button" 
                            className="bg-gray-600 p-2 rounded-md hover:bg-gray-800 opacity-80"
                            onClick={() => {
                                setImgIndex(imgIndex - 1)
                                ref.current.scrollLeft = ref.current.scrollLeft - 100
                            }} 
                            disabled={(imgIndex <= 0) ? true : false }>
                            <GrFormPrevious className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl"/>
                        </button>

                        <button type="button"
                            className="bg-gray-600 p-2 rounded-md hover:bg-gray-800 opacity-80"
                            onClick={() => {
                                setImgIndex(imgIndex + 1)
                                ref.current.scrollLeft = ref.current.scrollLeft + 100
                            }} 
                            disabled={(imgIndex >= images.length - 1) ? true : false}>
                            <MdNavigateNext className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center md:hidden">
                    <div className="w-fit bg-zinc-500">
                        <h3 className="text-white px-4">{imgIndex + 1} of {images.length}</h3>
                    </div>
                </div>

                <div className="hidden md:flex md:flex-col items-center gap-4">

                    <div className="w-fit bg-zinc-500 mr-2">
                        <h3 className="text-white px-4">{imgIndex + 1} of {images.length}</h3>
                    </div>

                    <div className="flex justify-center w-full">
                        <div className="flex overflow-scroll w-[1000px] gap-2" ref={ref}>
                            {
                                images.map((i, key) => {
                                    return <img key={key} src={i} className={` ${(key === imgIndex) && 'border-4 border-blue-600'} h-24 rounded-md`}/>
                                })
                            }
                        </div>
                            
                    </div>
                </div>
            </div>

        </div>
    )
}