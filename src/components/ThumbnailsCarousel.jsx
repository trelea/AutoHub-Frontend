import { useEffect, useState } from "react"
import { MdOutlineCropFree } from "react-icons/md"
import { MdNavigateNext } from "react-icons/md"
import { GrFormPrevious } from "react-icons/gr"
import { ModalThumbs } from "./ModalThumbs"
import noThumb from "../assets/no-thumb.png"


export const ThumbnailsCarousel = ({ car }) => {

    const [imgIndex, setImgIndex] = useState(0)
    const [modalThumbs, setModalThumbs] = useState(false)
    const [images] = useState(() => {
        if (car[0]?.lots[0].images?.normal) return car[0]?.lots[0].images?.normal
        return car[0]?.lots[0].images?.big
    })

    if (modalThumbs) return <ModalThumbs car={car} imgIndex={imgIndex} setImgIndex={setImgIndex} setModalThumbs={setModalThumbs} />
    if (!images) return <div><img src={noThumb} alt=""  className="border border-gray-300 rounded-md"/></div>

    return (
        <div className="relative">
            
            <div className="absolute top-0 right-0 p-2 bg-gray-600 hover:bg-gray-900 m-1 rounded-md opacity-80 flex justify-center items-center">
                <button type="button" onClick={() => setModalThumbs(true)}>
                    <MdOutlineCropFree color={'white'} fontSize={'1.5rem'}/>
                </button>
            </div>

            <div className="">
                <img src={images[imgIndex]} alt="" className="w-full rounded-md"/>
            </div>


            <div className="absolute flex justify-between top-[50%] w-full px-2">
                <button type="button" 
                    className="bg-gray-600 p-2 rounded-md hover:bg-gray-800 opacity-80"
                    onClick={() => setImgIndex(imgIndex - 1)} disabled={(imgIndex <= 0) ? true : false }>
                    <GrFormPrevious fontSize={'1.5rem'} color="white"/> 
                </button>
                
                <button type="button"
                    className="bg-gray-600 p-2 rounded-md hover:bg-gray-800 opacity-80" 
                    onClick={() => setImgIndex(imgIndex + 1)} disabled={(imgIndex >= images.length - 1) ? true : false}>
                    <MdNavigateNext fontSize={'1.5rem'} color="white"/>
                </button>
            </div>

            <div className="absolute bottom-0 bg-gray-600 m-2 px-4 opacity-80 rounded-md">
                <h3 className="text-white font-medium">{imgIndex + 1} of {images.length}</h3>
            </div>
        </div>
    )
}