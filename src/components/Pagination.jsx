import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"

export const Pagination = ({ queries, setQueries }) => {

    return (
        <div className="flex flex-row-reverse items-center justify-between lg:flex-col lg:gap-4 lg:items-start w-full">

            <div className="flex justify-end w-full">
                <select className="select select-bordered select-sm select-primary">
                    <option disabled selected hidden>{queries.get('limit')} posts</option>
                    <option value={20}
                        onClick={() => {
                            setQueries({
                                page: parseInt(queries.get('page')),
                                limit: 20
                            })
                        }}
                        >20  posts</option>
                    <option value={50}
                        onClick={() => {
                            setQueries({
                                page: parseInt(queries.get('page')),
                                limit: 50
                            })
                        }}
                        >50  posts</option>
                    <option value={100}
                        onClick={() => {
                            setQueries({
                                page: parseInt(queries.get('page')),
                                limit: 100
                            })
                        }}
                        >100 posts</option>
                </select>
            </div>

            <div className="flex lg:justify-center w-full">
                <div className="join border border-primary">

                    <button 
                        className="join-item btn bg-white"
                        disabled={(parseInt(queries.get('page')) <= 1) ? true : false}
                        onClick={() => {
                            setQueries({
                                page: parseInt(queries.get('page')) - 1,
                                limit: parseInt(queries.get('limit'))
                            })
                            window.scrollTo(0, 0)
                        }}
                        ><GrFormPrevious /></button>

                    <input 
                        className="join-item btn btn-square bg-white" 
                        type="radio" 
                        name="page"
                        checked
                        aria-label={parseInt(queries.get('page'))}
                        onClick={() => {
                            setQueries({
                                page: parseInt(queries.get('page')),
                                limit: parseInt(queries.get('limit'))
                            })
                            window.scrollTo(0, 0)
                        }}
                        />

                    <input 
                        className="join-item btn btn-square bg-white" 
                        type="radio" 
                        name="page"
                        aria-label={parseInt(queries.get('page')) + 1}
                        onClick={() => {
                            setQueries({
                                page: parseInt(queries.get('page')) + 1,
                                limit: parseInt(queries.get('limit'))
                            })
                            window.scrollTo(0, 0)
                        }}
                        />

                    <input 
                        className="join-item btn btn-square bg-white" 
                        type="radio" 
                        name="page"
                        aria-label={parseInt(queries.get('page')) + 2}
                        onClick={() => {
                            setQueries({
                                page: parseInt(queries.get('page')) + 2,
                                limit: parseInt(queries.get('limit'))
                            })
                            window.scrollTo(0, 0)
                        }}
                        />

                    <button 
                        className="join-item btn bg-white"
                        onClick={() => {
                            setQueries({
                                page: parseInt(queries.get('page')) + 1,
                                limit: parseInt(queries.get('limit'))
                            })
                            window.scrollTo(0, 0)
                        }}
                        ><MdNavigateNext /></button>
                </div>
            </div>
            
        </div>
    )
}