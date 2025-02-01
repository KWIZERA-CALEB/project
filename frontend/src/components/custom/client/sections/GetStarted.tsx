import { Button } from "../../../ui/button";

interface StepCardProps {
  step: string;
  title: string;
  description: string;
  image?: string;
  tall?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description, image, tall }) => {
  return (
    <div className={`bg-white relative overflow-hidden w-full ${tall ? "h-[350px]" : "h-[220px]"} rounded-xl p-6 shadow-md`}>
      <Button className="px-4 py-2 font-sans bg-umuravaBlueColor text-white hover:bg-umuravaBlueColor/[90%]">
        {step}
      </Button>
      <div className="mt-4">
        <h4 className="font-bold text-lg cursor-pointer">{title}</h4>
        <p className="text-[#667185] text-start text-sm leading-relaxed">{description}</p>
      </div>
      {image && (
        <div className="absolute bottom-4 right-4 max-w-[140px] md:max-w-[180px]">
          <img src={image} className="object-contain w-full h-auto" alt={title} loading="lazy" />
        </div>
      )}
    </div>
  );
};

const GetStarted: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB] w-full px-5 md:px-12 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>

      {/* Mobile View (Stacked) */}
      <div className="flex flex-col md:hidden gap-6">
        <StepCard step="Step 1" title="Sign up on Umurava Platform" description="Submit your completed project for evaluation" image="/assets/images/signup-screen.png" />
        <StepCard step="Step 2" title="Complete Your Profile" description="Ensure your profile details are up-to-date" image="/assets/images/profile-screen.png" />
        <StepCard step="Step 3" title="Explore Opportunities" description="Browse job postings and projects that match your skills" image="/assets/images/explore-screen.png" />
      </div>

      {/* Desktop View (Grid) */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        <StepCard step="Step 1" title="Sign up on Umurava Platform" description="Submit your completed project for evaluation" image="/assets/images/signup-screen.png" />
        <StepCard step="Step 2" title="Complete Your Profile" description="Ensure your profile details are up-to-date" image="/assets/images/profile-screen.png" />
        <StepCard step="Step 3" title="Explore Opportunities" description="Browse job postings and projects that match your skills" image="/assets/images/explore-screen.png" />
      </div>
    </section>
  );
};

export default GetStarted;
