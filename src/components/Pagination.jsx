export const Pagination = ({ searchParams, setSearchParams }) => {

    const goPrevPage = () => {
        setSearchParams({
            page: parseInt(searchParams.get('page')) - 1,
            limit: searchParams.get('limit')
        })
        window.location.reload()
    }

    const goNextPage = () => {
        setSearchParams({
            page: parseInt(searchParams.get('page')) + 1,
            limit: searchParams.get('limit')
        })
        window.location.reload()
    }

    const goToPage = (pageNr) => {
        setSearchParams({
            page: pageNr,
            limit: searchParams.get('limit')
        })
        window.location.reload()
    }

    return (
        <div>

            <div className="join border border-gray-300">

                <button 
                    className="join-item btn bg-white"
                    disabled={(parseInt(searchParams.get('page')) <= 1) ? true : false}
                    onClick={() => goPrevPage()}>«</button>

                <input 
                    className="join-item btn btn-square bg-white" 
                    type="radio" 
                    name="page" 
                    aria-label={parseInt(searchParams.get('page'))}
                    onClick={() => goToPage(parseInt(searchParams.get('page')))}
                    checked/>

                <input 
                    className="join-item btn btn-square bg-white" 
                    type="radio" 
                    name="page"
                    onClick={() => goToPage(parseInt(searchParams.get('page')) + 1)}
                    aria-label={parseInt(searchParams.get('page')) + 1}/>

                <input 
                    className="join-item btn btn-square bg-white" 
                    type="radio" 
                    name="page"
                    onClick={() => goToPage(parseInt(searchParams.get('page')) + 2)}
                    aria-label={parseInt(searchParams.get('page')) + 2}/>

                <button 
                    className="join-item btn bg-white"
                    onClick={() => goNextPage()}>»</button>
            </div>
        </div>
    )
}