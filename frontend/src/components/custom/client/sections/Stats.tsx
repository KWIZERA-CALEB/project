export default function Stats() {
    return (
      <section className="py-8 bg-gray-100 flex justify-center">
        <div className="bg-blue-500 text-white rounded-lg shadow-lg px-8 lg:px-16 py-6 w-full max-w-6xl flex justify-between items-center space-x-4">
          {[
            { value: "1", label: "Year" },
            { value: "500+", label: "Challenges Completed" },
            { value: "10K+", label: "Users" },
            { value: "6+", label: "Countries" },
          ].map((stat, index) => (
            <div key={index} className="text-center flex-1">
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  