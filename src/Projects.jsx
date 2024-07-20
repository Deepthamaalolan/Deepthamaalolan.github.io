import { FaLink } from "react-icons/fa";
import Animation from "./Animation";
import React, { useState } from 'react';


const projects = [
  {
    title: "Pixie AI",
    description: [
      "Developed AI-driven patient care system to automate pre-visit check-ins, reduce nurse workloads, and enhance patient care. Designed a prioritization system to analyze patient sentiments.",
      "Converted unstructured data to structured JSON and managed urgent alerts via SMS and email.",
      "Won Best Use of Unstructured.io at the MongoDB GenAI Hackathon with AWS."
    ],
    link: "https://github.com/Deepthamaalolan/pixie_genlab",
  },
  {
    title: "MindBot: Knowledge Assistant",
    description: [
      "Developed MindBot, a Slack bot that streamlines onboarding by integrating data from various sources into a unified knowledge base.",
      "Utilized advanced NLP with Together AI’s API for accurate responses and implemented a Retrieval-Augmented Generation (RAG) tool to ensure up-to-date information.",
      "Won Best use of TogetherAI at GenAI Hackathon organized by AICamp."
    ],
    link: "https://github.com/Deepthamaalolan/MindBot",
  },
  {
    title: "Iris: Video Analysis Tool",
    description: [
      "Developed Iris, a real-time TikTok video analysis tool utilizing OpenAI Whisper for speech-to-text conversion, EasyOCR for text extraction, and Google Gemini for detecting and redacting sensitive information and offensive language.",
      "Implemented a comprehensive content scanning system for TikTok videos using OpenAI Whisper, EasyOCR, and Google Gemini models to detect and censor inappropriate content.",
      "Ensured user privacy and compliance with platform guidelines."
    ],
    link: "https://github.com/Deepthamaalolan/iris",
  },
  {
    title: "Soil Sentry",
    description: [
      "Developed Soil Sentry, a mobile app integrating sensor technology with AI to optimize water usage in agriculture. The app monitors soil moisture levels, provides real-time data and alerts, integrates drone aerial data, and offers AI-driven insights for efficient irrigation.",
      "Key features include an AI chatbot for irrigation advice, smart irrigation systems, leak detection, and water demand forecasting.",
      "Aims to reduce water waste and enhance crop yields."
    ],
    link: "https://github.com/Deepthamaalolan/Soil_Sentry",
  },
  {
    title: "House Price Prediction",
    description: [
      "Developed a prediction model using Linear Regression to estimate residential property prices based on features such as square footage, number of bedrooms, and location.",
      "Evaluated the model’s accuracy using Root-Mean-Squared-Error (RMSE) to ensure reliable price predictions for each house."
    ],
    link: "https://github.com/Deepthamaalolan/House_Price_Prediction",
  },
  {
    title: "Equity Portfolio Management",
    description: [
      "Developed a trading strategy to manage a $5M fund, involving daily data retrieval, portfolio rebalancing every 5 days, and dividend impact analysis.",
      "Developed data preparation scripts to handle historical stock data, calculate portfolio value, and adjust holdings based on price declines or gains.",
      "Analyzed performance compared to a high-tech index and currency exchange rates to optimize investment strategy."
    ],
    link: "https://github.com/Deepthamaalolan/Equity-Portfolio-Management",
  },
  {
    title: "Mushroom Classification Using Different Classifiers",
    description: [
      "Examined mushroom data and built different machine learning models that detect if the mushroom is edible or poisonous by its specifications like cap shape, cap color, gill color, etc.",
      "Used different classifiers for accurate classification."
    ],
    link: "https://github.com/Deepthamaalolan/MushroomClassification",
  },
  {
    title: "Wine Quality Prediction ML Model on AWS",
    description: [
      "Implemented a parallel machine learning application on Amazon AWS utilizing Apache Spark, Spark’s MLlib, and Docker for streamlined model deployment.",
      "Built and assessed the performance of a wine quality prediction model using Python."
    ],
    link: "https://github.com/Deepthamaalolan/Wine_Quality_Prediction",
  },
  {
    title: "RecipeWiz: Your Personal Culinary Assistant",
    description: [
      "Developed RecipeWiz, a cutting-edge web platform with an integrated chatbot powered by OpenAI's LLM, revolutionizing the cooking experience.",
      "Users enjoy a dynamic and interactive journey, receiving personalized recipe recommendations by engaging in real-time conversations with the chatbot.",
      "Built on Django, Python, and MongoDB for scalability and flexibility."
    ],
    link: "https://github.com/Deepthamaalolan/recipe_project",
  },
  {
    title: "Career Guidance - Infosys Campus Connect training program",
    description: [
      "Developed a command-line interface tool using Python and hosted it on a Windows, Apache, MySQL, PHP (WAMP) server to query career guidance information stored in a MySQL database.",
      "The target audience was high school graduates seeking information about programs offered by different universities."
    ],
    link: "https://github.com/Deepthamaalolan/CareerGuidance",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    console.log('Toggling index:', index);
    setActiveIndex(activeIndex === index ? null : index);
  };

  console.log('Current active index:', activeIndex);

  return (
    <section className="bg-[#FEFAEC] p-16">
      <h2 className="text-2xl text-gray-950 font-semibold mb-8">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-300 rounded-3xl bg-white shadow-md">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left p-6 text-lg font-semibold"
            >
              {project.title}
            </button>
            {activeIndex === index && (
              <div className="p-6">
                <ul className="list-disc pl-5 mb-4">
                  {project.description.map((point, i) => (
                    <li key={i} className="text-sm leading-6 mb-1">{point}</li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 hover:text-indigo-600 transition-colors flex items-center font-medium"
                  >
                    <FaLink size={18} className="mr-2" />
                    {`github.com/${project.link.split("/")[4]}`}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}