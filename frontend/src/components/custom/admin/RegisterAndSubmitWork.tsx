'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { RegisterForChallengeFormData, TeamMember } from "@/utils/types"
import React, { useState, useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import axios from 'axios'
import { useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/navigation'
import { RootState } from '@/redux/slices/index';


interface ChallengeForSubmittingWorkProps {
    challengeId: string | undefined;
    challengeStatus: string | undefined;
}

const RegisterAndSubmitWork: React.FC<ChallengeForSubmittingWorkProps> = ({ challengeId, challengeStatus }) => {
    const [isRegistered, setIsRegistered] = useState(false);
    const maxNumberOFMembersPerTeam = 3
    const minNumberOFMembersPerTeam = 3
    const router = useRouter()

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm<RegisterForChallengeFormData>()
    const [registeredTeamMembers, setRegisteredTeamMembers] = useState<TeamMember[]>([])
    const { user } = useAppSelector((state) => state.user);


    
    const { data = [] } = useAppSelector((state: RootState) => ({
        data: state.participants.data || []
    }));
    
    const loggedInUserEmail = user?.email;

    useEffect(() => {
        if (!challengeId || !loggedInUserEmail) return;

        const isUserRegistered = data.some(participant => 
            participant.challengeId.toString() === challengeId &&
            (participant.teamLeader.email === loggedInUserEmail || 
             participant.otherTeamMembers.some(member => member.email === loggedInUserEmail))
        );

        setIsRegistered(isUserRegistered);
    }, [challengeId, loggedInUserEmail, data]);


    const handleAddMemberToTeam = (data: RegisterForChallengeFormData) => {
        setRegisteredTeamMembers((prevMembers) => [
            ...prevMembers,
            {
                otherMemberFullName: data.otherMemberFullName,
                otherMemberEmail: data.otherMemberEmail,
                otherMemberPhoneNumber: data.otherMemberPhoneNumber,
            },
        ]);
    

        setValue("otherMemberFullName", "");
        setValue("otherMemberEmail", "");
        setValue("otherMemberPhoneNumber", null);
    };

    const onSubmit = async (data: RegisterForChallengeFormData) => {
        const payload = {
            challengeId: challengeId,
            teamLeader: {
                fullName: data.teamLeaderFullName,
                email: loggedInUserEmail,
                phoneNumber: data.teamLeaderPhoneNumber,
            },
            otherTeamMembers: registeredTeamMembers.map((member) => ({
                fullName: member.otherMemberFullName,
                email: member.otherMemberEmail,
                phoneNumber: member.otherMemberPhoneNumber,
            })),
        };

        try {
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
            const response = await axios.post(`${apiBaseUrl}/register-for-challenge`, payload);
            alert('Registered successfully!');
            router.push('/challenges')
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while registering.');
        }

        console.log(payload)
    };

    const handleRemoveMember = (index: number) => {
        setRegisteredTeamMembers((prevMembers) =>
            prevMembers.filter((_, i) => i !== index)
        );
    };

    const handleSubmittingWork = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement;

        const liveProjectLink = (form.elements.namedItem('liveProjectLink') as HTMLInputElement).value;
        const resourcesLink = (form.elements.namedItem('resourcesLink') as HTMLInputElement).value;

        if (!liveProjectLink && !resourcesLink) {
            alert("Please fill out at least one of the fields.");
            return;
        }

        const payload = {
            challengeId: challengeId,
            resourcesLink,
            liveProjectLink,
            teamLeaderEmail: user?.email,
        };

        console.log(payload)
    
        try {
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
            const response = await axios.post(`${apiBaseUrl}/submit-work`, payload);
            alert('Work submitted successfully!');
            router.push('/challenges')
            console.log('Submitted work:', response.data);
        } catch (error) {
            console.error('Error submitting work:', error);
            alert('An error occurred while submitting work.');
        }
    }

    return (
        <>
            <div className='mt-[10px]'>
                {isRegistered  ? 
                    <Dialog>
                        <DialogTrigger className='w-full'>
                            {challengeStatus === 'closed' ? 
                                <Button disabled className='bg-red-500 cursor-not-allowed w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                    Submission Deadline reached
                                </Button>
                            :
                                <Button className='bg-umuravaBlueColor w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                    Submit your work
                                </Button>
                            }
                        </DialogTrigger>
                        <DialogContent className='bg-white w-full md:w-[600px] overflow-y-scroll'>
                            <div className='w-full h-full'>
                                <div className='p-[6px] border-b border-solid border-[#E4E7EC]'>
                                    <p className='text-[#667185] font-sans select-none cursor-pointer text-start text-[14px]'>Fill the form to submit your done work</p>
                                </div>
                                <div className='p-[6px] mt-[15px]'>
                                    <form onSubmit={handleSubmittingWork}>
                                        <div>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Your Work:</p>
                                            <div className='flex flex-col space-y-[3px]'>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Link to live project</p>
                                                    <Input name='liveProjectLink' type='text' placeholder='https://umurava.vercel.app' className='shadow-none pt-[20px] pb-[20px]' />
                                                </div>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Link to resources</p>
                                                    <Input name='resourcesLink' type='text' placeholder='https://github.com/edtech_project' className='shadow-none pt-[20px] pb-[20px]' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='p-[6px] border-b border-solid border-[#E4E7EC]'>
                                            <p className='text-[#ff0000] font-sans select-none cursor-pointer text-start text-[14px]'>Fill atleast one field</p>
                                        </div>
                                        <Button type="submit" className='bg-umuravaBlueColor mt-[10px] w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                            Complete Submission
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                :   
                    <Dialog>
                        <DialogTrigger className='w-full'>
                            {challengeStatus === 'closed' || challengeStatus === 'ongoing' ? 
                                <Button disabled className='bg-red-500 cursor-not-allowed w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                    Registration Closed
                                </Button>
                            :
                                <Button className='bg-umuravaBlueColor w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                    Register for Challenge
                                </Button>
                            }
                        </DialogTrigger>
                        <DialogContent className='bg-white h-[600px] w-full md:w-[600px] overflow-y-scroll'>
                            <div className='w-full h-full'>
                                <div className='p-[6px] border-b border-solid border-[#E4E7EC]'>
                                    <p className='text-[#667185] font-sans select-none cursor-pointer text-start text-[14px]'>Fill the form to register for challenge.(3 Members Minimum)</p>
                                </div>
                                <div className='p-[6px] mt-[15px]'>
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
                                                    <Input {...register("teamLeaderEmail")} value={loggedInUserEmail} disabled type='text' placeholder='Email' className={errors.teamLeaderEmail ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                                </div>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Phone Number</p>
                                                    <Input {...register("teamLeaderPhoneNumber", { required: "Phone Number is required" })} type='text' placeholder='Phone Number' className={errors.teamLeaderPhoneNumber ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                                </div>
                                            </div>
                                        </div>
                                        {registeredTeamMembers.length == 0 && 
                                        <div className='mt-[10px]'>
                                            <p className='text-[#ff0000] font-sans select-none cursor-pointer text-start text-[14px]'>No Team Member added(3 Members Minimum)</p>
                                        </div>
                                        }

                                        <div className='grid grid-cols-1 md:grid-cols-2 mt-[10px] mb-[10px] gap-[2px] md:gap-[4px] w-full'>
                                            {registeredTeamMembers.map((member, index) => (
                                                <div key={index} className='p-[10px] rounded-[4px] relative border-[1px] border-solid border-[#E4E7EC]'>
                                                    <div className='flex flex-row space-x-[10px] cursor-pointer items-center'>
                                                        <div className='w-[40px] h-[40px] bg-umuravaBlueColor rounded-full border-solid border-white border-[2px]'>&nbsp;</div>
                                                        <div className='flex flex-col'>
                                                            <p className='font-sans font-md text-[14px]'>{member.otherMemberFullName}</p>
                                                            <p className='font-sans text-[14px]'>{member.otherMemberEmail}</p>
                                                            <p className='font-sans text-[14px]'>{member.otherMemberPhoneNumber}</p>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => handleRemoveMember(index)} className='absolute top-[6px] right-[6px] text-red-500 cursor-pointer'>X</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div>
                                            <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Other Team Member Info:</p>
                                            <div className='flex flex-col space-y-[3px]'>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Full Name</p>
                                                    <Input 
                                                        {...register("otherMemberFullName", {
                                                            required: registeredTeamMembers.length < maxNumberOFMembersPerTeam ? "Full Name is required" : false,
                                                        })}
                                                        type='text' placeholder='Full Name' className={errors.otherMemberFullName ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                                </div>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Email</p>
                                                    <Input 
                                                        {...register("otherMemberEmail", {
                                                            required: registeredTeamMembers.length < maxNumberOFMembersPerTeam ? "Email is required" : false,
                                                        })}
                                                        type='text' placeholder='Email' className={errors.otherMemberEmail ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                                </div>
                                                <div>
                                                    <p className='text-[#777] font-sans select-none cursor-pointer text-[14px]'>Phone Number</p>
                                                    <Input 
                                                        {...register("otherMemberPhoneNumber", {
                                                            required: registeredTeamMembers.length < maxNumberOFMembersPerTeam ? "Phone Number is required" : false,
                                                        })}
                                                        type='text' placeholder='Phone Number' className={errors.otherMemberPhoneNumber ? 'shadow-none pt-[20px] pb-[20px] border-solid border-[1px] border-red-500' : 'shadow-none pt-[20px] pb-[20px]'} />
                                                </div>
                                            </div>
                                            {registeredTeamMembers.length == maxNumberOFMembersPerTeam ? 
                                                <Button disabled className='bg-umuravaBlueColor mt-[10px] w-full flex flex-row items-center space-x-[5px] text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                                                            <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
                                                        </svg>
                                                    </div>
                                                    Maximum number reached
                                                </Button>
                                            : 
                                                <Button onClick={handleSubmit(handleAddMemberToTeam)} className='bg-umuravaBlueColor mt-[10px] w-full flex flex-row items-center space-x-[5px] text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='18' height='18' fill='#fff'>
                                                            <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
                                                        </svg>
                                                    </div>
                                                    Add member
                                                </Button>
                                            }
                                        </div>
                                        
                                        <Button
                                            disabled={
                                                registeredTeamMembers.length < minNumberOFMembersPerTeam ||
                                                registeredTeamMembers.length > maxNumberOFMembersPerTeam
                                            }
                                        className='bg-umuravaBlueColor mt-[10px] w-full text-white hover:bg-umuravaBlueColor/[90%] font-sans'>
                                            Finish Registration
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </DialogContent>   
                    </Dialog>
                }
            </div>
        </>
    )
}

export default RegisterAndSubmitWork