import { useState } from "react";
import Animation from "./Animation";
import { FaGraduationCap, FaCalendarAlt, FaStar } from "react-icons/fa";

const education = [
  {
    logo: "/assets/njit.jpeg",
    institutionName: "New Jersey Institute of Technology",
    degree: "Masters in Computer Science",
    duration: "Sept 2022 - May 2024",
    gpa: "GPA: 4.0/4.0",
    details: "Relevant coursework: Data Structures, Algorithms, Distributed Systems, Databases."
  },
  {
    logo: "/assets/anna_university.png",
    institutionName: "Anna University",
    degree: "B.Tech in Information Technology",
    duration: "July 2016 - May 2020",
    gpa: "GPA: 8.32/10",
    details: "Relevant coursework: Software Engineering, Database Systems, Computer Networks."
  },
];

export default function Education() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="bg-[#FEFAEC] p-16">
      <h2 className="text-2xl text-gray-950 font-semibold">Education</h2>
      <Animation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-3xl p-6 bg-white text-sm text-gray-950 transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="ring-1 ring-transparent w-fit rounded-full">
                  <img
                    src={edu.logo}
                    alt={`${edu.institutionName.toLowerCase()} logo`}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-base">{edu.institutionName}</p>
                  <p className="text-sm flex items-center gap-1"><FaGraduationCap /> {edu.degree}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1"><FaCalendarAlt /> {edu.duration}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1"><FaStar /> {edu.gpa}</p>
                </div>
              </div>
              {expanded === index && (
                <div className="mt-4 text-xs text-gray-700 animate-fadeIn">
                  <p>{edu.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Animation>
      <div id="work" />
    </section>
  );
}
