import { Button } from "../../../ui/button"


const GetStarted = () => {
  return (
    <section className="bg-[#F9FAFB] w-full pr-[50px] pl-[50px] py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>
        {/* guideline */}
        <div className='w-full flex space-x-[23px] justify-center'>

          <div className='flex flex-col space-y-[23px]'>

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

          <div className='flex flex-col space-y-[23px]'>
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
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 3</Button>
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
                <Button className='font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]'>Step 3</Button>
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
