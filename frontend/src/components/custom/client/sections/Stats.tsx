//import Ellipse1 from "";
//import Ellipse2 from "";

export default function Stats() {
  return (
    <section className="py-8 bg-white flex justify-center relative overflow-hidden">
      {/* Stats Section */}
      <div className="bg-blue-600 text-white rounded-xl relative my-5 shadow-lg px-8 lg:px-16 py-10 w-full max-w-6xl flex justify-between items-center space-x-4">
      <img
            alt="ellipse"
            src="/assets/images/bendup.png"
            className="absolute bottom-0 left-0 opacity-90 ml-15 pointer-events-none object-cover w-96"
          />
          <img
            alt="ellipse"
            src="/assets/images/bend_bottom.png"
            className="absolute top-0 right-0 opacity-90 pointer-events-none object-cover h-25"
          />
      
        {[
          { value: "1", label: "Year" },
          { value: "500+", label: "Challenges Completed" },
          { value: "10K+", label: "Users" },
          { value: "6+", label: "Countries" },
        ].map((stat, index) => (
          <div key={index} className="text-center flex-1 my-5">
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
