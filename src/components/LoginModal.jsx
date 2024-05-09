import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'


export const LoginModal = ({ setLogin }) => {
    return (
        <div className="fixed top-0 left-0 h-screen w-screen z-50 md:flex md:justify-center md:items-center">
            
            <div className='md:fixed md:w-screen md:h-screen md:bg-black md:opacity-50 md:z-40'></div>

            <div className='h-full w-full md:h-fit md:w-[700px] md:border md:border-gray-300 md:z-50'>
                    
                <div className="bg-slate-50 w-full p-4 border-b border-gray-300 py-8">
                    <div className="flex justify-between items-center md:px-8">
                        <h1 className="text-xl font-semibold">Login</h1>
                        <button type="button" onClick={() => {
                            setLogin(false)
                            document.body.classList.remove('overflow-hidden')
                        }}>
                            <IoMdClose fontSize={'1.75rem'} className="text-gray-500 hover:text-black"/>
                        </button>
                    </div>
                </div>

                <div className='h-full bg-white py-4 px-12'>
                    <div className='w-full flex flex-col'>
                        <div className='flex flex-col gap-4 py-4 border-b border-gray-300'>
                            <label htmlFor="" className='text-md font-semibold'>Username</label>
                            <input type="text" placeholder="username..." className="input input-bordered input-primary w-full" />
                            <button type="button" className='btn btn-primary w-full text-white rounded-full'>Login</button>
                            <Link className='link link-primary'>Forgot password?</Link>
                        </div>
                        <div className='flex py-4 gap-1'>
                            <p>No account yet?</p>
                            <Link 
                                to={'/register'} 
                                className='link link-primary'
                                reloadDocument
                                preventScrollReset> Register</Link>
                        </div>
                    </div>
                </div>    
                
            </div>

        </div>
    )
}