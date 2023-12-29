const Project = ({ item }) => {
  return (
    <div className="font-Poppins flex flex-col border-b-2 border-purple py-10">
      <span className="text-white text-center lg:text-left text-5xl font-semibold py-5">
        {item.name}
      </span>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-11/12 lg:w-7/12 shadow-skillShad rounded-lg">
          <img
            src={`/projects/${item.img}.png`}
            alt="Web Widgets"
            className="rounded-lg"
          />
        </div>
        <div className="w-11/12 lg:w-1/2 flex flex-col gap-10">
          <div className="text-grey text-2xl font-light">{item.desc}</div>

          <div className="">
            <div className="text-white text-3xl font-medium">Technologies</div>
            <div className="text-grey text-2xl font-light">
              {item.technologies.map((tech) => tech)}
            </div>
          </div>

          <div className="flex text-2xl gap-5 text-white">
            {item.live !== "" ? (
              <a
                href={item.live}
                target="_blank"
                className="flex justify-center items-center gap-2 bg-purple p-2 rounded-lg hover:opacity-70"
              >
                Live <img src="/icons/arrowLink.svg" alt="" />
              </a>
            ) : null}
            {item.code !== "" ? (
              <a
                href={item.code}
                target="_blank"
                className="flex justify-center items-center gap-2 bg-purple p-2 rounded-lg hover:opacity-70"
              >
                Code <img src="/icons/arrowLink.svg" alt="" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
