import { Button } from "../../../ui/button";

const StepCard = ({ step, title, description, image, tall }) => {
  return (
    <div className={`bg-white relative overflow-hidden w-full ${tall ? "h-[350px]" : "h-[220px]"} rounded-xl p-6`}>
      <Button className="font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]">
        {step}
      </Button>
      <div className="mt-4">
        <h4 className="font-bold cursor-pointer">{title}</h4>
        <p className="text-[#667185] text-start text-sm">{description}</p>
      </div>
      {image && (
        <div className="absolute bottom-0 right-0">
          <img src={image} className="max-w-[140px] md:max-w-[180px]" alt={title} />
        </div>
      )}
    </div>
  );
};
const GetStarted = () => {
  return (
    <section className="bg-[#F9FAFB] w-full px-5 md:px-12 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>

      {/* Mobile View (Stacked) */}
      <div className="flex flex-col md:hidden gap-6">
        <StepCard step="Step 1" title="Sign up on Umurava Platform" description="Submit your completed project for evaluation" image="/assets/images/signup-screen.png" />
        <StepCard step="Step 2" title="Browse Open Challenges" description="Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals" image="/assets/images/challenges-screen.png" />
        <StepCard step="Step 3" title="Register and Participate" description="Sign up for the challenge and start working on the project." />
        <StepCard step="Step 4" title="Submit your work" description="Submit your completed project for evaluation" />
        <StepCard step="Step 5" title="Receive Feedback and Recognition" description="Get feedback on your work and celebrate your achievements" />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center gap-x-6">
        {/* Left Column (Step 1 & 2, slightly reduced width) */}
        <div className="flex flex-col gap-y-6 w-[420px]">
          <StepCard step="Step 1" title="Sign up on Umurava Platform" description="Submit your completed project for evaluation" image="/assets/images/signup-screen.png" tall />
          <StepCard step="Step 2" title="Browse Open Challenges" description="Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals" image="/assets/images/challenges-screen.png" tall />
        </div>

        {/* Right Column (Step 3, 4, 5) - Retains original width for better proportions */}
        <div className="flex flex-col gap-y-6 w-[470px]">
          <StepCard step="Step 3" title="Register and Participate" description="Sign up for the challenge and start working on the project." />
          <StepCard step="Step 4" title="Submit your work" description="Submit your completed project for evaluation" />
          <StepCard step="Step 5" title="Receive Feedback and Recognition" description="Get feedback on your work and celebrate your achievements" />
        </div>
      </div>
    </section>
  );
};

// StepCard Component


export default GetStarted;
