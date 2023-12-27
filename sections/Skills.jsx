const Skills = () => {
  const skills = [
    {
      title: "Programming Languages",
      content: [
        { name: "C", icon: "c/c-original.svg" },
        { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "python/python-original.svg" },
        { name: "JavaScript", icon: "javascript/javascript-original.svg" },
        { name: "Dart", icon: "dart/dart-original.svg" },
      ],
    },
    {
      title: "Frontend",
      content: [
        { name: "HTML", icon: "html5/html5-original.svg" },
        { name: "CSS", icon: "css3/css3-original.svg" },
        { name: "TailwindCSS", icon: "tailwindcss/tailwindcss-plain.svg" },
        { name: "React.js", icon: "react/react-original.svg" },
        { name: "Redux", icon: "redux/redux-original.svg" },
        { name: "NextJS", icon: "nextjs/nextjs-original.svg" },
      ],
    },
    {
      title: "Backend/Databases",
      content: [
        { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "express/express-original.svg" },
        { name: "MongoDB", icon: "mongodb/mongodb-original-wordmark.svg" },
        { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
        { name: "PHP", icon: "php/php-plain.svg" },
        { name: "MySQL", icon: "mysql/mysql-original.svg" },
        { name: "Firebase", icon: "firebase/firebase-plain.svg" },
      ],
    },
  ];

  return (
    <div className="text-white pt-16" id="skills">
      <div className="flex items-center justify-center text-center text-5xl font-Poppins px-2 py-1 font-medium mb-10 ">
        Tools & Skills
      </div>
      <div className="flex flex-col mx-5 lg:flex-row  items-center lg:items-stretch justify-evenly gap-4 lg:gap-12 gap-y-10">
        {skills.map((item, index) => {
          return (
            <div
              className="border border-purple w-full md:w-4/5 lg:w-3/5 min-h-full p-2 rounded-xl bg-[#171721] shadow-skillShad"
              key={index}
            >
              <div className="text-center text-2xl font-Poppins py-4 text-grey">
                {item.title}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center items-center">
                {item.content.map((skill, indx) => {
                  return (
                    <div
                      key={indx}
                      className="p-4 flex flex-col items-center justify-center gap-2 font-Dosis text-xl text-grey hover:scale-110 transition-all duration-200 ease-in-out"
                    >
                      <span>
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                          alt={skill.name}
                          width={40}
                        />
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
