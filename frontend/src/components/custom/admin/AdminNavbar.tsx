import { Input } from "@/components/ui/input"

const AdminNavbar = () => {
    return (
        <div className='h-[50px] pr-[25px] pl-[25px] flex flex-row justify-between items-center w-full bg-white'>
            <div className='relative'>
                <Input 
                    type="email" 
                    placeholder="Search here..." 
                    className='w-[400px] font-sans pl-[30px] bg-[#F9FAFB] placeholder-font-sans placeholder-gray-500' 
                />
                <div className='absolute left-[10px] top-[50%] transform -translate-y-[50%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' weight='18' fill="#333">
                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                </div>
            </div>
            <div className='flex flex-row space-x-[10px]'>
                <div className='w-[35px] h-[35px] cursor-pointer rounded-full bg-[#F9FAFB] flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='18' weight='18' fill="#333">
                        <path d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path>
                    </svg>
                </div>
                <div className='w-[35px] h-[35px] cursor-pointer rounded-full'>
                    <img src="/assets/images/default.png" className='w-full h-full object-cover object-center rounded-full' alt="User"/>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar