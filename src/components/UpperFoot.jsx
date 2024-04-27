export const UpperFoot = () => {
    return (
        <div className="flex justify-center">
            <footer className="hidden md:flex md:justify-between md:footer md:p-10 md:text-white xl:w-[1280px] px-4">
                <nav>
                    <h6 className="text-white text-xl font-semibold">Services</h6> 
                    <a className="link link-hover text-md font-medium">Branding</a>
                    <a className="link link-hover text-md font-medium">Design</a>
                    <a className="link link-hover text-md font-medium">Marketing</a>
                    <a className="link link-hover text-md font-medium">Advertisement</a>
                </nav> 
                <nav>
                    <h6 className="text-white text-xl font-semibold">Company</h6> 
                    <a className="link link-hover text-md font-medium">About us</a>
                    <a className="link link-hover text-md font-medium">Contact</a>
                    <a className="link link-hover text-md font-medium">Jobs</a>
                    <a className="link link-hover text-md font-medium">Press kit</a>
                </nav> 
                <nav>
                    <h6 className="text-white text-xl font-semibold">Legal</h6> 
                    <a className="link link-hover text-md font-medium">Terms of use</a>
                    <a className="link link-hover text-md font-medium">Privacy policy</a>
                    <a className="link link-hover text-md font-medium">Cookie policy</a>
                </nav>
            </footer>

            <div className="join join-vertical w-full md:hidden text-white">

                <div className="collapse collapse-arrow join-item">
                    <input type="radio" name="my-accordion"/> 
                    <div className="collapse-title text-xl font-medium">Services</div>
                    <div className="collapse-content"> 
                        <ul className="flex flex-col gap-2">
                            <li><a className="link link-hover text-md font-medium">Branding</a></li>
                            <li><a className="link link-hover text-md font-medium">Design</a></li>
                            <li><a className="link link-hover text-md font-medium">Marketing</a></li>
                            <li><a className="link link-hover text-md font-medium">Advertisement</a></li>
                        </ul>
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item">
                    <input type="radio" name="my-accordion"/> 
                    <div className="collapse-title text-xl font-medium">Company</div>
                    <div className="collapse-content"> 
                        <ul className="flex flex-col gap-2">
                            <li><a className="link link-hover text-md font-medium">About us</a></li>
                            <li><a className="link link-hover text-md font-medium">Contact</a></li>
                            <li><a className="link link-hover text-md font-medium">Jobs</a></li>
                            <li><a className="link link-hover text-md font-medium">Press</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="collapse collapse-arrow join-item">
                    <input type="radio" name="my-accordion"/> 
                    <div className="collapse-title text-xl font-medium">Legal</div>
                    <div className="collapse-content"> 
                        <ul className="flex flex-col gap-2">
                            <li><a className="link link-hover text-md font-medium">Terms of use</a></li>
                            <li><a className="link link-hover text-md font-medium">Privacy policy</a></li>
                            <li><a className="link link-hover text-md font-medium">Cookie policy</a></li>
                        </ul>
                    </div>
                </div>

            </div> 
        </div>
    )
}