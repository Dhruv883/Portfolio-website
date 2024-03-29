import ProjectComp from "@/components/ProjectComp";
import ProjectsList from "@/sections/ProjectsList";

const Projects = () => {
  const proj = ProjectsList.slice(0, 3);
  return (
    <div className="text-purple pt-16" id="projects">
      <div className="flex items-center justify-center text-center text-5xl font-Poppins px-2 py-1 font-medium  ">
        Projects
      </div>
      <div className="mx-5">
        {proj.map((item, index) => {
          return <ProjectComp key={index} item={item} />;
        })}
      </div>
      <a
        className="mx-5 text-5xl py-10 cursor-pointer flex items-center gap-5 text-white border-b-2 border-purple"
        href="https://github.com/Dhruv883"
        target="_blank"
      >
        <span>View More</span>
        <img src="/icons/arrowLink.svg" alt="" width={55} className="pt-4" />
      </a>
    </div>
  );
};

export default Projects;
