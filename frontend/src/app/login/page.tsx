'use client'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { LoginFormData } from '@/utils/types'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginUser } from '@/redux/slices/userSlice'
import { useRouter } from 'next/navigation'



const Login = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginFormData>();
    const dispatch = useAppDispatch()
    const { loading, error } = useAppSelector((state) => state.user);
    const router = useRouter()

    const handleLogin = async (data: LoginFormData) => {
        const resultAction = await dispatch(loginUser(data));
    
        if (loginUser.fulfilled.match(resultAction)) {
            console.log("Logged in successfully:", resultAction.payload);
            router.push('/dashboard');
        } else {
            console.error('Failed to create challenge:', resultAction.payload || resultAction.error);
        }
    }

    const onSubmit = (data: LoginFormData) => {
        handleLogin(data)
    }
    return (
        <div className='w-full bg-[#F9FAFB] h-[100vh] flex justify-center items-center'>

            <div className='w-[450px] p-[15px] rounded-[12px] bg-white'>
                <div>
                    <h4 className='font-sans font-bold cursor-pointer select-none text-center'>Testing Login Page</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col w-full space-y-[10px]'>

                        <div>
                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Email Address</p>
                            <Input {...register("email", { required: "Email is required" })} type='text' placeholder='Email Address' className={errors.email ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                        </div>
                        <div>
                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Password</p>
                            <Input {...register("password", { required: "Password is required" })} type='password' placeholder='Password' className={errors.password ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                        </div>
                        <Button
                            type="submit"
                            className={`w-full font-sans ${loading ? 'cursor-not-allowed bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]' : 'bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'} `}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" />
                                    <p>Please wait</p>
                                </>
                            ) : (
                                'Login'
                            )}
                        </Button>
                    </div>
                </form>

                <div className='rounded-[10px] mt-[15px] border-solid border-[1px] border-red-500 p-[6px] bg-red-500/[40%]'>
                    <p className='text-red-500 font-sans select-none text-center cursor-pointer text-[14px]'>Notice ⛔</p>
                    <p className='text-red-500 font-sans select-none cursor-pointer text-[14px]'>-This is a sample login page for testing the authentication between multiple users since it will be integrated in the already running site.</p>
                    <p className='text-red-500 font-sans select-none cursor-pointer text-[14px]'>-Admin acount: kwizeracaleb91@gmail.com | Talent account: spongebob@gmail.com. | Passwords: pass12345</p>
                    <p className='text-red-500 font-sans select-none cursor-pointer text-[14px]'>-Based on understanding the product design, we have also added more fields on create page cause there are some missing in the challenge card.</p>
                    <p className='text-red-500 font-sans select-none cursor-pointer text-[14px]'>-Hosted app: (Frontend: https://umurava-app.vercel.app/) | (Backend: https://umurava-edtech.onrender.com/api-docs)</p>
                </div>
            </div>

        </div>
    )
}

export default Login