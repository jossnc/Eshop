import ServiceData from "./ServicesData";

const Services = () => {
  return (
    <div>
      <div className="container my-14 md:mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-start sm:flex-row gap-4"
            >
              {data.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
