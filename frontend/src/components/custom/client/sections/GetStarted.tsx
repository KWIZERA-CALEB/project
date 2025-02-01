// import { Button } from "../../../ui/button";

// interface StepCardProps {
//   step: string;
//   title: string;
//   description: string;
//   image?: string;
//   tall?: boolean;
// }

// const StepCard: React.FC<StepCardProps> = ({ step, title, description, image, tall }) => {
//   return (
//     <div className={`bg-white relative overflow-hidden w-full ${tall ? "h-[350px]" : "h-[220px]"} rounded-xl p-6 shadow-md`}>
//       <Button className="px-4 py-2 font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]">
//         {step}
//       </Button>
//       <div className="mt-4">
//         <h4 className="font-bold text-lg cursor-pointer">{title}</h4>
//         <p className="text-[#667185] text-start text-sm leading-relaxed">{description}</p>
//       </div>
//       {image && (
//         <div className="absolute bottom-4 right-4 max-w-[140px] md:max-w-[180px]">
//           <img src={image} className="object-contain w-full h-auto" alt={title} loading="lazy" />
//         </div>
//       )}
//     </div>
//   );
// };

// const GetStarted: React.FC = () => {
//   return (
//     <section className="bg-[#F9FAFB] w-full px-5 md:px-12 py-16">
//       <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>

//       {/* Mobile View (Stacked) */}
//       <div className="flex flex-col md:hidden gap-6">
//         <StepCard step="Step 1" title="Sign up on Umurava Platform" description="Submit your completed project for evaluation" image="/assets/images/signup-screen.png" />
//         <StepCard step="Step 2" title="Complete Your Profile" description="Ensure your profile details are up-to-date" image="/assets/images/profile-screen.png" />
//         <StepCard step="Step 3" title="Explore Opportunities" description="Browse job postings and projects that match your skills" image="/assets/images/explore-screen.png" />
//       </div>

//       {/* Desktop View (Grid) */}
//       <div className="hidden md:grid grid-cols-3 gap-6">
//         <StepCard step="Step 1" title="Sign up on Umurava Platform" description="Submit your completed project for evaluation" image="/assets/images/signup-screen.png" />
//         <StepCard step="Step 2" title="Complete Your Profile" description="Ensure your profile details are up-to-date" image="/assets/images/profile-screen.png" />
//         <StepCard step="Step 3" title="Explore Opportunities" description="Browse job postings and projects that match your skills" image="/assets/images/explore-screen.png" />
//       </div>
//     </section>
//   );
// };

// export default GetStarted;


import { Button } from "../../../ui/button"


const GetStarted = () => {
  return (
    <section className="bg-[#F9FAFB] w-full pr-[20px] pl-[20px] md:pr-[50px] md:pl-[50px] py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>

        <div className='flex flex-col lg:hidden space-y-[15px]'>
            <div className='bg-white relative overflow-hidden w-full h-[364px] rounded-[12px] pt-[40px] pb-[40px] pr-[25px] pl-[25px]'>
              <div>
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 1</Button>
                <div className='mt-[15px]'>
                  <div className='flex flex-col space-y-[6px]'>
                    <h4 className='font-bold cursor-pointer select-none'>Sign up on Umurava Platform</h4>
                    <p className='text-[#667185] text-start select-none cursor-pointer text-[14px]'>Submit your completed project for evaluation</p>
                  </div>
                </div>
              </div>
              <div className='absolute bottom-0 right-0'>
                <img src='/assets/images/signup-screen.png' className='w-[200px]' alt='Signup screen' />
              </div>
            </div>

            <div className='bg-white relative overflow-hidden w-full h-[364px] rounded-[12px] pt-[40px] pb-[40px] pr-[25px] pl-[25px]'>
              <div>
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 2</Button>
                <div className='mt-[15px]'>
                  <div className='flex flex-col space-y-[6px]'>
                    <h4 className='font-bold cursor-pointer select-none'>Browse Open Challenges</h4>
                    <p className='text-[#667185] text-start select-none cursor-pointer text-[14px]'>Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals</p>
                  </div>
                </div>
              </div>
              <div className='absolute bottom-0 right-0'>
                <img src='/assets/images/challenges-screen.png' className='w-[200px]' alt='Challenges screen' />
              </div>
            </div>

            <div className='bg-white overflow-hidden w-full h-[235px] rounded-[12px] pt-[40px] pb-[40px] pr-[25px] pl-[25px]'>
              <div>
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 3</Button>
                <div className='mt-[15px]'>
                  <div className='flex flex-col space-y-[6px]'>
                    <h4 className='font-bold cursor-pointer select-none'>Register and Participate</h4>
                    <p className='text-[#667185] text-start select-none cursor-pointer text-[14px]'>Sign up for the challenge and start working on the project.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white overflow-hidden w-full h-[235px] rounded-[12px] pt-[40px] pb-[40px] pr-[25px] pl-[25px]'>
              <div>
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 4</Button>
                <div className='mt-[15px]'>
                  <div className='flex flex-col space-y-[6px]'>
                    <h4 className='font-bold cursor-pointer select-none'>Submit your work</h4>
                    <p className='text-[#667185] text-start select-none cursor-pointer text-[14px]'>Submit your completed project for evaluation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white overflow-hidden w-full h-[235px] rounded-[12px] pt-[40px] pb-[40px] pr-[25px] pl-[25px]'>
              <div>
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 5</Button>
                <div className='mt-[15px]'>
                  <div className='flex flex-col space-y-[6px]'>
                    <h4 className='font-bold cursor-pointer select-none'>Receive Feedback and Recognition</h4>
                    <p className='text-[#667185] text-start select-none cursor-pointer text-[14px]'>Get feedback on your work and celebrate your achievements</p>
                  </div>
                </div>
              </div>
            </div>

        </div>

        {/* guideline */}
        <div className='md:w-full hidden lg:flex space-x-[10px] lg:space-x-[23px] justify-center'>

          <div className='flex flex-col space-y-[10px] lg:space-y-[23px]'>

            <div className='bg-white relative overflow-hidden w-[470px] h-[364px] rounded-[12px] pt-[40px] pb-[40px] pr-[25px] pl-[25px]'>
              <div>
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 1</Button>
                <div className='mt-[15px]'>
                  <div className='flex flex-col space-y-[6px]'>
                    <h4 className='font-bold cursor-pointer select-none'>Sign up on Umurava Platform</h4>
                    <p className='text-[#667185] text-start select-none cursor-pointer text-[14px]'>Submit your completed project for evaluation</p>
                  </div>
                </div>
              </div>
              <div className='absolute bottom-0 right-0'>
                <img src='/assets/images/signup-screen.png' className='w-[200px]' alt='Signup screen' />
              </div>
            </div>
            <div className='bg-white relative overflow-hidden w-[470px] h-[364px] rounded-[12px] pt-[40px] pb-[40px] pr-[25px] pl-[25px]'>
              <div>
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 2</Button>
                <div className='mt-[15px]'>
                  <div className='flex flex-col space-y-[6px]'>
                    <h4 className='font-bold cursor-pointer select-none'>Browse Open Challenges</h4>
                    <p className='text-[#667185] text-start select-none cursor-pointer text-[14px]'>Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals</p>
                  </div>
                </div>
              </div>
              <div className='absolute bottom-0 right-0'>
                <img src='/assets/images/challenges-screen.png' className='w-[200px]' alt='Challenges screen' />
              </div>
            </div>

          </div>

          <div className='flex flex-col space-y-[10px] lg:space-y-[23px]'>
            {/* card */}
            <div className='bg-white overflow-hidden w-[470px] h-[235px] rounded-[12px] pt-[40px] pb-[40px] pr-[25px] pl-[25px]'>
              <div>
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 3</Button>
                <div className='mt-[15px]'>
                  <div className='flex flex-col space-y-[6px]'>
                    <h4 className='font-bold cursor-pointer select-none'>Register and Participate</h4>
                    <p className='text-[#667185] text-start select-none cursor-pointer text-[14px]'>Sign up for the challenge and start working on the project.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className='bg-white overflow-hidden w-[470px] h-[235px] rounded-[12px] pt-[40px] pb-[40px] pr-[25px] pl-[25px]'>
              <div>
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 4</Button>
                <div className='mt-[15px]'>
                  <div className='flex flex-col space-y-[6px]'>
                    <h4 className='font-bold cursor-pointer select-none'>Submit your work</h4>
                    <p className='text-[#667185] text-start select-none cursor-pointer text-[14px]'>Submit your completed project for evaluation</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className='bg-white overflow-hidden w-[470px] h-[235px] rounded-[12px] pt-[40px] pb-[40px] pr-[25px] pl-[25px]'>
              <div>
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 5</Button>
                <div className='mt-[15px]'>
                  <div className='flex flex-col space-y-[6px]'>
                    <h4 className='font-bold cursor-pointer select-none'>Receive Feedback and Recognition</h4>
                    <p className='text-[#667185] text-start select-none cursor-pointer text-[14px]'>Get feedback on your work and celebrate your achievements</p>
                  </div>
                </div>
              </div>
            </div>
            {/* card */}
          </div>

        </div>
        {/* guideline */}
    </section>
  );
};

export default GetStarted;
