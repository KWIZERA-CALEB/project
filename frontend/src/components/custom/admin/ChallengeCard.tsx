import { Button } from "@/components/ui/button"
import React from 'react'
import Link from 'next/link'


interface ChallengeCardProps {
    challengeTitle: string;
    challengeLink: string;
}


const ChallengeCard: React.FC<ChallengeCardProps> = ({ challengeTitle, challengeLink }) => {
    return (
        <div className='bg-white rounded-[15px] border-solid border-[1px] border-[#E4E7EC]'>
            <div className='pb-[20px] pr-[17px] pl-[17px] pt-[20px]'>
                <div className='w-full h-[180px] relative bg-umuravaBlueColor flex justify-center items-center rounded-[15px]'>
                    <img src='/assets/images/logo.png' className='w-[60px]' alt='Challenge Image' />
                    <div className='pt-[4px] pb-[4px] pr-[22px] pl-[22px] rounded-full right-[6px] top-[6px] absolute bg-[#0F973D] text-white'>
                        <p className='font-bold text-[14px]'>Open</p>
                    </div>
                </div>
                <div className='mt-[25px]'>
                    <h4 className='font-bold text-[#101928] font-[600] cursor-pointer select-none'>{challengeTitle}</h4>
                    <div className='mt-[17px]'>
                        <p className='text-[#101928] font-bold text-[12px]'>Skills Needed:</p>
                        <div className='flex flex-row space-x-[2px] flex-wrap mt-[5px]'>
                            <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>UI/UX Design</p>
                            </div>
                            <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>User Research</p>
                            </div>
                            <div className='border-solid cursor-pointer border-umuravaBlueColor rounded-[12px] border-[1px] pr-[12px] pl-[12px] pb-[4px] pt-[4px]'>
                                <p className='font-sans font-bold text-umuravaBlueColor text-[12px]'>Frontend</p>
                            </div>
                        </div>
                        <div className='mt-[6px]'>
                            <p className='text-[#101928] font-bold text-[12px]'>Seniority Level: <span className='text-[#777] font-regular'>(Junior, Intermediate, Senior)</span></p>
                            <p className='text-[#101928] font-bold text-[12px]'>Timeline: <span className='text-[#777] font-regular'>15 Days</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full border-t border-solid border-[#E4E7EC]'></div>
            <div className='pb-[12px] pr-[17px] pl-[17px] pt-[12px]'>
                <Link href={challengeLink}>
                    <Button className='bg-umuravaBlueColor hover:bg-umuravaBlueColor/[90%]'>View Challenge</Button>
                </Link>
            </div>
        </div>
    )
}

export default ChallengeCard