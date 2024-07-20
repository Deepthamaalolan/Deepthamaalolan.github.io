import { useState } from "react";
import Animation from "./Animation";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    companyLogo: "/assets/demand-capture.jpeg",
    companyName: "DemandCapture",
    role: "Software Engineer",
    duration: "Jan 2024 - May 2024",
    details: "Developed a sales Co-Pilot using AI to extract personality insights from contact information."
  },
  {
    companyLogo: "/assets/petavue.jpeg",
    companyName: "Petavue Inc",
    role: "Software Engineer",
    duration: "June 2023 - Dec 2023",
    details: "Led the development of AI-powered data orchestration tool for enterprises."
  },
  {
    companyLogo: "/assets/njit.jpeg",
    companyName: "New Jersey Institute of Technology",
    role: "Teaching Assistant",
    duration: "Sept 2022 - May 2024",
    details: "Assisted professors with grading and held office hours for student support."
  },
  {
    companyLogo: "/assets/zoominfo.jpeg",
    companyName: "ZoomInfo Technologies Inc (Nasdaq: ZI)",
    role: "Software Engineer",
    duration: "June 2021 - Aug 2022",
    details: "Developed personalized chat features and integrations with Slack and MS Teams."
  },
  {
    companyLogo: "/assets/insent.jpeg",
    companyName: "Insent Inc (A ZoomInfo Company)",
    role: "Software Engineer",
    duration: "Aug 2020 - June 2021",
    details: "Created a conversational platform for sales and marketing representatives."
  },
  {
    companyLogo: "/assets/infosys.jpeg",
    companyName: "Infosys",
    role: "Software Engineer",
    duration: "Jan 2020 - May 2020",
    details: "Worked on various client projects involving software development and maintenance."
  },
];

export default function Work() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="bg-[#FEFAEC] p-16">
      <h2 className="text-2xl text-gray-950 font-semibold">Work Experience</h2>
      <Animation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-3xl p-6 bg-white text-sm text-gray-950 transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="ring-1 ring-transparent w-fit rounded-full">
                  <img
                    src={experience.companyLogo}
                    alt={`${experience.companyName.toLowerCase()} logo`}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-base">{experience.companyName}</p>
                  <p className="text-sm flex items-center gap-1"><FaBriefcase /> {experience.role}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 flex items-center gap-1"><FaCalendarAlt /> {experience.duration}</p>
              {expanded === index && (
                <div className="mt-4 text-xs text-gray-700">
                  <p>{experience.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Animation>
      <div id="tech" />
    </section>
  );
}
