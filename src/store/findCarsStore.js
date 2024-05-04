import { create } from "zustand";


// STORE CONTAINS ONLY 3 CARS
export const useFindCarsStore = create(set => ({
    cars: [
        { _id: 1, make: '', model: '' },
    ],

    setMake: ({ carId, make }) => {
        set(state => ({
            cars: state.cars.map((car) => {
                if (car._id === carId) car.make = make
                return car
            })
        }))
    },

    setModel: ({ carId, model }) => {
        set(state => ({
            cars: state.cars.map((car) => {
                if (car._id === carId) car.model = model
                return car
            })
        }))
    },

    newCar: (carId) => {
        set(state => ({
            cars: [
                ...state.cars,
                { _id: carId, make: '', model: ''}
            ]
        }))
    },

    removeCar: (carId) => {
        set(state => ({
            cars: state.cars.filter(car => car._id !== carId)
        }))
    }

}))