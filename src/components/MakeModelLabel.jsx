
import { makes } from "../config/makes"
import { useFindCarsStore } from '../store/findCarsStore'

export const MakeModelLabel = ({ id, c_make, c_model }) => {

    const { cars, removeCar, setMake, setModel } = useFindCarsStore(state => ({
        cars: state.cars,
        removeCar: state.removeCar,
        setMake: state.setMake,
        setModel: state.setModel
    }))

    return (
        <div className="flex flex-col gap-4 md:flex-row">
            <select className="select select-bordered w-full" onChange={e => setMake({ carId: id,  make: e.target.value })}>
                <option 
                    disabled={(c_make.length === 0) ? true : false} 
                    selected={(c_make.length === 0) ? true : false}
                    >{(c_make.length === 0) ? 'Make' : `${c_make}`}</option>
                    {
                        makes.map((make, key) => {
                            return <option value={make} key={key}>{make}</option>
                        })
                    }
            </select>

            <select className="select select-bordered w-full" onChange={e => setModel({ carId: id,  model: e.target.value })}>
                <option 
                    disabled={(c_model.length === 0) ? true : false} 
                    selected={(c_model.length === 0) ? true : false}
                    >{(c_model.length === 0) ? 'All models' : `${c_model}`}</option>
                    {
                        makes.map((make, key) => {
                            return <option value={make} key={key}>{make}</option>
                        })
                    }
            </select>

            <div className={`${(cars.length === 1) ? 'hidden' : 'flex'} justify-center items-center`}>
                <button type="button"
                    className='underline text-primary text-center text-sm'
                    onClick={() => removeCar(id)}>Remove</button>    
            </div>
            
        </div>
    )
}
