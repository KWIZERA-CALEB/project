'use client'
import Sidebar from '@/components/custom/admin/Sidebar'
import AdminNavbar from '@/components/custom/admin/AdminNavbar'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'
import MobileSidebar from '@/components/custom/admin/MobileSidebar'
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { createChallenge } from '@/redux/slices/challengesSlice';
import { useRouter } from 'next/navigation';
import { Loader2 } from "lucide-react"
import { ChallengeFormData } from '@/utils/types'
import { useCallback, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import ProtectedRoute from '@/hoc/withAuth'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const AdminCreateChallenge = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ChallengeFormData>();

    const router = useRouter()

    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.challenges);
    const { isAuthenticated, isAdmin } = useAuth();


    const handleCreateChallenge = async (data: ChallengeFormData) => {  
        const resultAction = await dispatch(createChallenge(data));
    
        if (createChallenge.fulfilled.match(resultAction)) {
            console.log("Challenge created successfully:", resultAction.payload);
            router.push('/challenges');
        } else {
            console.error('Failed to create challenge:', resultAction.payload || resultAction.error);
        }
    };
    

    const onSubmit = (data: ChallengeFormData) => {
        handleCreateChallenge(data)
    };
    return (
        <ProtectedRoute>
            <div className='w-full h-[100vh] flex flex-row'>
                <Sidebar />
                <div className='md:flex-1 w-full md:ml-[270px]'>
                    <AdminNavbar />
                    <div className='bg-[#F9FAFB] z-20 pt-[50px] pb-[70px] pr-[10px] pl-[10px] md:pr-[0px] md:pl-[0px] md:pb-[25px] w-full min-h-screen'>
                        <div className='w-full bg-white pr-[25px] pl-[25px] h-[50px] flex flex-row space-x-[15px] items-center'>
                            <div className='flex flex-row cursor-pointer items-center space-x-[6px]'>
                                <div className='border-solid border-[1px] rounded-[5px] border-[#667185] p-[4px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height='14' width='14' fill="#667185">
                                        <path d="M22.0003 12.9999L22.0004 11L8.41421 11V5.58582L2 12L8.41421 18.4142L8.41421 13L22.0003 12.9999Z"></path>
                                    </svg>
                                </div>
                                <Link href='/challenges'>
                                    <div>
                                        <p className='text-[#667185] font-sans select-none cursor-pointer text-[12px] md:text-[14px]'>Go Back</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <p className='text-[#667185] font-sans select-none cursor-pointer text-[12px] md:text-[14px]'><Link href='/challenges'>Challenges & Hackathons</Link> / <span className='text-umuravaBlueColor'>Create New Challenge</span></p>
                            </div>
                        </div>
                        {/* create form */}
                        <div className='w-full mt-[20px] flex justify-center'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='bg-white w-full md:w-[600px] rounded-[15px] p-[15px] border-solid border-[1px] border-[#E4E7EC]'>
                                    <div>
                                        <h4 className='font-sans font-bold cursor-pointer select-none text-center'>Create New Challenge</h4>
                                        <p className='text-[#667185] font-sans select-none cursor-pointer text-center text-[14px]'>Fill out these fields to build your broadcast</p>
                                    </div>
                                    <div className='mt-[15px]'>
                                        <div className='flex flex-col space-y-[2px]'>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Challenge/Hackathon Title</p>
                                            <Input {...register("challengeTitle", { required: "Challenge Title is required" })} type='text' placeholder='Enter Title' className={errors.challengeTitle ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                            </div>
                                        <div className='w-full flex flex-row items-center mt-[10px] space-x-[6px]'>
                                            <div className='flex flex-col w-[50%] space-y-[2px]'>
                                                <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Deadline</p>
                                                <Input {...register("challengeDeadline", { required: "Challenge Deadline is required" })} type='text' placeholder='Date' className={errors.challengeDeadline ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                            </div>
                                            <div className='flex flex-col w-[50%] space-y-[2px]'>
                                                <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Duration</p>
                                                <Input {...register("challengeDuration", { required: "Challenge Duration is required" })} type='text' placeholder='Duration' className={errors.challengeDuration ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-row items-center mt-[10px] space-x-[6px]'>
                                            <div className='flex flex-col w-[50%] space-y-[2px]'>
                                                <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Money Prize</p>
                                                <Input {...register("moneyPrize", { required: "Money Prize is required" })} type='text' placeholder='Prize' className={errors.moneyPrize ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                            </div>
                                            <div className='flex flex-col w-[50%] space-y-[2px]'>
                                                <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Contact Email</p>
                                                <Input {...register("contactEmail", { required: "Contact Email is required" })} type='email' placeholder='Email' className={errors.contactEmail ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mt-[10px] space-y-[2px]'>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Project Description</p>
                                            <Controller
                                                name="projectDescription"
                                                control={control}
                                                rules={{
                                                required: "Project Description is required",
                                                maxLength: {
                                                    value: 250,
                                                    message: "Project Description cannot exceed 250 characters",
                                                },
                                                }}
                                                render={({ field }) => (
                                                <Textarea
                                                    {...field}
                                                    placeholder="Enter text here..."
                                                    className={
                                                    errors.projectDescription
                                                        ? "border-solid border-[1px] border-red-500 shadow-none h-[120px]"
                                                        : "shadow-none h-[120px]"
                                                    }
                                                />
                                                )}
                                            />
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Keep this simple of 250 character</p>
                                        </div>
                                        <div className='flex flex-col mt-[10px] space-y-[2px]'>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Project Brief</p>
                                            <Controller
                                                name="projectBrief"
                                                control={control}
                                                rules={{
                                                required: "Project Brief is required",
                                                maxLength: {
                                                    value: 250,
                                                    message: "Project Brief cannot exceed 250 characters",
                                                },
                                                }}
                                                render={({ field }) => (
                                                <Textarea
                                                    {...field}
                                                    placeholder="Enter text here..."
                                                    className={
                                                    errors.projectBrief
                                                        ? "border-solid border-[1px] border-red-500 shadow-none h-[120px]"
                                                        : "shadow-none h-[120px]"
                                                    }
                                                />
                                                )}
                                            />
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Keep this simple of 250 character</p>
                                        </div>
                                        <div className='flex flex-col mt-[10px] space-y-[2px]'>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Project Description & Tasks</p>
                                            <Controller
                                                name="projectDescriptionTasks"
                                                control={control}
                                                rules={{
                                                required: "Project Description Tasks is required",
                                                maxLength: {
                                                    value: 250,
                                                    message: "Project Description Tasks cannot exceed 250 characters",
                                                },
                                                }}
                                                render={({ field }) => (
                                                <Textarea
                                                    {...field}
                                                    placeholder="Enter text here..."
                                                    className={
                                                    errors.projectDescriptionTasks
                                                        ? "border-solid border-[1px] border-red-500 shadow-none h-[120px]"
                                                        : "shadow-none h-[120px]"
                                                    }
                                                />
                                                )}
                                            />
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Keep this simple of 250 character</p>
                                        </div>
                                        <div className='mt-[10px]'>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Seniority Levels</p>
                                            <Input {...register("levels", { required: "Level is required" })} type='text' placeholder='senior,junior,intermediate' className={errors.levels ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500 w-full' : 'shadow-none w-full pt-[20px] pb-[20px]'} />
                                        </div>
                                        <div className='mt-[10px]'>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Status</p>
                                            <Controller
                                                name="status"
                                                control={control}
                                                rules={{ required: "Challenge status is required" }}
                                                render={({ field }) => (
                                                    <Select value={field.value} onValueChange={field.onChange}>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Choose challenge status" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectLabel>Status</SelectLabel>
                                                                <SelectItem value="open">Open</SelectItem>
                                                                <SelectItem value="ongoing">Ongoing</SelectItem>
                                                                <SelectItem value="closed">Closed | Completed</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </div>
                                        <div className='mt-[10px]'>
                                            <div>
                                                <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Skills Required</p>
                                                <Input {...register("skills", { required: "Skills is required" })} type='text' placeholder='Frontend,Crtical Thinking' className={errors.skills ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500 w-full' : ' w-full shadow-none pt-[20px] pb-[20px]'} />
                                            </div>
                                        </div>
                                        <div className='mt-[10px]'>
                                            <div>
                                                <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Challenge category</p>
                                                <Input {...register("category", { required: "Category is required" })} type='text' placeholder='Web development' className={errors.category ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500 w-full' : ' w-full shadow-none pt-[20px] pb-[20px]'} />
                                            </div>
                                        </div>
                                        <div className='flex w-full flex-row space-x-[6px] mt-[10px] justify-between items-center'>
                                            <Button className='bg-white w-[50%] text-umuravaBlueColor border-solid border-[2px] border-umuravaBlueColor hover:bg-white/[90%] font-sans'>
                                                <Link href='/challenges'>
                                                Cancel
                                                </Link>
                                            </Button>
                                            <Button
                                                type="submit"
                                                className={`w-[50%] font-sans ${loading ? 'cursor-not-allowed bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]' : 'bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'} `}
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <>
                                                        <Loader2 className="animate-spin" />
                                                        <p>Please wait</p>
                                                    </>
                                                ) : (
                                                    'Create Challenge'
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* create form */}
                    </div>
                </div>
            </div>
            <MobileSidebar />
        </ProtectedRoute>
    )
}

export default AdminCreateChallenge