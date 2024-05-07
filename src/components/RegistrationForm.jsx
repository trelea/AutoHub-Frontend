import { useState } from "react"
import { countries } from "../config/details"


export const RegistrationForm = () => {
    const [step, setStep] = useState(1)
    const [warning, setWarning] = useState(null)

    const handleVATNumber = e => {
        e.preventDefault()
        if (e.target[0].value.length < 5) return setWarning('Invalid VAT Number')
        else setWarning(null)
        setStep(2)
    }

    const handleCompanyDetails = e => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="mt-4 flex flex-col gap-8">

            <div className="">
                <h1 className={`${(step >= 1) ? null : 'text-gray-400' } text-xl font-bold`}>1. VAT number</h1>
                <form 
                    className={(step >= 1) ? 'mr-4 border-l-2 border-gray-300 border-dashed ml-3 pl-3' :  'hidden'}
                    onSubmit={e => handleVATNumber(e)}>
                    <p className="py-4">We work exclusively with professional car traders. To create an account, we need to verify your VAT number.</p>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="" className="text-lg font-bold">VAT number</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary" placeholder="e.g. BE0887129223"/>
                        <p className={(warning !== null) ? 'text-center text-red-600': 'hidden'}>{warning}</p>
                        <button type="submit" className="btn btn-primary btn-active w-full rounded-full">Continue</button> 
                    </div>
                    
                </form>
            </div>

            <div className="">
                <h1 className={`${(step >= 2) ? null : 'text-gray-400' } text-xl font-bold`}>2. Company details</h1>
                <form 
                    className={(step >= 2) ? 'mr-4 border-l-2 border-gray-300 border-dashed ml-3 pl-3 flex flex-col gap-4 pt-4' :  'hidden'}
                    onSubmit={e => handleCompanyDetails(e)}>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Company name *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Company address line 1 *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Company address line 2 (optional)</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Postal code *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">City *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Country *</label>
                        <select className="select select-bordered w-full focus:outline-primary">
                            <option disabled selected hidden></option>
                            {
                                countries.map((country, key) => {
                                    return <option value={country} key={key}>{country}</option>
                                })
                            }
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary btn-active w-full rounded-full">Continue</button> 
                    
                </form>
            </div>


            <div className="">
                <h1 className={`${(step >= 3) ? null : 'text-gray-400' } text-xl font-bold`}>3. Personal details</h1>
                <form className={(step >= 3) ? 'mr-4 border-l-2 border-gray-300 border-dashed ml-3 pl-3 flex flex-col gap-4 pt-4' :  'hidden'}>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">First name *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Last name *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Email address *</label>
                        <input type="email" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Confirm email address *</label>
                        <input type="email" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Mobile phone *</label>
                        <input type="tel" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                    </div>

                    <button type="button" className="btn btn-primary btn-active w-full rounded-full">Create my account</button> 
                    
                </form>
            </div>
        </div>
    )
}