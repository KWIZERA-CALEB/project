"use client";
import Image from "next/image";

export default function Companies() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        {/* Heading */}
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8">
          Join a few Educational Institutions using <br />
          <span className="text-blue-600">Skills Challenges by Umurava</span>
        </h2>

        {/* images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {/* Logo Items */}
          <Image
            src="/assets/images/Tori 1.png"
            alt="Tori Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
          <Image
            src="/assets/images/Gdg_Kigali 1.png"
            alt="GDG Kigali Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
          <Image
            src="/assets/images/EducationC.png"
            alt="The Education Collaborative Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
          <Image
            src="/assets/images/keplerLogo 1.png"
            alt="Kepler Logo"
            width={100}
            height={50}
            className="mx-auto object-cover"
          />
          <Image
            src="/assets/images/Hill.png"
            alt="HiiL Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
          <Image
            src="/assets/images/ciba 1.png"
            alt="CIB Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
          <Image
            src="/assets/images/ared 1.png"
            alt="ARED Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
          <Image
            src="/assets/images/igihe_LOGO 1.png"
            alt="Igihe Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
          <Image
            src="/assets/images/EducationCollaborative 1.png"
            alt="Viamo Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
          <Image
            src="/assets/images/KeplerLogo 1.png"
            alt="Laterite Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
          <Image
            src="/assets/images/HiiL_Logo 1.png"
            alt="HiiL Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
          <Image
            src="/assets/images/sokofund 1.png"
            alt="SokoFresh Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
