import Link from 'next/link'
import { Button } from "@/components/ui/button"

const NotFoundPage = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className='flex flex-col justify-center space-y-[6px]'>
                <div>
                    <h4 className='font-bold cursor-pointer select-none text-center'>404 Notfound</h4>
                    <p className='text-[#667185] select-none text-center cursor-pointer text-[14px]'>This page can&apos;t be found it seems you are lost.</p>
                </div>
                <Link href='/'>
                    <div className='flex justify-center'>
                        <Button className='bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>
                            Go back
                        </Button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage