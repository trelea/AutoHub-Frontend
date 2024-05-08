import { useState } from "react"
import { countries } from "../config/details"
import { BiHide } from "react-icons/bi"
import { FaEye } from "react-icons/fa"
import { Link } from "react-router-dom"


export const RegistrationForm = () => {

    const [userDataRegistration, setUserDataRegistration] = useState({
        vat_number: '', company_name: '', company_addr_line_1: '', company_addr_line_2: '', postal_code: '', city: '', country: ''
    })

    const [step, setStep] = useState(1)
    const [warningVAT, setWarningVAT] = useState(null)
    const [warningsCompany, setWarningsCompany] = useState({})
    const [warningsPersonal, setWarningsPersonal] = useState({})

    const [showPass, setShowPass] = useState(false)
    const [confirmShowPass, setConfirmShowPass] = useState(false)

    const [passwordRules, setPasswordRules] = useState({ chars: false, upper: false, lower: false, num: false, special: false })
    const validatePassword = (e) => {
        const lengthRegex = /.{8,}/
        const uppercaseRegex = /(?=.*[A-Z])/
        const lowercaseRegex = /(?=.*[a-z])/
        const digitRegex = /(?=.*\d)/
        const specialCharRegex = /(?=.*[^\w\s])/      
        setPasswordRules({
            chars: lengthRegex.test(e.target.value),
            upper: uppercaseRegex.test(e.target.value),
            lower: lowercaseRegex.test(e.target.value),
            num: digitRegex.test(e.target.value),
            special: specialCharRegex.test(e.target.value)
        })
    }

    const handleVATNumber = e => {
        e.preventDefault()
        if (e.target[0].value.length < 5) return setWarningVAT('Invalid VAT Number')
        else setWarningVAT(null)
        setUserDataRegistration({ ...userDataRegistration, vat_number: e.target[0].value })
        setStep(2)
    }


    const handleCompanyDetails = e => {
        e.preventDefault()
        let __warnings = {}
        if (e.target[0].value.length <= 4) __warnings = { ...__warnings, company_name: 'Invalid Company Name'}
        if (e.target[1].value.length <= 4) __warnings = { ...__warnings, company_addr_line_1: 'Invalid Company address line 1'}
        if (e.target[2].value.length <= 4) __warnings = { ...__warnings, company_addr_line_2: 'Invalid Company address line 2'}
        if (e.target[3].value.length <= 4) __warnings = { ...__warnings, postal_code: 'Invalid Postal Code'}
        if (e.target[4].value.length <= 4) __warnings = { ...__warnings, city: 'Invalid City'}
        if (e.target[5].value.length <= 4) __warnings = { ...__warnings, country: 'Invalid Country'}
        if (Object.keys(__warnings).length === 0) {
            setWarningsCompany(null)
            setUserDataRegistration({
                ...userDataRegistration,
                company_name: e.target[0].value,
                company_addr_line_1: e.target[1].value,
                company_addr_line_2: e.target[2].value,
                postal_code: e.target[3].value,
                city: e.target[4].value,
                country: e.target[5].value
            })
            return setStep(3)
        }
        setWarningsCompany({ ...__warnings })
        __warnings = {}
    }

    const handlePersonalDetails = e => {
        e.preventDefault()
        let __warnings = {}
        if (e.target[0].value.length <= 2) __warnings = { ...__warnings, first_name: 'Invalid First Name'}
        if (e.target[1].value.length <= 2) __warnings = { ...__warnings, last_name: 'Invalid Last Name'}
        if (e.target[2].value.length <= 4) __warnings = { ...__warnings, email_addr: 'Invalid Email Address'}
        if (e.target[3].value.length <= 4 || e.target[3].value !== e.target[2].value) __warnings = { ...__warnings, email_addr: 'Invalid Email Address'}
        if (!e.target[4].value) __warnings = { ...__warnings, country: 'Invalid Country' }
        if (e.target[5].value.length <= 7) __warnings = { ...__warnings, phone_nr: 'Invalid Phone Number' }
        if (!e.target[6].value) __warnings = { ...__warnings, contact_language: 'Invalid Contact Language' }
        if (e.target[7].value.length <= 2) __warnings = { ...__warnings, username: 'Invalid Username' }
        if (e.target[10].value !== e.target[8].value) __warnings = { ...__warnings, confirm_paswd: 'Invalid Confirmation Password'}
        if (!e.target[12].checked || !e.target[13].checked || !e.target[14].checked) __warnings = { ...__warnings, conditions: 'Agree to Terms and Conditions'}
        if (Object.keys(__warnings).length === 0) {
            setWarningsPersonal(null)
            setUserDataRegistration({
                ...userDataRegistration,
                first_name: e.target[0].value,
                last_name: e.target[1].value,
                email_addr: e.target[2].value,
                phone_nr: e.target[5].value,
                contact_language: e.target[6].value,
                username: e.target[7].value,
                password: e.target[8].value
            })
            console.log(userDataRegistration)
            setTimeout(() => {
                return window.location.href = '/'
            }, 2000)   
        }
        setWarningsPersonal(__warnings)
        __warnings = {}

    }

    return (
        <div className="mt-4 flex flex-col gap-6">

            <div className="">
                <h1 className={`${(step >= 1) ? null : 'text-gray-400' } text-xl font-bold`}>1. VAT number</h1>
                <form 
                    className={(step >= 1) ? 'mr-4 border-l-2 border-gray-300 border-dashed ml-3 pl-3' :  'hidden'}
                    onSubmit={e => handleVATNumber(e)}>
                    <p className="py-4">We work exclusively with professional car traders. To create an account, we need to verify your VAT number.</p>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="" className="text-lg font-bold">VAT number</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary" placeholder="e.g. BE0887129223"/>
                        <p className={(warningVAT !== null) ? 'text-red-600': 'hidden'}>{warningVAT}</p>
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
                        <p className={(warningsCompany?.company_name) ? 'text-red-600 mt-1': 'hidden'}>{warningsCompany?.company_name    }</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Company address line 1 *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                        <p className={(warningsCompany?.company_addr_line_1) ? 'text-red-600 mt-1': 'hidden'}>{warningsCompany?.company_addr_line_1}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Company address line 2 (optional)</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                        <p className={(warningsCompany?.company_addr_line_2) ? 'text-red-600 mt-1': 'hidden'}>{warningsCompany?.company_addr_line_2}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Postal code *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                        <p className={(warningsCompany?.postal_code) ? 'text-red-600 mt-1': 'hidden'}>{warningsCompany?.postal_code}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">City *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary"/>
                        <p className={(warningsCompany?.city) ? 'text-red-600 mt-1': 'hidden'}>{warningsCompany?.city}</p>
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
                        <p className={(warningsCompany?.company_name) ? 'text-red-600 mt-1': 'hidden'}>{warningsCompany?.country}</p>
                    </div>

                    <button type="submit" className="btn btn-primary btn-active w-full rounded-full">Continue</button> 
                    
                </form>
            </div>

            <div className="">
                <h1 className={`${(step >= 3) ? null : 'text-gray-400' } text-xl font-bold`}>3. Personal details</h1>

                <form 
                    className={(step >= 3) ? 'mr-4 border-l-2 border-gray-300 border-dashed ml-3 pl-3 flex flex-col gap-4 pt-4' :  'hidden'}
                    onSubmit={e => handlePersonalDetails(e)}>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">First name *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary" />
                        <p className={(warningsPersonal?.first_name) ? 'text-red-600 mt-1': 'hidden'}>{warningsPersonal?.first_name}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Last name *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary" />
                        <p className={(warningsPersonal?.last_name) ? 'text-red-600 mt-1': 'hidden'}>{warningsPersonal?.last_name}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Email address *</label>
                        <input type="email" name="" id="" className="input border border-gray-300 focus:outline-primary" />
                        <p className={(warningsPersonal?.email_addr) ? 'text-red-600 mt-1': 'hidden'}>{warningsPersonal?.email_addr}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Confirm email address *</label>
                        <input type="email" name="" id="" className="input border border-gray-300 focus:outline-primary" />
                        <p className={(warningsPersonal?.email_addr) ? 'text-red-600 mt-1': 'hidden'}>{warningsPersonal?.email_addr}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Mobile phone *</label>
                        <div className="flex w-full">
                            <select className="select select-bordered focus:outline-primary w-28 rounded-r-none">
                                <option disabled selected hidden></option>
                                {
                                    countries.map((country, key) => {
                                        return <option value={country} key={key}>{country}</option>
                                    })
                                }
                            </select>
                            <input type="tel" name="" id="" className="input border border-gray-300 focus:outline-primary w-full rounded-l-none" placeholder="phone number..."/>
                        </div>
                        <p className={(warningsPersonal?.phone_nr) ? 'text-red-600 mt-1': 'hidden'}>{warningsPersonal?.phone_nr}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Preferred contact language</label>
                        <select className="select select-bordered w-full focus:outline-primary">
                            <option disabled selected hidden>English</option>
                            {
                                countries.map((country, key) => {
                                    return <option value={country} key={key}>{country}</option>
                                })
                            }
                        </select>
                        <p className={(warningsPersonal?.contact_language) ? 'text-red-600 mt-1': 'hidden'}>{warningsPersonal?.contact_language}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Username *</label>
                        <input type="text" name="" id="" className="input border border-gray-300 focus:outline-primary" />
                        <p className={(warningsPersonal?.username) ? 'text-red-600 mt-1': 'hidden'}>{warningsPersonal?.username}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Password *</label>
                        <div className="relative w-full">
                            <input 
                                type={ showPass ? 'text': 'password'} name="" id="" 
                                className="input border border-gray-300 focus:outline-primary w-full"
                                onChange={e => validatePassword(e)}/>
                            <button 
                                type="button"
                                className="absolute top-0 right-0 h-full flex justify-center items-center pr-4"
                                onClick={() => setShowPass(!showPass)}>
                                { showPass ? <FaEye className="text-xl"/> : <BiHide className="text-xl"/> }
                            </button>
                            
                        </div>
                        <ul className="ml-8 mt-4 list-disc mb-4">
                            <li className={`text-sm ${passwordRules.chars ? 'text-gray-400' : 'text-black'}`}>8 characters minimum</li>
                            <li className={`text-sm ${passwordRules.upper ? 'text-gray-400' : 'text-black'}`}>One uppercase character</li>
                            <li className={`text-sm ${passwordRules.lower ? 'text-gray-400' : 'text-black'}`}>One lowercase character</li>
                            <li className={`text-sm ${passwordRules.num ? 'text-gray-400' : 'text-black'}`}>One number</li>
                            <li className={`text-sm ${passwordRules.special ? 'text-gray-400' : 'text-black'}`}>One special character</li>
                            <li className={`text-sm ${passwordRules.chars ? 'text-gray-400' : 'text-black'}`}>Password should not contain your username</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-bold text-md">Confirm password *</label>
                        <div className="relative w-full">
                            <input type={ confirmShowPass ? 'text': 'password'} name="" id="" className="input border border-gray-300 focus:outline-primary w-full" />
                            <button 
                                type="button"
                                className="absolute top-0 right-0 h-full flex justify-center items-center pr-4"
                                onClick={() => setConfirmShowPass(!confirmShowPass)}>
                                { confirmShowPass ? <FaEye className="text-xl"/> : <BiHide className="text-xl"/> }
                            </button>
                        </div>
                        <p className={(warningsPersonal?.confirm_paswd) ? 'text-red-600 mt-1': 'hidden'}>{warningsPersonal?.confirm_paswd}</p>
                        <div className="flex flex-col gap-3 mt-4">
                            <div className="flex gap-3">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <label htmlFor="">I confirm that I am a professional car trader.</label>
                            </div>

                            <div className="flex gap-3">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <label htmlFor="">I agree with the
                                    <Link to={'/'} className="link link-primary ml-1">terms and conditions</Link>
                                </label>
                            </div>

                            <div className="flex gap-3">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <label htmlFor="">I subscribe to the AutoHub monthly newsletter (optional).</label>
                            </div>

                            <p className="text-sm">All data will be treated confidentially and will only be used internally.</p>
                        </div>
                        <p className={(warningsPersonal?.conditions) ? 'text-red-600 mt-1': 'hidden'}>{warningsPersonal?.conditions}</p>
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary btn-active w-full rounded-full"
                        >Create my account</button> 
                    
                </form>
            </div>
        </div>
    )
}