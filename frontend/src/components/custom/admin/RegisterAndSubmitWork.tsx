import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { RegisterForChallengeFormData } from "@/utils/types"
import { useState } from 'react'


const RegisterAndSubmitWork = () => {
    const isRegistered = true
    const maxNumberOFMembersPerTeam = 1
    const minNumberOFMembersPerTeam = 1

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm<RegisterForChallengeFormData>()
    const [registeredTeamMembers, setRegisteredTeamMembers] = useState([])

    const handleAddMemberToTeam = (data: RegisterForChallengeFormData) => {
        console.log(data)
    };

    const onSubmit = (data: RegisterForChallengeFormData) => {
        console.log(data)
    };


    return (
        <>
            <div className='mt-[10px]'>
                {isRegistered ? 
                    <Popover>
                        <PopoverTrigger>
                            <Button className='bg-umuravaBlueColor w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                Submit Your Work
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            Submit work form
                        </PopoverContent>
                    </Popover>
                :   
                    <Popover>
                        <PopoverTrigger>
                            <Button className='bg-umuravaBlueColor w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                Register for Challenge
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className='bg-white'>
                            <div className='w-full h-full'>
                                <div className='p-[6px] border-b border-solid border-[#E4E7EC]'>
                                    <p className='text-[#667185] font-sans select-none cursor-pointer text-start text-[14px]'>Fill the form to register for challenge.(3 Members Minimum)</p>
                                </div>
                                <div className='p-[6px]'>
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Team Leader Info:</p>
                                            <div className='flex flex-col space-y-[3px]'>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Full Name</p>
                                                    <Input {...register("teamLeaderFullName", { required: "Full Name is required" })} type='text' placeholder='Full Name' className={errors.teamLeaderFullName ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                                </div>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Email</p>
                                                    <Input {...register("teamLeaderEmail", { required: "Email is required" })} type='text' placeholder='Email' className={errors.teamLeaderEmail ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                                </div>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Phone Number</p>
                                                    <Input {...register("teamLeaderPhoneNumber", { required: "Phone Number is required" })} type='text' placeholder='Phone Number' className={errors.teamLeaderPhoneNumber ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-row space-x-[4px] items-center flex-wrap'>

                                            <div className='p-[6px] rounded-[4px] border-[1px] border-solid border-[#E4E7EC]'>
                                                <div className='flex pr-[24px] border-solid border-b-[1px] pt-[15px] pl-[24px] pt-[15px] pb-[15px] flex-row space-x-[10px] cursor-pointer items-center'>
                                                    <div className='w-[40px] h-[40px] bg-umuravaBlueColor rounded-full border-solid border-white border-[2px]'></div>
                                                    <div className='flex flex-col'>
                                                        <p className='font-sans font-md text-[14px]'>Kwizera Caleb</p>
                                                        <p className='font-sans text-[14px]'>kwizeracaleb91@gmail.com</p>
                                                        <p className='font-sans text-[14px]'>0798205731</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='p-[6px] rounded-[4px] border-[1px] border-solid border-[#E4E7EC]'>
                                                <div className='flex pr-[24px] border-solid border-b-[1px] pt-[15px] pl-[24px] pt-[15px] pb-[15px] flex-row space-x-[10px] cursor-pointer items-center'>
                                                    <div className='w-[40px] h-[40px] bg-umuravaBlueColor rounded-full border-solid border-white border-[2px]'></div>
                                                    <div className='flex flex-col'>
                                                        <p className='font-sans font-md text-[14px]'>Kwizera Caleb</p>
                                                        <p className='font-sans text-[14px]'>kwizeracaleb91@gmail.com</p>
                                                        <p className='font-sans text-[14px]'>0798205731</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Other Info:</p>
                                            <div className='flex flex-col space-y-[3px]'>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Full Name</p>
                                                    <Input {...register("otherMemberFullName", { required: "Full Name is required" })} type='text' placeholder='Full Name' className={errors.otherMemberFullName ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                                </div>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Email</p>
                                                    <Input {...register("otherMemberEmail", { required: "Email is required" })} type='text' placeholder='Email' className={errors.otherMemberEmail ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                                </div>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Phone Number</p>
                                                    <Input {...register("otherMemberPhoneNumber", { required: "Phone Number is required" })} type='text' placeholder='Phone Number' className={errors.otherMemberPhoneNumber ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                                </div>
                                            </div>
                                            {registeredTeamMembers.length == maxNumberOFMembersPerTeam ? 
                                                <Button disabled className='bg-umuravaBlueColor w-full flex flex-row items-center space-x-[5px] text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                                                            <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
                                                        </svg>
                                                    </div>
                                                    Maximum number reached
                                                </Button>
                                            : 
                                                <Button onClick={handleSubmit(handleAddMemberToTeam)} className='bg-umuravaBlueColor w-full flex flex-row items-center space-x-[5px] text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                                                            <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
                                                        </svg>
                                                    </div>
                                                    Add member
                                                </Button>
                                            }
                                        </div>
                                        
                                        <Button className='bg-umuravaBlueColor w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                            Finish Registration
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </PopoverContent>   
                    </Popover>
                }
            </div>
        </>
    )
}

export default RegisterAndSubmitWork