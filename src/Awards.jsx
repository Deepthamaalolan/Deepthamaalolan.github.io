import { useState } from "react";
import Animation from "./Animation";
import { FaTrophy, FaCalendarAlt } from "react-icons/fa";

const awards = [
  {
    title: "Engineering Excellence Award",
    organization: "Insent Inc (A ZoomInfo Company)",
    date: "May 2021",
    details: "Awarded for exceptional performance and contribution in engineering."
  },
  {
    title: "Making An Impact",
    organization: "ZoomInfo Technologies Inc (Nasdaq: ZI)",
    date: "July 2021",
    details: "Recognized for making significant contributions to impactful projects."
  },
];

export default function Awards() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="bg-[#FEFAEC] p-16">
      <h2 className="text-3xl text-gray-950 font-bold mb-8">Awards</h2>
      <Animation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-3xl p-6 bg-white text-sm text-gray-950 shadow-lg transition-transform transform hover:scale-105 cursor-pointer hover:shadow-xl"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center">
                  <FaTrophy className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg">{award.title}</p>
                  <p className="text-sm text-gray-600">{award.organization}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 flex items-center gap-1"><FaCalendarAlt /> {award.date}</p>
              {expanded === index && (
                <div className="mt-4 text-xs text-gray-700">
                  <p>{award.details}</p>
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
