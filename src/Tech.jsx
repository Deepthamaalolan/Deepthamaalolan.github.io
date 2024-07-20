import Animation from "./Animation";
import { FaDatabase, FaTools, FaCode, FaCloud, FaRobot } from "react-icons/fa";

const technologies = [
  {
    category: "Programming",
    icon: <FaCode />,
    stack: ["Python", "NodeJs", "Typescript", "Javascript", "Java", "C++", "R", "HTML", "CSS"],
  },
  {
    category: "Database",
    icon: <FaDatabase />,
    stack: ["MongoDB", "MySQL", "Redis", "Snowflake", "VectorDB", "PostgreSQL", "BigQuery", "PL/SQL"],
  },
  {
    category: "Libraries/Framework",
    icon: <FaTools />,
    stack: ["Express.js", "REST API", "OpenAI", "NestJS", "Django", "Mocha", "JEST", "JSON", "FastAPI", "Flask", "Apache Spark"],
  },
  {
    category: "Cloud Services",
    icon: <FaCloud />,
    stack: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"],
  },
  {
    category: "Tools",
    icon: <FaTools />,
    stack: ["Docker", "Datadog", "Git", "Sentry", "Swagger", "Postman", "JIRA", "Confluence", "Bitbucket", "Figma"],
  },
  {
    category: "Machine Learning",
    icon: <FaRobot />,
    stack: ["Jupyter", "TensorFlow", "Scikit-learn", "NLP", "Numpy", "Pandas", "Keras"],
  },
];

export default function Tech() {
  return (
    <section className="bg-[#FEFAEC] p-16">
      <h2 className="text-2xl text-gray-950 font-semibold">Technologies</h2>
      <Animation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {technologies.map((technology, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 bg-white text-sm text-gray-950 transition-transform transform hover:scale-105"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl text-indigo-600">
                  {technology.icon}
                </div>
                <h4 className="text-lg font-medium text-gray-950">
                  {technology.category}
                </h4>
              </div>
              <div className="flex items-center flex-wrap gap-3">
                {technology.stack.map((st, stIndex) => (
                  <div
                    key={stIndex}
                    className="text-xs rounded-full py-2 px-4 bg-indigo-600/10 text-indigo-600"
                    title={st}
                  >
                    {st}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Animation>
      <div id="projects" />
    </section>
  );
}
