import { Facebook, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../../ui/button"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#001A40] w-full pr-[50px] pl-[50px] pt-[30px] pb-[30px]">
        <div className='border-b border-solid w-full border-[#fff]/[22%] pb-[30px] flex flex-row justify-between items-center'>
            <div>
              <img src='/assets/images/footer_logo.png' className='w-[60px] cursor-pointer select-none' alt='Umurava Footer Logo' />
            </div>
            <div className='flex flex-row items-center space-x-[4px]'>
                <div className='flex justify-center items-center p-[6px] w-[40px] h-[40px] rounded-full cursor-pointer bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#001A40'>
                        <path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"></path>
                    </svg>
                </div>
                <div className='flex justify-center items-center p-[6px] w-[40px] h-[40px] rounded-full cursor-pointer bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#001A40'>
                        <path d="M12 11H20.5329C20.5769 11.3847 20.6 11.7792 20.6 12.1837C20.6 14.9184 19.6204 17.2204 17.9224 18.7837C16.4367 20.1551 14.404 20.9592 11.9796 20.9592C8.46933 20.9592 5.43266 18.947 3.9551 16.0123C3.34695 14.8 3 13.4286 3 11.9796C3 10.5306 3.34695 9.1592 3.9551 7.94698C5.43266 5.01226 8.46933 3 11.9796 3C14.4 3 16.4326 3.88983 17.9877 5.33878L16.5255 6.80101C15.3682 5.68153 13.8028 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.5265 19 18.1443 16.3923 18.577 13H12V11Z"></path>
                    </svg>
                </div>
                <div className='flex justify-center items-center p-[6px] w-[40px] h-[40px] rounded-full cursor-pointer bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#001A40'>
                        <path d="M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001 10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568 10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098 6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255 3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098 5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z"></path>
                    </svg>
                </div>
                <div className='flex justify-center items-center p-[6px] w-[40px] h-[40px] rounded-full cursor-pointer bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#001A40'>
                        <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div className='border-b border-solid w-full border-[#fff]/[22%] pt-[20px] pb-[30px] flex flex-col md:flex-row space-y-[20px] md:space-y-[0px] md:justify-between'>
            <div>
                <h3 className='text-[15px] font-black cursor-pointer select-none text-white'>Our Address</h3>

                <div className='mt-[10px] flex flex-col space-y-[15px]'>
                    <div className='flex flex-row items-center cursor-pointer space-x-[5px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                        </svg>
                        <p className='text-white/[80%] text-[12px]'>career@tickets.com</p>
                    </div>
                    <div className='flex flex-row items-center cursor-pointer space-x-[5px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                            <path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                        </svg>
                        <p className='text-white/[80%] text-[12px]'>89 KG 14 Ave, Kigali</p>
                    </div>
                    <div className='flex flex-row items-center cursor-pointer space-x-[5px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                            <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                        </svg>
                        <p className='text-white/[80%] text-[12px]'>+250 700 000</p>
                    </div>
                </div>

            </div>

            {/* quick links */}
            <div>
                <h3 className='text-[15px] font-black cursor-pointer select-none text-white'>Ouick Links</h3>
                <div className='mt-[10px] flex flex-col space-y-[15px]'>
                    <div>
                        <p className='text-white/[80%] text-[12px]'><Link href='/'>Home</Link></p>
                    </div>
                    <div>
                        <p className='text-white/[80%] text-[12px]'><Link href='/program'>Program</Link></p>
                    </div>
                    <div>
                        <p className='text-white/[80%] text-[12px]'><Link href='/about'>About</Link></p>
                    </div>
                    <div>
                        <p className='text-white/[80%] text-[12px]'><Link href='/contact'>Contact Us</Link></p>
                    </div>
                </div>
            </div>
            {/* quick links */}

            {/* contact */}
            <div>
                <h3 className='text-[15px] font-black cursor-pointer text-start select-none text-white'>Join our newsletter to keep up to date with us!</h3>
                <div className="relative mt-[10px]">
                    <input 
                        type="text" 
                        placeholder="Email" 
                        className="w-full pr-[100px] pl-4 py-[12px] bg-white text-[14px] placeholder:text-[14px] placeholder:text-[#777]/[60%] rounded-[8px] border-0 focus:outline-none shadow-md"
                    />
                    <Button 
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-umuravaBlueColor text-white px-4 py-2 rounded-[12px] hover:bg-umuravaBlueColor/[90%] shadow"
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
            {/* contact */}
        </div>

        {/* copyright */}
        <div className='w-full flex flex-col space-y-[5px] md:space-y-[0px] md:flex-row mt-[30px] md:justify-between items-center'>
            <div>
                <p className='text-white/[80%] text-[12px]'>Copyright &copy; All Rights Reserved SawaPay {new Date().getFullYear()}.</p>
            </div>
            <div>
                <p className='text-white/[80%] text-[12px]'><Link href='/privacy_policy'>Privacy Policy</Link> | <Link href='/terms-conditions'>Terms and Conditions</Link></p>
            </div>
        </div>
        {/* copyright */}
    </footer>
  );
};

export default Footer;
