import logo from '../assets/logo.png'
import { RegistrationForm } from '../components/RegistrationForm'


export const Register = () => {
    return (
       <div className="w-full min-h-screen flex flex-col items-center bg-slate-100 p-4">
        
            <div className='flex flex-col md:w-[650px]'>
                <div className='flex flex-col items-center mb-8'>
                    <img src={logo} alt="" className='w-32'/>
                    <h1 className='text-primary font-bold text-lg'>Used car wholesale made easy</h1>
                </div>
                <div className='border border-gray-300 bg-white p-8'>
                    <h1 className='text-primary text-2xl font-bold'>Create your account</h1>
                    <p className='mt-4 text-lg'>Create an account and start bidding today on our large selection of cars. We offer an extensive logistic network and personal support in your own language.</p>
                    <RegistrationForm />
                </div>
            </div>
            <div>

            </div>
        </div> 
    )
    
}