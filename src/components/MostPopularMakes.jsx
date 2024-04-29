import { useState } from 'react'
import { thumbsColl } from '../config/makes'

export const MostPopularMakes = () => {

    const [showMore, setShowMore] = useState(false)

    const checkIndex = (i) => {
        if (showMore) return false
        if (i > 7) return true
        return false
    }

    return (
        <div className="flex justify-center bg-gray-100 border-b border-t">
            <div className="w-[1280px] px-4 py-8">
                <h1 className="text-center text-primary font-bold text-3xl">Most Popular Car Makes</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
                    {
                        thumbsColl.map((details, key) => {
                            return <div key={key} className={`${checkIndex(key) ? 'hidden': null } flex justify-center items-center hover:shadow-2xl`}>
                                <a href={details.name} className='p-4'>
                                    <img src={details.url} alt="" className='h-20'/>
                                </a>
                                
                            </div>
                        })
                    }
                </div>

                <div>
                    <button className="btn btn-outline btn-primary px-20 mt-4 rounded-full" onClick={() => setShowMore(!showMore)}>View {showMore ? 'less' : 'more'} makes</button>
                </div>
            </div>
        </div>
    )
}