import { useState } from 'react'
import logo from '../assets/logo.png'
import { RegistrationForm } from '../components/RegistrationForm'
import { Link } from 'react-router-dom'
import { LoginModal } from '../components/LoginModal'


export const Register = () => {
    const [login, setLogin] = useState(false)
    return (
        <>
            <div className="w-full min-h-screen flex flex-col items-center bg-slate-100 p-4">
            
                <div className='flex flex-col md:w-[650px]'>
                    <div className='flex flex-col items-center mb-8'>
                        <img src={logo} alt="" className='w-32' onClick={() => window.location.href = '/'}/>
                        <h1 className='text-primary font-bold text-lg'>Used car wholesale made easy</h1>
                    </div>
                    <div className='border border-gray-300 bg-white p-8'>
                        <h1 className='text-primary text-2xl font-bold'>Create your account</h1>
                        <p className='mt-4 text-lg'>Create an account and start bidding today on our large selection of cars. We offer an extensive logistic network and personal support in your own language.</p>
                        <RegistrationForm />
                    </div>
                    <div className='flex items-center justify-center p-6'>
                        <div className='flex gap-6 items-center'>
                            <p className='text-sm font-medium md:text-md'>Already registered?</p>
                            <button 
                                type="button" 
                                className='btn btn-outline btn-primary'
                                onClick={() => setLogin(true)}>Login</button> 
                        </div>
                        
                    </div>
                </div>

                <div className='border-t border-gray-300 w-full flex flex-col items-center gap-4 pt-4'>
                    <p className='text-sm'>© 2024 AutoHub. All rights reserved.</p>
                    <div className='flex gap-4 text-sm'>
                        <Link to={''} className='link hover:link-primary'>Terms and conditions</Link>
                        <Link to={''} className='link hover:link-primary'>Privacy Notice</Link>
                        <Link to={''} className='link hover:link-primary'>Help</Link>
                    </div>
                </div>
            </div>
            { login && <LoginModal setLogin={setLogin} />}
        </>
    )
    
}