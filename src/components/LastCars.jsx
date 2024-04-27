import { useEffect, useRef, useState } from 'react'
import db from '../../data.json'
import { CarCard } from './CarCard'
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"


export const LastCars = () => {
    const [cars, setCars] = useState([])
    const scrollDiv = useRef(null)

    useEffect(() => { for (let i = 0; i < 10; i++) setCars(oldData => [...oldData, db.data[i]]) }, [])

    const scrollLeft =  () => scrollDiv.current.scrollLeft = scrollDiv.current.scrollLeft - (256 + 16) 
    const scrollRight = () => scrollDiv.current.scrollLeft = scrollDiv.current.scrollLeft + 256 + 16

    return (
        <div className="bg-gray-200 xl:flex xl:justify-center">
            <div className='flex flex-col gap-8 px-4 py-8 xl:w-[1280px] relative'>
                <h1 className="text-center text-primary font-bold text-3xl">Last 10 Cars</h1>

                <div className="flex overflow-x-hidden" ref={scrollDiv}>
                    <div className="flex gap-4 pb-8">
                        {   
                            cars.map((car, id) => {
                                return <CarCard key={id} car={car} />
                            })
                        } 
                    </div>

                    <div className='absolute top-0 left-0 h-full flex justify-center items-center ml-4'>
                        <button className='bg-gray-800 opacity-70 rounded-lg' onClick={() => scrollLeft()}>
                            <GrFormPrevious fontSize={'3rem'} color='white'/>
                        </button>
                    </div>

                    <div className='absolute top-0 right-0 h-full flex justify-center items-center mr-4'>
                        <button className='bg-gray-800 opacity-70 rounded-lg' onClick={() => scrollRight()}>
                            <MdNavigateNext fontSize={'3rem'} color='white'/>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}